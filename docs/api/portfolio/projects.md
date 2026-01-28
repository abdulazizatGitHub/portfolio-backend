# Projects API (Public)

Endpoints for retrieving portfolio projects and case studies.

## 1. List All Projects
Retrieve all published projects with advanced filtering.

- **Endpoint**: `GET /api/v1/projects`
- **Authorization**: None
- **Description**: Returns a paginated list of projects including their categories and thumbnail images.

### Query Parameters
| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `page` | Integer | No | 1 | Page number |
| `limit` | Integer | No | 10 | Items per page |
| `search` | String | No | - | Search by title or description |
| `category_id`| UUID | No | - | Filter by category ID |
| `featured` | Boolean| No | - | Filter by featured status (`true`/`false`) |
| `sortBy` | String | No | `order_index` | Field (`title`, `order_index`, `created_at`) |
| `sortOrder` | String | No | `asc` | Direction (`asc`, `desc`) |

### Response
**200 OK**
```json
{
  "success": true,
  "message": "Projects retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "title": "Virtual Try-On System",
      "slug": "virtual-try-on",
      "description": "Short bio...",
      "featured": true,
      "order_index": 0,
      "category": { "name": "AI & ML" },
      "images": [ { "url": "...", "is_thumbnail": true } ]
    }
  ]
}
```

---

## 2. Get Project Details
Retrieve full details of a project by ID or Slug.

- **Endpoints**: 
  - `GET /api/v1/projects/:id` (By UUID)
  - `GET /api/v1/projects/slug/:slug` (By unique slug)
- **Authorization**: None

### Response
**200 OK**
```json
{
  "success": true,
  "message": "Project retrieved successfully",
  "data": {
    "id": "uuid",
    "title": "Virtual Try-On System",
    "long_description": "Extensive project details...",
    "demo_url": "https://...",
    "repo_url": "https://...",
    "skills": [ { "skill": { "name": "PyTorch" } } ],
    "images": [ ... ]
  }
}
```
