# Identity & Bio Management API (Admin)

Endpoints for managing professional profile and biography components.

## Headers
- **Authorization**: `Bearer <accessToken>`

---

## 👤 Personal Content (Singleton)
- **Endpoint**: `PUT /api/v1/personal`
- **Body**:
```json
{
  "name": "Abdul Aziz",
  "title_prefix": "Hi, I'm",
  "description": "...",
  "profile_image_url": "...",
  "cv_file_path": "...",
  "cv_download_name": "..."
}
```

> [!NOTE]
> All updates to personal identity are logged in the administrative activity feed.

---

## 🎭 Job Roles Management
- **`POST /api/v1/personal/roles`**: Add a new role title.
  - Body: `{ "label": "Full-Stack Developer", "order_index": 0 }`
- **`DELETE /api/v1/personal/roles/:id`**: Remove a role by ID.

---

## 📝 About Management
- **`PUT /api/v1/about`**: Update the professional title and imagery.
  - Body: 
  ```json
  { 
    "role_title": "AI/ML Engineer",
    "heading_prefix": "About",
    "heading_highlight": "Me",
    "portrait_image_url": "https://..." 
  }
  ```

> [!NOTE]
> Descriptive headings and professional portraits are now fully dynamic.

---

## 🖋️ Bio Paragraphs
- **`POST /api/v1/about/paragraphs`**: Add paragraph.
  - Body: `{ "content": "Text here...", "order_index": 0 }`
- **`PATCH /api/v1/about/paragraphs/:id`**: Update text.
- **`DELETE /api/v1/about/paragraphs/:id`**: Remove paragraph.

---

## 📊 Stats Management
- **`POST /api/v1/about/stats`**: Add metric.
  - Body: `{ "label": "Projects", "value": "10+", "context": "about" }`
- **`DELETE /api/v1/about/stats/:id`**: Remove metric.
