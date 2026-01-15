# Bobyard Comment System

A full-stack web application for managing comments, built with Django REST Framework (backend) and React TypeScript (frontend).

## Features

- 📝 View all comments with author, text, date, likes, and images
- ➕ Add new comments (as Admin user)
- ✏️ Edit existing comments
- 🗑️ Delete comments
- 🎨 Clean, modern UI design
- 📱 Responsive design

## Tech Stack

### Backend
- Django 6.0.1
- Django REST Framework
- SQLite Database
- Python 3.13

### Frontend
- React 18 with TypeScript
- Styled Components
- Axios for API calls
- Date-fns for date formatting

## Project Structure

```
bobyard/
├── backend/
│   ├── bobyard_backend/          # Django project settings
│   ├── comments/                 # Comments Django app
│   │   ├── models.py            # Comment model
│   │   ├── serializers.py       # DRF serializers
│   │   ├── views.py             # API views
│   │   └── management/commands/  # Data loading command
│   └── db.sqlite3               # SQLite database
├── frontend/
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── services/            # API service layer
│   │   ├── styles/              # Styled components
│   │   └── types/               # TypeScript types
│   └── public/                  # Static assets
└── comments.json                # Initial comment data
```

## Setup Instructions

### Prerequisites
- Python 3.13+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install django djangorestframework django-cors-headers
   ```

4. **Run database migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Load initial comment data:**
   ```bash
   python manage.py load_comments
   ```

6. **Start the Django development server:**
   ```bash
   python manage.py runserver 8000
   ```

The backend API will be available at `http://localhost:8000/api/`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/comments/` | Get all comments |
| POST   | `/api/comments/` | Create a new comment |
| GET    | `/api/comments/{id}/` | Get a specific comment |
| PUT    | `/api/comments/{id}/` | Update a comment |
| PATCH  | `/api/comments/{id}/` | Partially update a comment |
| DELETE | `/api/comments/{id}/` | Delete a comment |

## Usage

1. **Start both servers** (backend on port 8000, frontend on port 3000)
2. **Open** `http://localhost:3000` in your browser
3. **View comments** loaded from the initial JSON data
4. **Add new comments** using the form at the top
5. **Edit comments** by clicking the "Edit" button on any comment
6. **Delete comments** by clicking the "Delete" button

## Features Implemented

### Backend
- ✅ RESTful API with Django REST Framework
- ✅ Comment model with author, text, date, likes, and image fields
- ✅ CORS configuration for frontend integration
- ✅ Management command to load initial data
- ✅ Full CRUD operations (Create, Read, Update, Delete)

### Frontend
- ✅ Clean, modern UI with styled-components
- ✅ TypeScript for type safety
- ✅ Responsive design
- ✅ Error handling and loading states
- ✅ Form validation
- ✅ Confirmation dialogs for destructive actions
- ✅ Avatar generation for users without images
- ✅ Date formatting with user-friendly display

## Development Notes

- Comments are ordered by date (newest first)
- New comments are automatically created with "Admin" as the author
- Images are displayed when available, with fallback to generated avatars
- All forms include proper validation and loading states
- Error messages are user-friendly with retry options

## Production Considerations

For production deployment, consider:
- Using PostgreSQL instead of SQLite
- Setting up proper environment variables
- Configuring static file serving
- Setting up HTTPS
- Adding authentication and authorization
- Implementing rate limiting
- Adding comprehensive logging

## 🚀 Bobyard Challenge Complete!

This repository contains a complete full-stack comment system built for the Bobyard coding challenge.

### Quick Demo
1. Start backend: `cd backend && python manage.py runserver 8000`
2. Start frontend: `cd frontend && npm start`
3. Open http://localhost:3000

**Repository**: https://github.com/VadneyK/bobyard-comment-system
**Pull Request**: Coming soon...
