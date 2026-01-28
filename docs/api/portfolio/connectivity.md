# Timeline & Contact API (Public)

Endpoints for chronological history and connectivity channels.

## 1. Get Timeline Data
Retrieve aggregated education and work history.

- **Endpoint**: `GET /api/v1/timeline`
- **Authorization**: None

### Response
**200 OK**
```json
{
  "success": true,
  "message": "Timeline data retrieved",
  "data": {
    "education": [
      { "period": "2021 - 2025", "title": "B.S Software Engineering", "description": "..." }
    ],
    "experience": [
      { "period": "Oct 2025 - Present", "title": "Frontend Developer", "description": "..." }
    ]
  }
}
```

---

## 2. Get Contact Data
Retrieve contact section details, info items, and social links.

- **Endpoint**: `GET /api/v1/contact`
- **Authorization**: None

### Response
**200 OK**
```json
{
  "success": true,
  "message": "Contact data retrieved",
  "data": {
    "subtitle": "Let's connect...",
    "info_title": "Contact Information",
    "info_description": "Feel free to reach out...",
    "success_title": "Sent!",
    "infoItems": [
      { "type": "email", "label": "Email", "value": "a@b.com", "href": "mailto:a@b.com" }
    ],
    "socialLinks": [
      { "platform": "LinkedIn", "url": "https://..." }
    ]
  }
}
```
