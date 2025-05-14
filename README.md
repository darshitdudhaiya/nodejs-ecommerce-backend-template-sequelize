# E-commerce Backend Project Template

This is a template for a modular and scalable Node.js backend for an e-commerce website.

## Tech Stack

* Node.js (latest LTS)
* Express.js
* MongoDB with Mongoose
* JWT for Authentication
* Bcrypt for password hashing
* Multer for file uploads
* dotenv for environment variables
* CORS enabled

## Project Structure

The project follows a layered architecture with separation of concerns:

* `src/api/v1/controllers`: Handles incoming requests and sends responses.
* `src/api/v1/routes`: Defines API endpoints and maps them to controllers.
* `src/config`: Contains configuration files for the application and database.
* `src/middlewares`: Includes middleware functions for authentication, error handling, etc.
* `src/models`: Defines Mongoose schemas and models.
* `src/services`: Contains business logic.
* `src/utils`: Provides utility functions.
* `src/validations`: Handles request data validation.
* `src/constants.js`: Stores application-wide constants.

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example` and fill in the required values.
4. Start the development server: `npm run dev`
5. Start the production server: `npm start`

## Contributing

Feel free to contribute to this project by submitting pull requests.
