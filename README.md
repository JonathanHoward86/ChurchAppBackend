Church Mobile App Backend
This project provides the backend services for a church's mobile application. Built with Node.js, Express, and SQL Server, the backend handles user authentication and other functionalities required by the mobile app.

Getting Started
To get a local copy up and running, follow these steps:

Prerequisites
Node.js
SQL Server

Installation

Clone the repository.
git clone https://github.com/yourusername/ChurchAppBackend.git

Navigate to the project directory.
cd ChurchAppBackend

Install the required packages.
npm install

Start the development server.
npm start

Directory Structure
ChurchAppBackend
|-- server.js
|-- authRoutes.js
|-- db.js
|-- package.json

Key Files Description
server.js: Initializes the Express application and contains global middleware.

authRoutes.js: Defines the routes related to user authentication.

db.js: Manages the database connections and query execution.

Usage
This project is intended to serve as a backend service for a mobile application.

Endpoints

User Registration
POST /auth/register
Registers a new user with email and password. Returns a confirmation message upon success.

Environment Variables
PORT : The port where the application runs (default is 5005).

Built With
Node.js
Express
SQL Server

Error Handling
The project is configured to log incoming requests and errors.

Acknowledgments

The code in this repository was created with assistance from Chat GPT by Jonathan Howard, an aspiring software developer with expertise in Agile Software Development and proficiency in various programming languages.
