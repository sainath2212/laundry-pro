Here's an updated README file that reflects the structure and requirements of your project, as well as any necessary adjustments for clarity or additional features.

---

# Laundry Pro

Laundry Pro is a user-friendly web application aimed at simplifying laundry services for students and administrators. The app provides a seamless experience for placing laundry orders, tracking their status, and giving feedback.

---

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

---

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Order Management**: Place, track, and manage laundry orders.
- **Feedback System**: Users can submit and view feedback for completed orders.
- **Admin Privileges**: Admin users can update the status of orders.

---

## Technologies

- **Backend**: Node.js, Express.js, Prisma ORM
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)

---

## Architecture

- **Models**: Prisma ORM models for `User`, `Order`, and `Feedback`.
- **Controllers**: Handles business logic for `Authentication`, `User`, `Order`, and `Feedback` operations.
- **Routes**: Organized by feature (`auth`, `users`, `orders`, `feedback`) for a modular structure.

---

## Getting Started

### Prerequisites

- Node.js (version >= 14.x)
- NPM or Yarn
- MySQL database

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/laundry-pro.git
   cd laundry-pro
   ```

2. **Install dependencies**:
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

- **DATABASE_URL**: Connection string for your MySQL database.
- **JWT_SECRET**: Secret key for signing JWT tokens.

### Database Migration

Run the following command to set up the database schema using Prisma:

```bash
npx prisma migrate dev --name init
```

---

## API Endpoints

### Authentication
<<<<<<< Updated upstream
#### Register a User
- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "user"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```
=======
>>>>>>> Stashed changes

- **Register a User**

  - **Endpoint**: `POST /api/auth/register`
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "Password123!",
      "role": "user"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **Log In**

  - **Endpoint**: `POST /api/auth/login`
  - **Request Body**:
    ```json
    {
      "email": "john@example.com",
      "password": "Password123!"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "<JWT_TOKEN>"
    }
    ```

### User Management

- **Get User Profile**

  - **Endpoint**: `GET /api/users/:id`
  - **Request Headers**:
    ```plaintext
    Authorization: Bearer <JWT_TOKEN>
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **Update User Profile**

  - **Endpoint**: `PUT /api/users/:id`
  - **Request Headers**:
    ```plaintext
    Authorization: Bearer <JWT_TOKEN>
    ```
  - **Request Body**:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "User updated successfully"
    }
    ```

### Orders

- **Place a New Order**

  - **Endpoint**: `POST /api/orders`
  - **Request Headers**:
    ```plaintext
    Authorization: Bearer <JWT_TOKEN>
    ```
  - **Request Body**:
    ```json
    {
      "userId": 1,
      "service": "Wash and Fold",
      "pickupDate": "2024-10-01",
      "deliveryDate": "2024-10-05",
      "status": "Pending"
    }
    ```
  - **Response**:
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

- **Get Order Details**

  - **Endpoint**: `GET /api/orders/:id`
  - **Request Headers**:
    ```plaintext
    Authorization: Bearer <JWT_TOKEN>
    ```
  - **Response**:
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

- **Update Order Status (Admin Only)**

  - **Endpoint**: `PUT /api/orders/:id`
  - **Request Headers**:
    ```plaintext
    Authorization: Bearer <JWT_TOKEN>
    ```
  - **Request Body**:
    ```json
    {
      "status": "Completed"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Order status updated to Completed"
    }
    ```

### Feedback

- **Submit Feedback for an Order**

  - **Endpoint**: `POST /api/feedback`
  - **Request Headers**:
    ```plaintext
    Authorization: Bearer <JWT_TOKEN>
    ```
  - **Request Body**:
    ```json
    {
      "orderId": 1,
      "rating": 5,
      "content": "Great service!"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Feedback submitted successfully"
    }
    ```

- **Get Feedback for an Order**

  - **Endpoint**: `GET /api/feedback/:orderId`
  - **Request Headers**:
    ```plaintext
    Authorization: Bearer <JWT_TOKEN>
    ```
  - **Response**:
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

---

## Running the Application

To run the application, make sure your database is running and your environment variables are set up. Use the following command:

```bash
npm run dev
```

The server will start at [http://localhost:3000](http://localhost:3000).

---


## License

This project is licensed under the MIT License.

--- 

This README now includes a clear structure for setting up the project, environment, and database as well as examples of API endpoints with example requests and responses.