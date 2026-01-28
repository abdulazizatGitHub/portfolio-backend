# Public API Documentation

These endpoints are used by the visitor-facing frontend to display portfolio content. They do not require authentication for GET requests.

## Base URL: `/api/v1`

---

### 📂 Categories
- **`GET /categories`**: List all categories.
  - **Query Params**: `page`, `limit`, `search`, `sortBy`, `sortOrder`.
- **`GET /categories/:slug`**: Get a single category by its unique slug.

---

### 🛠️ Skills
- **`GET /skills`**: List all skills.
  - **Query Params**: `category` (Filter by category name), `search`, `page`, `limit`.

---

### 🚀 Projects
- **`GET /projects`**: List all published projects.
  - **Query Params**: 
    - `page`, `limit`, `search`, `sortBy`
    - `category` (Category ID)
    - `featured` (true/false)
- **`GET /projects/:id`**: Get detailed project data by ID (UUID).
- **`GET /projects/slug/:slug`**: Get detailed project data by unique slug.

---

### 👤 Identity & Biography
- **`GET /personal`**: Get name, hero description, and CV download info.
- **`GET /about`**: Get aggregated bio data (Role title, Paragraphs, Stats).

---

### ⏳ Timeline & Professional History
- **`GET /timeline`**: Get aggregated education and experience history.
- **`GET /timeline/education`**: List all education entries.
- **`GET /timeline/experience`**: List all work experience entries.

---

### 📞 Contact & Connectivity
- **`GET /contact`**: Get contact section headers, info items (Email, Phone), and social links.

---

### ✉️ Standard Response Format
All public APIs return data in this envelope:
```json
{
  "success": true,
  "message": "Description of action",
  "data": { ... },
  "meta": { "total": 10, "page": 1, "limit": 10 } // Only for list responses
}
```
