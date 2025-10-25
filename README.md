# Task Manager

A simple and efficient task management application built with React and .NET Core. This application allows users to create, manage, and track their daily tasks with a clean, intuitive interface.

## 🚀 Features

- **Task Creation**: Add new tasks with simple text input
- **Task Completion**: Mark tasks as complete with intuitive checkboxes
- **Task Deletion**: Remove tasks with a single click
- **Persistent Storage**: Tasks are automatically saved to localStorage
- **Responsive Design**: Clean, modern UI that works on all devices
- **Real-time Updates**: Instant visual feedback for all actions

## 🏗️ Architecture

The project consists of two main components:

### Backend (.NET Core Web API)

- **Framework**: .NET Core with ASP.NET Core
- **Data Storage**: In-memory list (for demo purposes)
- **Port**: 5000 (configurable via launchSettings.json)

### Frontend (React Application)

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks with localStorage persistence
- **HTTP Client**: Axios for API communication

## 📋 Task Model

Each task contains the following properties:

```typescript
interface Task {
  id: number; // Unique task identifier
  description: string; // Task description
  isCompleted: boolean; // Completion status
}
```

## 🛠️ Installation & Setup

### Prerequisites

- .NET Core 6.0+ SDK
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

```bash
cd task-manager/backend
```

2. Restore NuGet packages:

```bash
dotnet restore
```

3. Run the application:

```bash
dotnet run
```

The API will be available at  `http://localhost:5051`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd task-manager/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📡 API Endpoints

### GET `/api/tasks`

Get all tasks.

**Response:**

```json
[
  {
    "id": 1,
    "description": "Complete project documentation",
    "isCompleted": false
  }
]
```

### POST `/api/tasks`

Create a new task.

**Request Body:**

```json
{
  "description": "New task description"
}
```

**Response:**

```json
{
  "id": 2,
  "description": "New task description",
  "isCompleted": false
}
```

### PUT `/api/tasks/{id}/toggle`

Toggle task completion status.

**Response:**

```json
{
  "id": 1,
  "description": "Complete project documentation",
  "isCompleted": true
}
```

### DELETE `/api/tasks/{id}`

Delete a task.

**Response:** `204 No Content`

## 🎯 Usage Examples

### Adding Tasks

1. Type your task description in the input field
2. Click "Add" button or press Enter
3. Task appears in the list with a checkbox

### Managing Tasks

- **Mark Complete**: Click the checkbox next to any task
- **Delete Task**: Click the "X" button next to any task
- **Visual Feedback**: Completed tasks show with strikethrough text

### Data Persistence

- Tasks are automatically saved to localStorage
- Page reloads restore your tasks instantly
- No data loss on accidental refreshes

## 🧪 Testing

### Backend Testing

Test the API endpoints using tools like Postman or curl:

**Get all tasks:**

```bash
curl -X GET https://localhost:7000/api/tasks
```

**Create a new task:**

```bash
curl -X POST https://localhost:7000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"description": "Test task"}'
```

**Toggle task completion:**

```bash
curl -X PUT https://localhost:7000/api/tasks/1/toggle
```

**Delete a task:**

```bash
curl -X DELETE https://localhost:7000/api/tasks/1
```

### Frontend Testing

```bash
npm test
```

## 🚀 Deployment

### Backend Deployment

The .NET Core application can be deployed to:

- Azure App Service
- AWS Elastic Beanstalk
- Docker containers
- Any hosting platform supporting .NET Core

### Frontend Deployment

Build the production version:

```bash
npm run build
```

The built files will be in the `build/` directory, ready for deployment to:

- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 🔧 Configuration

### Environment Variables

- `ASPNETCORE_ENVIRONMENT`: Development/Production environment
- `ASPNETCORE_URLS`: Server URLs (default: http://localhost:5000)

### API Configuration

Update the `API_URL` constant in the frontend `App.tsx` file to point to your deployed backend.

## 📝 Dependencies

### Backend Dependencies

- Microsoft.AspNetCore.App (implicit)
- Microsoft.AspNetCore.OpenApi
- Swashbuckle.AspNetCore

### Frontend Dependencies

- React 18.2.0
- TypeScript 4.9.5
- Axios 1.12.2
- Tailwind CSS 3.4.18

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the Appsian Coding Assignment.

## 🐛 Known Issues

- Tasks are stored in memory and will be lost on server restart
- No user authentication or data isolation
- No task categories or priorities

## 🔮 Future Enhancements

- Database persistence for tasks
- User authentication and multi-user support
- Task categories and tags
- Due dates and reminders
- Task priorities and sorting
- Export/import functionality
- Mobile app development
- Real-time collaboration
- Task templates and recurring tasks
- Advanced filtering and search
