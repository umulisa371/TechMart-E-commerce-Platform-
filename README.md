# 🛒 TechMart — Full-Stack E-Commerce Platform

TechMart is a full-stack e-commerce web application that allows users to browse products, manage their shopping carts, place orders, and track purchases. It includes an administrative dashboard for managing store operations.

This project demonstrates practical experience building responsive user interfaces, integrating REST APIs, implementing authentication, working with databases, and deploying a full-stack web application.

## 🌐 Live Demo

- **Live Website:** https://techmart-sable.vercel.app
- **Backend API:** https://techmart-hngi.onrender.com
- **Source Code:** https://github.com/umulisa371/Techmart

## ✨ Features

### Customer Features
- User registration and login
- Authentication and protected access
- Browse products and product categories
- View product details
- Add, remove, and update cart items
- Checkout and place orders
- Payment functionality
- Track orders and purchases

### Admin Features
- Admin authentication
- Dashboard for managing store operations
- Create and manage products
- Manage customer orders
- Manage users
- View store statistics

## 🛠️ Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Backend | Node.js, Express.js |
| API | REST APIs |
| Database | MongoDB |
| Testing & Development | Postman, Git, GitHub |
| Deployment | Vercel, Render |

## 🏗️ Architecture

TechMart uses a client-server architecture. The React frontend communicates with the Express backend through REST API endpoints, while MongoDB stores application data.

```text
┌──────────────────────────┐
│      React Frontend      │
│                          │
│ Products • Cart          │
│ Authentication • Orders  │
│ Admin Dashboard          │
└────────────┬─────────────┘
             │
             │ REST API
             ▼
┌──────────────────────────┐
│    Node.js + Express     │
│                          │
│ Authentication           │
│ Products • Orders        │
│ Admin Operations         │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│         MongoDB          │
│                          │
│ Users • Products         │
│ Orders • Related Data    │
└──────────────────────────┘
```

## 💻 What I Practiced

Through this project, I gained practical experience with:

- Building user interfaces and reusable React components.
- Connecting frontend components to backend REST APIs.
- Handling authentication and protected routes.
- Managing shopping cart and order workflows.
- Integrating frontend and backend functionality.
- Working with MongoDB for persistent data storage.
- Building administrative interfaces.
- Deploying a frontend and backend application.

## 🚀 Run Locally

### Prerequisites

- Node.js and npm
- Access to a MongoDB database
- Git

### 1. Clone the repository

```bash
git clone https://github.com/umulisa371/Techmart.git
cd Techmart
```

### 2. Install frontend dependencies

From the project root:

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd techmart-backend
npm install
```

### 4. Configure environment variables

Create the required `.env` file or files based on the application's configuration. Set the appropriate database connection string, authentication secret, API settings, and any other required variables.

**Security:** Never commit `.env` files, passwords, database credentials, or API secrets to GitHub.

### 5. Start the application

Check the `scripts` section of each `package.json` and use the development command configured for that part of the application. Run the frontend and backend in separate terminals if they require separate processes.

## 🔮 Potential Improvements

- Product reviews and ratings
- Wishlist functionality
- Advanced product search and filtering
- Additional payment options
- Email notifications for order updates
- More detailed sales analytics
- Further improvements to mobile usability

## 👩‍💻 Author

**Diane Umulisa**

Frontend Developer | React.js | JavaScript | API Integration

- **GitHub:** https://github.com/umulisa371

