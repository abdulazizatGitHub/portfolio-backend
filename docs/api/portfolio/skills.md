# Skills API (Public)

Endpoints for retrieving professional skills and technologies.

## 1. List All Skills
Retrieve a list of skills, optionally filtered by category.

- **Endpoint**: `GET /api/v1/skills`
- **Authorization**: None
- **Description**: Returns a list of skills with filtering support.

### Query Parameters
| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `category` | String | No | - | Filter by category name (e.g., `Backend`) |
| `search` | String | No | - | Search by skill name |
| `page` | Integer | No | 1 | Page number |
| `limit` | Integer | No | 20 | Items per page |

### Response
**200 OK**
```json
{
  "success": true,
  "message": "Skills retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "name": "React.js",
      "slug": "react",
      "category": "Frontend",
      "level": 80,
      "icon_url": "https://...",
      "created_at": "timestamp"
    }
  ],
  "meta": {
    "total": 8,
    "page": 1,
    "limit": 20
  }
}
```
