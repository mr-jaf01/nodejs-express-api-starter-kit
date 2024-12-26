# nodejs-express-api-starter-kit

This Node.js Express API Starter Kit is designed to help you quickly set up a robust and scalable API using the Model-View-Controller-Service (MVCS) pattern for clean and maintainable code. It leverages the following technologies:
Kit is designed to help you quickly set up a robust and scalable API using the Model-View-Controller-Service (MVCS) pattern for clean and maintainable code. It leverages the following technologies:

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **JWT**: JSON Web Tokens for secure authentication.
- **Joi**: A powerful schema description language and data validator for JavaScript.
- **Module Alias**: Simplifies the use of namespaces in your project.
- **Sequelize**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.

This starter kit provides a solid foundation for building modern APIs with best practices in mind.

## Features

This starter kit comes with a default authentication system, including the following endpoints:

- **Register**: `/api/auth/register` - Create a new user account.
- **Login**: `/api/auth/login` - Authenticate a user and generate a JWT.
- **Forgot Password**: `/api/auth/forgot-password` - Initiate the password reset process

These endpoints provide a basic structure for user authentication and can be extended to fit your specific requirements.

## Requirements

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Setup

1. **Clone the repository**:

   ```sh
   git clone https://github.com/mr-jaf01/nodejs-express-api-starter-kit.git
   cd nodejs-express-api-starter-kit
   ```

   2. **Copy the environment variables file**:

      ```sh
      cp .env.example .env
      ```

   3. **Install dependencies**:

      ```sh
      npm install
      ```

   4. **Install Nodemon**:

      ```sh
      npm install -g nodemon
      ```

   5. **Start the server**::
      ```sh
      nodemon index.js
      ```

   ```

   ```

## Author

**Abdullahi Jafar Musa** (mrjaf01)
