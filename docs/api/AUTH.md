# Authentication API Documentation

Handles user registration, login, and session management using JWT.

## Base URL: `/api/v1/auth`

---

### 1. Register User
Create a new administrative user.
- **Endpoint**: `POST /register`
- **Access**: Public (Bootstrap)
- **Body**:
```json
{
  "email": "user@example.com",
  "password": "Password123!",
  "name": "Abdul Aziz",
  "role": "ADMIN"
}
```
- **Constraints**: Password must be 8+ chars, with uppercase, lowercase, number, and special character.

---

### 2. Login
Authenticate and receive JWT tokens.
- **Endpoint**: `POST /login`
- **Access**: Public
- **Body**:
```json
{
  "email": "user@example.com",
  "password": "Password123!"
}
```
- **Success Response (200 OK)**:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "name": "Abdul Aziz",
      "role": "ADMIN"
    },
    "tokens": {
      "accessToken": "jwt_string",
      "refreshToken": "jwt_string"
    }
  }
}
```

---

### 3. Refresh Token
Obtain a new access token using a refresh token.
- **Endpoint**: `POST /refresh`
- **Access**: Public
- **Body**:
```json
{
  "refreshToken": "valid_refresh_token"
}
```

---

### 4. Get Current Profile
Retrieve the authenticated user's details.
- **Endpoint**: `GET /me`
- **Access**: Private (Requires `Authorization: Bearer <accessToken>`)
- **Success Response (200 OK)**:
```json
{
  "success": true,
  "message": "User profile retrieved",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "Abdul Aziz",
    "role": "ADMIN"
  }
}
```
