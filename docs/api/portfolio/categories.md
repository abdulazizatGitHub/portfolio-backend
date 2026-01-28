# Categories API (Public)

Endpoints for retrieving project categories.

## 1. List All Categories
Retrieve a list of all active categories with pagination and sorting.

- **Endpoint**: `GET /api/v1/categories`
- **Authorization**: None
- **Description**: Returns a paginated list of categories.

### Query Parameters
| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `page` | Integer | No | 1 | Page number |
| `limit` | Integer | No | 10 | Items per page (max 100) |
| `search` | String | No | - | Search by name or description |
| `sortBy` | String | No | `order_index` | Field to sort by (`name`, `order_index`, `created_at`) |
| `sortOrder` | String | No | `asc` | Sort direction (`asc`, `desc`) |

### Response
**200 OK**
```json
{
  "success": true,
  "message": "Categories retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "name": "Web Development",
      "slug": "web-development",
      "description": "Full-stack apps",
      "order_index": 0,
      "created_at": "timestamp"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

---

## 2. Get Category by Slug
Retrieve details of a specific category using its unique slug.

- **Endpoint**: `GET /api/v1/categories/:slug`
- **Authorization**: None
- **Description**: Returns a single category record.

### Path Parameters
- `slug`: Unique identifier for the category (e.g., `web-development`).

### Response
**200 OK**
```json
{
  "success": true,
  "message": "Category retrieved successfully",
  "data": {
    "id": "uuid",
    "name": "Web Development",
    "slug": "web-development",
    "description": "Full-stack apps",
    "order_index": 0
  }
}
```
**404 Not Found**
```json
{
  "success": false,
  "message": "Category not found"
}
```
