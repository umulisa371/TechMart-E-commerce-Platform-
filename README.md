# 🛒 TechMart – E-Commerce Platform

TechMart is a full-stack **online shopping platform** designed to provide a simple and convenient way for users to browse products, manage their shopping cart, place orders, and track purchases.

The project demonstrates practical experience in **frontend development, backend API development, database integration, authentication, payment processing, and deployment**.

## 🚀 Features

### 👤 User Features

* User registration and login
* Secure user authentication
* Browse products and categories
* View product details
* Add and remove products from cart
* Manage cart items and quantities
* Checkout and place orders
* Payment processing
* Track orders

### 🔐 Admin Features

* Admin authentication
* Admin dashboard
* Manage products
* Manage orders
* Manage users
* View store statistics and information

## 🛠️ Technologies Used

**Frontend**

* React.js
* HTML5
* CSS3
* JavaScript

**Backend**

* Node.js
* Express.js
* REST API

**Database**

* MongoDB

**Tools & Deployment**

* Git & GitHub
* Postman
* Vercel
* Render

## 🏗️ System Architecture

```text
┌─────────────────────┐
│     React Frontend  │
│                     │
│ Products • Cart     │
│ Checkout • Orders   │
│ Admin Dashboard     │
└──────────┬──────────┘
           │
           │ REST API
           ▼
┌─────────────────────┐
│   Node.js + Express │
│                     │
│ Authentication      │
│ Products • Orders    │
│ Payments • Admin     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       MongoDB       │
│                     │
│ Users • Products    │
│ Orders • Cart Data  │
└─────────────────────┘
```

## 📂 Main Modules

* **Authentication** – User registration, login, and protected access
* **Products** – Product listing, categories, and product details
* **Shopping Cart** – Add, remove, and manage products
* **Checkout** – Order creation and payment processing
* **Order Tracking** – Users can monitor their orders
* **Admin Dashboard** – Manage products, users, and orders

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/umulisa371/TechMart.git
cd TechMart
```

### 2. Install dependencies

For the frontend:

```bash
cd frontend
npm install
```

For the backend:

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file in the backend directory and add the required configuration, such as:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add any additional variables required by the payment service or email service.

### 4. Run the application

Start the backend:

```bash
npm run dev
```

Start the frontend:

```bash
npm run dev
```

The application will then be available through the local development URLs shown by Vite and Express.

## 🌐 Live Demo

**Frontend:** https://techmart-sable.vercel.app

**Backend API:** https://techmart-hngi.onrender.com

## 🎯 Project Goals

TechMart was developed to:

* Build a real-world full-stack e-commerce application
* Practice developing RESTful APIs
* Implement authentication and authorization
* Work with a NoSQL database
* Integrate payment functionality
* Build an administrative management system
* Gain experience deploying a full-stack application

## 🔮 Future Improvements

* Product reviews and ratings
* Wishlist functionality
* Advanced product search and filtering
* Improved payment options
* Email notifications for order updates
* Sales and revenue analytics
* Improved mobile experience

## 👩‍💻 Author

**Diane Umulisa**

Software Engineering Student | Full-Stack Developer

GitHub: [@umulisa371](https://github.com/umulisa371)

---

⭐ If you find this project useful, consider giving the repository a star!
