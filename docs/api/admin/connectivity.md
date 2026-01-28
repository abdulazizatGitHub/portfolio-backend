# Timeline & Connectivity Management API (Admin)

Endpoints for managing historical records and contact channels.

## Headers
- **Authorization**: `Bearer <accessToken>`

---

## 🎓 Education Timeline
- **`POST /api/v1/timeline/education`**: Add academic record.
  - Body: `{ "period": "2021-2025", "title": "...", "description": "...", "order_index": 0 }`
- **`PATCH /api/v1/timeline/education/:id`**: Edit record.
- **`DELETE /api/v1/timeline/education/:id`**: Remove record.

> [!NOTE]
> Timeline modifications (Education/Experience) are tracked in the administrative activity log.

---

## 💼 Experience Timeline
- **`POST /api/v1/timeline/experience`**: Add professional record.
  - Body: `{ "period": "...", "title": "...", "description": "...", "order_index": 0 }`
- **`PATCH /api/v1/timeline/experience/:id`**: Edit record.
- **`DELETE /api/v1/timeline/experience/:id`**: Remove record.

---

## 📞 Shared Contact Config
- **`PUT /api/v1/contact`**: Update section headers and informational text.
  - Body: 
  ```json
  { 
    "subtitle": "...", 
    "info_title": "Contact Information",
    "info_description": "Custom text for contact section...",
    "success_title": "...", 
    "success_message": "..." 
  }
  ```

> [!NOTE]
> All updates to professional connectivity configuration are captured for the activity feed.

---

## 📍 Contact Info Items
- **`POST /api/v1/contact/info`**: Add item (e.g., Email).
  - Body: `{ "type": "email", "label": "Email", "value": "...", "href": "...", "order_index": 0 }`
- **`DELETE /api/v1/contact/info/:id`**: Remove item.

---

## 🔗 Social Platforms
- **`POST /api/v1/contact/socials`**: Add social link.
  - Body: `{ "platform": "LinkedIn", "url": "...", "order_index": 0 }`
- **`DELETE /api/v1/contact/socials/:id`**: Remove social link.
