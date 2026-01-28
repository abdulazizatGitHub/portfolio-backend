# Analytics API (Public)

Public endpoints for tracking professional engagement and portfolio interaction.

## 📈 Log Engagement Event
Report a specific user interaction (e.g., CV download, external link click).

- **Endpoint**: `POST /api/v1/analytics/events`
- **Authentication**: None (Public)
- **Content-Type**: `application/json`

### Request Body
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `string` | Yes | Event identifier (e.g., `cv_download`, `social_click`) |
| `category` | `string` | No | Higher-level grouping (e.g., `engagement`, `navigation`) |
| `label` | `string` | No | Specific item description (e.g., `LinkedIn`, `Resume_2024.pdf`) |
| `metadata` | `object` | No | Flexible JSON object for extra context (e.g., `{ "source": "hero_section" }`) |

### Example Request
```json
{
  "type": "cv_download",
  "category": "engagement",
  "label": "Resume_Main.pdf",
  "metadata": {
    "page": "home",
    "section": "summary"
  }
}
```

### Response (201 Created)
```json
{
  "success": true,
  "message": "Event logged successfully",
  "data": null
}
```

---

## 🛠️ Automated Traffic Tracking
The system automatically tracks page visits for the following public endpoints:
- `GET /api/v1/projects`
- `GET /api/v1/skills`
- `GET /api/v1/personal`
- `GET /api/v1/about`
- `GET /api/v1/timeline`
- `GET /api/v1/contact`

No manual implementation is required for these visit logs.
