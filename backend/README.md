# Avicenna EHR - Backend API

## Setup Instructions

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
cd backend
npm install
```

### Database Setup

1. Create PostgreSQL database:
```sql
CREATE DATABASE avicenna_ehr;
```

2. Set environment variables in `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/avicenna_ehr"
JWT_SECRET="your-secret-key-change-in-production"
PORT=3001
```

3. Run migrations:
```bash
npx prisma migrate dev
```

4. Seed database (optional):
```bash
npm run seed
```

### Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:3001`

### API Documentation

Once running, view API docs at: `http://localhost:3001/api-docs`

### Project Structure

```
backend/
├── src/
│   ├── routes/          # API route handlers
│   ├── controllers/     # Business logic
│   ├── middleware/      # Auth, validation, error handling
│   ├── services/        # Database operations
│   ├── utils/           # Helper functions
│   └── server.ts        # Express app setup
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Seed data
└── package.json
```
