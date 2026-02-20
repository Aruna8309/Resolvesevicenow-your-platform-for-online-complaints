# resolvesevicenow

## Overview
resolvesevicenow is a full-stack MERN application designed to provide a platform for users to submit and manage online complaints. The application allows users to register, log in, submit complaints, and view the status of their complaints.

## Project Structure
The project is organized into two main directories: `client` and `server`.

### Client
The client-side of the application is built using React and Vite. It includes the following components and pages:

- **Components**
  - `Navbar.jsx`: Renders the navigation bar.
  - `ComplaintForm.jsx`: Provides a form for users to submit complaints.
  - `ComplaintList.jsx`: Displays a list of submitted complaints.

- **Pages**
  - `Home.jsx`: The landing page of the application.
  - `Dashboard.jsx`: Overview of user complaints and statistics.
  - `ComplaintDetails.jsx`: Detailed information about a specific complaint.

- **Services**
  - `api.js`: Contains functions for making API calls to the server.

- **Main Files**
  - `App.jsx`: Sets up routing and renders the main layout.
  - `index.jsx`: Entry point of the React application.

### Server
The server-side of the application is built using Node.js and Express. It includes the following features:

- **Models**
  - `User.js`: Defines the schema for user data.
  - `Complaint.js`: Defines the schema for complaint data.

- **Routes**
  - `auth.js`: Handles user authentication routes.
  - `complaints.js`: Manages complaint-related routes.

- **Controllers**
  - `authController.js`: Contains authentication logic.
  - `complaintController.js`: Handles complaint-related logic.

- **Middleware**
  - `auth.js`: Authenticates users based on tokens.

- **Main File**
  - `server.js`: Sets up the Express server and connects to the database.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB database (local or cloud).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd resolvesevicenow
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd client
   npm run dev
   ```

## Usage
- Navigate to the client application in your browser (usually at `http://localhost:3000`).
- Users can register, log in, and submit complaints through the provided forms.
- Admins can view and manage complaints through the dashboard.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.