# Project Management API (Admin)

Endpoints for full project lifecycle management in the dashboard.

## Headers
- **Authorization**: `Bearer <accessToken>`
- **Content-Type**: `application/json`

---

## 1. Create Project
- **Endpoint**: `POST /api/v1/projects`
- **Role**: Admin
- **Body**:
```json
{
  "title": "Laboratory Management System",
  "description": "Short summary...",
  "long_description": "Detailed text...",
  "category_id": "uuid",
  "skill_ids": ["uuid1", "uuid2"], // Array of skill UUIDs
  "demo_url": "https://...",
  "repo_url": "https://...",
  "featured": true,
  "is_published": true,
  "order_index": 0
}
```

---

## 2. Update Project
- **Endpoint**: `PATCH /api/v1/projects/:id`
- **Params**: `id` (UUID)
- **Role**: Admin
- **Body**: (Partial updates supported)
```json
{
  "title": "Updated Title",
  "skill_ids": ["new-uuid-list"] // Overwrites existing associations
}
```

---

## 3. Delete Project
- **Endpoint**: `DELETE /api/v1/projects/:id`
- **Params**: `id` (UUID)
- **Role**: Admin
- **Description**: Soft deletes the project.

---

## 4. Restore Project
- **Endpoint**: `PATCH /api/v1/projects/:id/restore`
- **Params**: `id` (UUID)
- **Role**: Admin
