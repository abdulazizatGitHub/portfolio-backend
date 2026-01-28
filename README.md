# Portfolio Command Center - Backend API

A high-performance, modular backend powering a professional portfolio ecosystem. Built with **Node.js**, **Express**, and **Prisma**, this API follows a **Modular Layered Monolith** architecture to ensure scalability, type safety, and maintainability.

---

## Architecture & Engineering Standards

The system is engineered with a strict 4-layer separation of concerns:

1.  **Transport Layer** (`src/api`): Strictly handles HTTP concerns (controllers, routes, Zod schemas).
2.  **Logic Layer** (`src/core/services`): contains 100% of the business logic and orchestrates data flows.
3.  **Data Access Layer** (`src/data`): Abstracted database operations using Prisma.
4.  **Infrastructure Layer** (+): Handles cross-cutting concerns like authentication, error handling, logging, and asset storage.

### Core Principles
-   **Strict TypeScript**: 100% type safety with no `any` types.
-   **Secure-by-Default**: JWT-based auth, Argon2 password hashing, and role-based access control (RBAC).
-   **Validation**: Schema-level validation using Zod for all incoming requests.
-   **Logging**: Structured JSON logging with Winston and request monitoring with Morgan.

---

## Key Features

### 1. Full Portfolio Dynamization
Every visual and technical component is database-driven. There are zero hardcoded strings or image paths in the frontend.
-   **Identity & About**: Dynamic professional portraits, custom branding headers, and bio highlights.
-   **Skill Metrics**: Proficiency levels tracking (0-100%) for visual progress indicators.
-   **Professional History**: Aggregated Education and Work Experience timelines.

### 2. Administrative Command Center
A secure management suite for total control over portfolio assets:
-   **Activity Tracking**: Centralized `ActivityService` tracks every administrative action (Create, Update, Delete) for audit logs.
-   **Project Management**: Multi-image support and dynamic category mapping.
-   **Asset Upload System**: Robust Multer-based handling for CVs, Project images, and Skill icons with strictly validated file types and sizes.

### 3. Integrated Analytics
Real-time tracking of professional engagement:
-   **Growth Metrics**: Automated page visit and unique visitor tracking via IP hashing.
-   **Engagement Events**: Tracking of CV downloads, social clicks, and project interactions.
-   **Deep Insights**: Device breakdown, tech stack popularity, and traffic source analysis (grouped by referrer).

---

## Tech Stack

-   **Runtime**: Node.js (Latest LTS)
-   **Framework**: Express.js
-   **Language**: TypeScript 5.x
-   **Database**: PostgreSQL / MongoDB (Prisma ORM)
-   **Validation**: Zod
-   **Security**: Helmet, CORS, Rate Limiting
-   **Testing**: Jest + Supertest (47+ Tests / 95% Coverage)
-   **Automation**: Husky + lint-staged (Git Hooks)

---

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL/MongoDB (See `.env`)

### Installation & Setup

```bash
# 1. Clone & Install
npm install

# 2. Environment Configuration
cp .env.example .env
# Configure DATABASE_URL and JWT_SECRET

# 3. Database Initialization
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed  # Populates with initial professional porto
```

### Development Workflow

```bash
# Start Dev Server (ts-node-dev)
npm run dev

# Run Quality Checks
npm run lint:fix
npm run format

# Execute Verification Suite
npm test
```

---

## API Documentation

The API is fully documented with granular guides for both Public and Administrative consumers.

### Public API (`/api/v1/...`)
- [Identity & Bio](docs/api/portfolio/identity.md)
- [Projects & Categories](docs/api/portfolio/projects.md)
- [Skills & Metrics](docs/api/portfolio/skills.md)
- [Timeline & Contact](docs/api/portfolio/connectivity.md)
- [Engagement Tracking](docs/api/portfolio/analytics.md)

### Admin API (`/api/v1/admin/...`)
- [Dashboard & Activity](docs/api/admin/dashboard.md)
- [Asset Uploads](docs/api/admin/uploads.md)
- [Management Suite Overview](docs/api/ADMIN.md)

---

## Deployment & Verification
Historical verification reports and phase-by-phase implementation logs can be found in the [Verification Vault](docs/verification/).

---

## License
ISC License &copy; {new Date().getFullYear()} Abdul Aziz
