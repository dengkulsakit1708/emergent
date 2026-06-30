"""Backend API tests for PT Sonar Nusantara Utama"""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://sonar-tech-hub.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health check
class TestHealth:
    def test_root_endpoint(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Sonar" in data["message"]


# Contact form POST/GET
class TestContact:
    def test_create_contact_inquiry(self, api_client):
        payload = {
            "name": "TEST_John Doe",
            "company": "TEST_Acme",
            "email": "TEST_john@example.com",
            "phone": "+62 21 1234 5678",
            "inquiry_type": "Technology Distribution",
            "message": "TEST_Interested in marine survey solutions for offshore project."
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, f"Expected 200, got {r.status_code}: {r.text}"
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["company"] == payload["company"]
        assert data["inquiry_type"] == payload["inquiry_type"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str)
        assert "created_at" in data
        # Save id for retrieval check
        pytest.created_id = data["id"]
        pytest.created_email = data["email"]

    def test_list_contains_created(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        # Should not return _id
        if items:
            assert "_id" not in items[0]
        ids = [i["id"] for i in items]
        assert pytest.created_id in ids, "Created contact not persisted in DB"

    def test_create_with_minimal_fields(self, api_client):
        payload = {
            "name": "TEST_Minimal",
            "email": "TEST_minimal@example.com",
            "inquiry_type": "General",
            "message": "TEST_minimal"
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["company"] is None
        assert data["phone"] is None

    def test_invalid_email_rejected(self, api_client):
        payload = {
            "name": "TEST_Bad Email",
            "email": "not-an-email",
            "inquiry_type": "General",
            "message": "TEST_invalid"
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_missing_required_fields_rejected(self, api_client):
        payload = {"name": "TEST_Missing"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422
