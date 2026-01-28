# Identity API (Public)

Endpoints for personal information, bio, and professional profile details.

## 1. Get Personal Info
Retrieve basic identity details (Name, Hero description, CV info).

- **Endpoint**: `GET /api/v1/personal`
- **Authorization**: None

### Response
**200 OK**
```json
{
  "success": true,
  "message": "Personal content retrieved",
  "data": {
    "name": "Abdul Aziz",
    "title_prefix": "Hi, I'm",
    "description": "Passionate Software Engineer...",
    "profile_image_url": "https://images.unsplash.com/... (optional)",
    "cv_file_path": "/My CV (Updated).pdf",
    "cv_download_name": "Abdul-Aziz-CV.pdf",
    "roles": [
      { "label": "AI/ML Engineer" },
      { "label": "Full-Stack Developer" }
    ]
  }
}
```

---

## 2. Get About Data
Retrieve aggregated biography information and professional stats.

- **Endpoint**: `GET /api/v1/about`
- **Authorization**: None

### Response
**200 OK**
```json
{
  "success": true,
  "message": "About data retrieved",
  "data": {
    "role_title": "AI/ML Engineer & Full-Stack Developer",
    "heading_prefix": "About",
    "heading_highlight": "Me",
    "portrait_image_url": "https://images.unsplash.com/... (optional)",
    "paragraphs": [
      { "content": "I'm a passionate...", "order_index": 0 }
    ],
    "stats": [
      { "label": "CGPA", "value": "3.52" },
      { "label": "Experience", "value": "2+" }
    ]
  }
}
```
