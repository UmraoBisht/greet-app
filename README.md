# Greeting App

A simple web application with a backend API and frontend UI to generate personalized greetings.

## Features

- Backend: Express.js API to return a greeting message.
- Frontend: React UI to enter a name and display the greeting.
- Integration: The frontend interacts with the backend API.
- Deployment: Can be deployed on Vercel or Render.

---

## Backend Setup (Node.js & Express)

### Prerequisites

- Node.js installed (version 14+ recommended)

### Installation & Running the Server

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/greeting-app.git
   cd greeting-app/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. The server will run at `http://localhost:5000`

---

## Frontend Setup (React)

### Prerequisites

- Node.js installed (version 14+ recommended)

### Installation & Running the Frontend

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. The frontend will be accessible at `http://localhost:3000`

---

## API Usage

### Endpoint: `GET /api/greet?name=YourName`

**Response:**

```json
{
  "message": "Hello, YourName! Welcome to Younglabs."
}
```

If `name` is missing:

```json
{
  "error": "Name is required."
}
```

---

## Deployment (Optional)

- **Vercel**: Deploy the frontend easily with `vercel`.
- **Render**: Deploy both backend and frontend using Render services.
- Ensure the backend URL is correctly set in the frontend API calls.

---

## License

This project is open-source and available under the MIT License.

