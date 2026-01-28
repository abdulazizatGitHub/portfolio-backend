# Dashboard API (Admin)

Administrative endpoints for the Command Center analytics and statistical summaries.

## Headers
- **Authorization**: `Bearer <accessToken>`

---

## 📊 Get Command Center Statistics
Retrieve all metrics required for the admin dashboard cards and charts.

- **Endpoint**: `GET /api/v1/dashboard/stats`
- **Authentication**: Private (Admin)

### Response (200 OK)
```json
{
  "success": true,
  "message": "Dashboard statistics retrieved successfully",
  "data": {
    "growthAnalytics": {
      "totalVisits": 1250,
      "uniqueVisitors": 850,
      "pageViews": 1250,
      "cvDownloads": 45
    },
    "visitTrend": [
      {
        "date": "2024-03-01",
        "visits": 12,
        "uniqueVisitors": 10,
        "pageViews": 12
      }
    ],
    "contentVelocity": {
      "projects": 15,
      "skills": 28,
      "experience": 5,
      "education": 3
    },
    "deepInsights": {
      "techStack": [
        { "name": "React", "count": 10 },
        { "name": "TypeScript", "count": 8 }
      ],
      "topPages": [
        { "path": "/api/v1/projects", "views": 450 },
        { "path": "/api/v1/skills", "views": 320 }
      ],
      "deviceBreakdown": [
        { "device": "desktop", "count": 800 },
        { "device": "mobile", "count": 450 }
      ],
      "trafficSources": [
        { "referer": "google.com", "count": 450 },
        { "referer": "linkedin.com", "count": 300 },
        { "referer": "direct", "count": 100 }
      ]
    },
    "recentActivities": [
      {
        "id": "uuid",
        "action": "UPDATE",
        "entityType": "identity",
        "entityName": "Personal Identity",
        "description": "Updated professional identity...",
        "created_at": "timestamp"
      }
    ]
  }
}
```
