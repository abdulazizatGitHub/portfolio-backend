# Portfolio Backend API

A production-ready backend API built with TypeScript, Express, and Prisma following a **Modular Layered Monolith** architecture.

## Architecture

### 4-Layer Structure
1. **Transport Layer** (`src/api`) - Controllers and routes
2. **Logic Layer** (`src/core/services`) - Business logic
3. **Data Access Layer** (`src/data`) - Prisma database operations
4. **Infrastructure Layer** (`src/core/config`, `src/core/exceptions`, `src/api/middlewares`) - Cross-cutting concerns

## Tech Stack

- **Runtime**: Node.js (LTS)
- **Language**: TypeScript (strict mode)
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation**: Zod
- **Logging**: Winston + Morgan
- **Testing**: Jest + Supertest
- **Security**: Helmet, CORS, Rate Limiting

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env
# Update .env with your database credentials

# Run Prisma migrations
npm run prisma:migrate

# Generate Prisma client
npm run prisma:generate
```

### Running the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

### Linting & Formatting

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Environment Variables

See `.env.example` for required environment variables:

- `NODE_ENV` - Environment (development, production, test)
- `PORT` - Server port
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - JWT signing secret
- `CORS_ORIGIN` - Allowed CORS origin

## Project Structure

```
backend/
├── prisma/              # Prisma schema and migrations
├── src/
│   ├── api/            # Transport layer (controllers, routes, middlewares)
│   ├── core/           # Business logic and infrastructure
│   │   ├── config/     # Configuration
│   │   ├── exceptions/ # Custom error classes
│   │   └── services/   # Business logic services
│   ├── data/           # Data access layer (Prisma)
│   ├── utils/          # Utility functions
│   ├── app.ts          # Express application setup
│   └── server.ts       # Server entry point
├── tests/
│   ├── unit/           # Unit tests
│   └── integration/    # Integration tests
└── package.json
```

## API Endpoints

### Health Check
- `GET /health` - Application health status

## Development Principles

- **Strict TypeScript** - No `any` types allowed
- **Layer Separation** - Controllers never call Prisma directly
- **Error Handling** - Standardized error responses
- **Security First** - Helmet, CORS, rate limiting enabled
- **Testing** - 70% code coverage minimum
- **Logging** - Structured logging with Winston

## License

ISC
