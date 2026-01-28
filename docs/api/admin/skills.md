# Skill Management API (Admin)

Endpoints for managing professional skills in the admin dashboard.

## Headers
- **Authorization**: `Bearer <accessToken>`
- **Content-Type**: `application/json`

---

## 1. Create Skill
- **Endpoint**: `POST /api/v1/skills`
- **Role**: Admin
- **Body**:
```json
{
  "name": "Prisma",
  "slug": "prisma", // Optional
  "category": "Backend",
  "level": 80,
  "icon_url": "https://..."
}
```

> [!NOTE]
> Skill creation is automatically logged in the administrative activity feed.

---

## 2. Update Skill
- **Endpoint**: `PATCH /api/v1/skills/:id`
- **Params**: `id` (UUID)
- **Role**: Admin
- **Body**: (Partial update)
```json
{
  "category": "Database",
  "level": 95
}
```

> [!NOTE]
> All updates to skills and their proficiency levels are tracked in the dashboard activity feed.

---

## 3. Delete Skill
- **Endpoint**: `DELETE /api/v1/skills/:id`
- **Params**: `id` (UUID)
- **Role**: Admin
- **Description**: Permanently removes the skill.

---

## 🖼️ 4. Upload Skill Icon
Upload and link a professional icon to an existing skill.

- **Endpoint**: `POST /api/v1/skills/:id/icon`
- **Authentication**: Private (Admin)
- **Content-Type**: `multipart/form-data`
- **Field Name**: `skill-icon`
- **Allowed Types**: `image/jpeg`, `image/png`, `image/webp`
- **Size Limit**: 5MB

### Response (200 OK)
Standard Skill object with updated `icon_url`.
