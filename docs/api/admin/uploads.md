# Upload API (Admin)

Internal endpoints for handling file uploads (Images, CVs, Documents). All endpoints requires `multipart/form-data`.

## Headers
- **Authorization**: `Bearer <accessToken>`
- **Content-Type**: `multipart/form-data`

---

## 🖼️ Image Upload
Upload a project image or thumbnail.

- **Endpoint**: `POST /api/v1/uploads/image`
- **Field Name**: `image`
- **Allowed Types**: `image/jpeg`, `image/png`, `image/webp`
- **Size Limit**: 5MB

### Response (201 Created)
```json
{
  "success": true,
  "message": "Image uploaded successfully",
  "data": {
    "filename": "image-1737229500000.png",
    "path": "uploads/images/image-1737229500000.png",
    "url": "/uploads/images/image-1737229500000.png"
  }
}
```

---

## 📄 CV Upload
Upload a professional CV in PDF format.

- **Endpoint**: `POST /api/v1/uploads/cv`
- **Field Name**: `cv`
- **Allowed Types**: `application/pdf`
- **Size Limit**: 10MB

### Response (201 Created)
```json
{
  "success": true,
  "message": "Document uploaded successfully",
  "data": {
    "filename": "cv-1737229500000.pdf",
    "path": "uploads/cvs/cv-1737229500000.pdf",
    "url": "/uploads/cvs/cv-1737229500000.pdf"
  }
}
```

---

## 📎 General Document Upload
Upload other professional documents/certificates.

- **Endpoint**: `POST /api/v1/uploads/document`
- **Field Name**: `document`
- **Allowed Types**: `application/pdf`
- **Size Limit**: 10MB
