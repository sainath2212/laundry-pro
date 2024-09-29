Here’s an enhanced and well-structured README for your **Laundry Pro** project. This version emphasizes clarity and provides concise explanations of the project’s goals, setup, features, and API endpoints.

---

# Laundry Pro

**Laundry Pro** is a user-friendly web application aimed at simplifying laundry services for students and administrators. The app provides a seamless experience for placing laundry orders, tracking their status, and giving feedback.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Database Migration](#database-migration)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [User Management](#user-management)
  - [Orders](#orders)
  - [Feedback](#feedback)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Order Management**: Place, track, and manage laundry orders.
- **Feedback System**: Users can submit and view feedback for completed orders.
- **Admin Privileges**: Admin users can update the status of orders.

## Technologies
- **Backend**: Node.js, Express.js, Prisma ORM
- **Database**: PostgreSQL or MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Frontend**: Optional for extension (React, Vue, etc.)

## Architecture
- **Models**: Prisma is used for ORM with models for `User`, `Order`, and `Feedback`.
- **Controllers**: Business logic for handling requests is split into authentication, user, order, and feedback controllers.
- **Routes**: Organized by feature (auth, users, orders, feedback) to keep the application modular.

## Getting Started

### Prerequisites
- **Node.js** (version >= 14.x)
- **NPM** or **Yarn**
- **PostgreSQL/MySQL** database

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/laundry-pro.git
   cd laundry-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Environment Setup
Create a `.env` file in the project root and add the following environment variables:
```plaintext
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
PORT=3000
```

- **DATABASE_URL**: Connection string for your PostgreSQL/MySQL database.
- **JWT_SECRET**: Secret key for signing JWT tokens.

### Database Migration
Run the following command to set up the database schema using Prisma:
```bash
npx prisma migrate dev --name init
```

## API Endpoints

### Authentication
#### Register a User
- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### Log In
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "<JWT_TOKEN>"
  }
  ```

### User Management
#### Get User Profile
- **Endpoint:** `GET /api/users/:id`
- **Request Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

#### Update User Profile
- **Endpoint:** `PUT /api/users/:id`
- **Request Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User updated successfully"
  }
  ```

### Orders
#### Place a New Order
- **Endpoint:** `POST /api/orders`
- **Request Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Request Body:**
  ```json
  {
    "userId": 1,
    "service": "Wash and Fold",
    "pickupDate": "2024-10-01",
    "deliveryDate": "2024-10-05",
    "status": "Pending"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "userId": 1,
    "service": "Wash and Fold",
    "pickupDate": "2024-10-01T00:00:00.000Z",
    "deliveryDate": "2024-10-05T00:00:00.000Z",
    "status": "Pending"
  }
  ```

#### Get Order Details
- **Endpoint:** `GET /api/orders/:id`
- **Request Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "userId": 1,
    "service": "Wash and Fold",
    "pickupDate": "2024-10-01T00:00:00.000Z",
    "deliveryDate": "2024-10-05T00:00:00.000Z",
    "status": "Pending"
  }
  ```

#### Update Order Status (Admin Only)
- **Endpoint:** `PUT /api/orders/:id`
- **Request Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Request Body:**
  ```json
  {
    "status": "Completed"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Order status updated to Completed"
  }
  ```

### Feedback
#### Submit Feedback for an Order
- **Endpoint:** `POST /api/feedback`
- **Request Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Request Body:**
  ```json
  {
    "orderId": 1,
    "rating": 5,
    "content": "Great service!"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Feedback submitted successfully"
  }
  ```

#### Get Feedback for an Order
- **Endpoint:** `GET /api/feedback/:orderId`
- **Request Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Response:**
  ```json
  {
    "orderId": 1,
    "feedback": [
      {
        "id": 1,
        "rating": 5,
        "content": "Great service!",
        "userId": 1
      }
    ]
  }
  ```

## Running the Application
To run the application, make sure your database is running and your environment variables are set up. Use the following command:
```bash
npm run dev
```

This will start the server at `http://localhost:3000`.

## Contributing
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request!

## License
This project is licensed under the MIT License.

---

This README includes detailed instructions on setting up the environment, running database migrations, and examples of API endpoints with both requests and responses. It can be further customized based on specific project requirements or additional features.
