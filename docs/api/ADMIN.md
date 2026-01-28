# Admin API Documentation (Management)

These endpoints are used by the **Admin Panel** to manage portfolio content. All endpoints in this document require authentication and **ADMIN** role privileges.

## Headers
- **Authorization**: `Bearer <accessToken>`
- **Content-Type**: `application/json`

---

## 📂 Category Management
- **`POST /categories`**: Create a new category.
- **`PUT /categories/:id`**: Update existing category.
- **`DELETE /categories/:id`**: Soft delete a category.
- **`PATCH /categories/:id/restore`**: Restore a soft-deleted category.

---

## 🛠️ Skill Management
- **`POST /skills`**: Create a new skill.
- **`PATCH /skills/:id`**: Partial update for a skill.
- **`DELETE /skills/:id`**: Permanently delete a skill.

---

## 🚀 Project Management
- **`POST /projects`**: Create a project (Includes mapping to Category and Skills).
- **`PATCH /projects/:id`**: Update project details and skill associations.
- **`DELETE /projects/:id`**: Soft delete a project.
- **`PATCH /projects/:id/restore`**: Restore a soft-deleted project.

---

## 👤 Identity & Bio Management
- **`PUT /personal`**: Update name, description, imagery, and CV details.
- **`POST /personal/roles`**: Add a new job title role.
- **`DELETE /personal/roles/:id`**: Remove a job title.
- **`PUT /about`**: Update the "About Me" role title and professional imagery.
- **`POST /about/paragraphs`**: Add a bio paragraph.
- **`PATCH /about/paragraphs/:id`**: Edit a paragraph.
- **`DELETE /about/paragraphs/:id`**: Remove a paragraph.
- **`POST /about/stats`**: Add a professional metric (e.g., CGPA).
- **`DELETE /about/stats/:id`**: Remove a metric.

---

## ⏳ Timeline Management
- **`POST /timeline/education`**: add an academic entry.
- **`PATCH /timeline/education/:id`**: Edit an academic entry.
- **`DELETE /timeline/education/:id`**: Remove an academic entry.
- **`POST /timeline/experience`**: Add a professional work entry.
- **`PATCH /timeline/experience/:id`**: Edit work experience.
- **`DELETE /timeline/experience/:id`**: Remove work experience.

---

## 📞 Connectivity & Links
- **`PUT /contact`**: Update contact section subtitle, success messages, and informational text.
- **`POST /contact/info`**: Add a contact point (Email, Phone, etc.).
- **`DELETE /contact/info/:id`**: Remove a contact point.
- **`POST /contact/socials`**: Add a professional social link.
- **`DELETE /contact/socials/:id`**: Remove a social link.

---

## 📝 Request Payloads
Most administrative endpoints expect a `body` object. IDs used in paths must be valid UUIDs.
Example for **`POST /skills`**:
```json
{
  "name": "Prisma",
  "slug": "prisma",
  "category": "Backend",
  "level": 90,
  "icon_url": "https://..."
}
```
Example for **`POST /projects`**:
```json
{
  "title": "New Project",
  "category_id": "uuid",
  "skill_ids": ["uuid1", "uuid2"],
  "description": "Short bio",
  "is_published": true
}
```
