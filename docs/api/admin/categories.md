# Category Management API (Admin)

Endpoints for managing project categories in the admin dashboard.

## Headers
- **Authorization**: `Bearer <accessToken>`
- **Content-Type**: `application/json`

---

## 1. Create Category
Create a new project category.

- **Endpoint**: `POST /api/v1/categories`
- **Role**: Admin
- **Body**:
```json
{
  "name": "Design",
  "slug": "design", // Optional, auto-generated if missing
  "description": "Visual assets",
  "order_index": 2
}
```

---

## 2. Update Category
Update an existing category.

- **Endpoint**: `PUT /api/v1/categories/:id`
- **Params**: `id` (UUID)
- **Role**: Admin
- **Body**: (Partial updates supported)
```json
{
  "name": "Updated Design"
}
```

---

## 3. Delete Category
Soft delete a category.

- **Endpoint**: `DELETE /api/v1/categories/:id`
- **Params**: `id` (UUID)
- **Role**: Admin

---

## 4. Restore Category
Reactivate a soft-deleted category.

- **Endpoint**: `PATCH /api/v1/categories/:id/restore`
- **Params**: `id` (UUID)
- **Role**: Admin
+ **Success Response**: (200 OK)
