# 🛍️ Scatch - E-Commerce Platform

A full-stack e-commerce application built with Node.js, Express, MongoDB, and EJS. Scatch provides a complete shopping experience with user authentication, product management, shopping cart, and order tracking.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Routes](#api-routes)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### For Customers
- **User Registration & Login** - Secure authentication with password hashing (bcrypt)
- **Product Browse** - View all available products with filters
- **Shopping Cart** - Add/remove products, view cart totals

### For Store Owners
- **Admin Dashboard** - Manage products and store operations
- **Product Management** - Create, update, and delete products with custom styling

- **Order Management** - View and manage customer orders
- **Analytics** - Monitor sales and customer activity

### General
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Session Management** - Secure user sessions with express-session
- **Flash Notifications** - User feedback for actions
- **File Upload** - Product image upload with multer

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB with Mongoose v9.1.5
- **Authentication**: JWT + bcrypt v6.0.0
- **Session**: express-session v1.19.0

### Frontend
- **Template Engine**: EJS v4.0.1
- **Styling**: CSS (Bootstrap recommended)
- **Client-side**: Vanilla JavaScript

### Tools & Libraries
- **File Upload**: multer v2.0.2
- **Environment**: dotenv v17.2.3
- **Config Management**: config v4.2.0
- **Cookie Parser**: cookie-parser v1.4.7
- **Debug**: debug v4.4.3
- **Flash Messages**: connect-flash v0.1.1

### Deployment
- **Platform**: Vercel (Serverless)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Usually comes with Node.js
- **MongoDB** (Local or Atlas) - [Download](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Optional
- **Git** - For version control
- **Nodemon** - For development (auto-reload)

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Scatch
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:
```env
JWT_KEY=your_secret_key_here
EXPRESS_SESSION_SECRET=your_session_secret_here
NODE_ENV=development
PORT=3000
```

### 4. Configure MongoDB
Edit `config/development.json`:
```json
{
  "MONGODB_URI": "mongodb://127.0.0.1:27017"
}
```

**For MongoDB Atlas (Cloud):**
```json
{
  "MONGODB_URI": "mongodb+srv://username:password@cluster.mongodb.net"
}
```

### 5. Start the Server

**Development Mode (with auto-reload):**
```bash
npx nodemon
```

**Production Mode:**
```bash
npm start
```

The application will be available at `http://localhost:3000`

---

## ⚙️ Configuration

### Multer Configuration
File upload settings are configured in `config/multer-config.js` for handling product images.

### MongoDB Connection
Database connection is managed in `config/mongoose-connection.js` with automatic reconnection handling.

### Session Configuration
Secure sessions are configured in `app.js` using express-session with a secret key from environment variables.

---

## 📁 Project Structure

```
Scatch/
├── app.js                      # Main application entry point
├── package.json                # Project dependencies
├── .env                        # Environment variables (not in repo)
├── vercel.json                 # Vercel deployment config
├── readme                      # Original readme
│
├── config/
│   ├── development.json        # Development configuration
│   ├── keys.js                 # API keys configuration
│   ├── mongoose-connection.js  # MongoDB connection setup
│   └── multer-config.js        # File upload configuration
│
├── controllers/
│   └── authcontroller.js       # Authentication logic
│
├── middlewares/
│   └── isLoggedin.js           # Authentication middleware
│
├── models/
│   ├── owner-model.js          # Store owner schema
│   ├── product-model.js        # Product schema
│   └── user-model.js           # User schema
│
├── routes/
│   ├── index.js                # Main routes
│   ├── ownersRouter.js         # Owner/admin routes
│   ├── productsRouter.js       # Product routes
│   └── usersRouter.js          # User routes
│
├── utils/
│   └── generateToken.js        # JWT token generation
│
├── views/
│   ├── admin.ejs               # Admin dashboard
│   ├── cart.ejs                # Shopping cart page
│   ├── createproduct.ejs       # Product creation form
│   ├── index.ejs               # Homepage
│   ├── owner-login.ejs         # Owner login page
│   ├── shop.ejs                # Product listing page
│   └── partials/
│       ├── footer.ejs          # Footer component
│       └── header.ejs          # Header/navigation component
│
├── public/
│   ├── images/                 # Static images
│   ├── javascripts/            # Client-side scripts
│   └── stylesheets/            # CSS stylesheets
│
└── node_modules/               # Dependencies
```

---

## 💻 Usage

### Starting as a Customer
1. Navigate to `http://localhost:3000`
2. Click **"Sign Up"** to create an account
3. Complete registration with email and password
4. Browse products on the **Shop** page
5. Add items to cart
6. Proceed to checkout

### Starting as a Store Owner
1. Navigate to `http://localhost:3000/owners/admin`
2. Click **"Owner Login"** 
3. Login with owner credentials
4. Access admin dashboard to manage products
5. Create and list new products with images
6. Monitor orders and inventory

### Features Usage
- **Search Products**: Use search bar to find specific items
- **Filter by Price**: Sort by price range
- **View Cart**: Click cart icon to view items
- **Checkout**: Enter shipping details and complete order
- **View Orders**: Track order status in user dashboard

---

## 📸 Screenshots

### 1. Homepage
![Homepage](./screenshots/homepage.png)
- Product showcase
- Navigation menu
- User login/signup options
- Featured products section

### 2. Shop Page
![Shop Page](./screenshots/shop.png)
- Product grid layout
- Product cards with images
- Price display
- Add to cart buttons
- Product filtering options

### 3. Product Details
![Product Details](./screenshots/product-details.png)
- Product image
- Product name and description
- Price and discount information
- Color customization options
- Add to cart button

### 4. Shopping Cart
![Shopping Cart](./screenshots/cart.png)
- Cart items list
- Item quantity adjustment
- Remove item option
- Cart total calculation
- Checkout button

### 5. Checkout Page
![Checkout](./screenshots/checkout.png)
- Order summary
- Shipping address form
- Payment information
- Order confirmation

### 6. User Dashboard
![User Dashboard](./screenshots/dashboard.png)
- User profile information
- Order history
- Account settings
- Logout option

### 7. Admin Panel
![Admin Panel](./screenshots/admin.png)
- Dashboard overview
- Product management
- Create product form
- Inventory management
- Order list

### 8. Owner Login
![Owner Login](./screenshots/owner-login.png)
- Owner authentication
- Secure login form
- Admin access portal

---

## 🔗 API Routes

### User Routes (`/users`)
- `GET /` - User dashboard
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /logout` - User logout
- `POST /addtocart/:productid` - Add product to cart
- `GET /cart` - View shopping cart
- `GET /removefromcart/:productid` - Remove from cart
- `POST /checkout` - Process order

### Product Routes (`/products`)
- `GET /` - List all products
- `POST /create` - Create new product (Admin only)
- `GET /:id` - Get product details
- `POST /update/:id` - Update product (Admin only)
- `POST /delete/:id` - Delete product (Admin only)

### Owner Routes (`/owners`)
- `GET /admin` - Admin dashboard
- `GET /login` - Owner login page
- `POST /login` - Process owner login
- `POST /logout` - Owner logout
- `POST /create` - Create product form

### Index Routes (`/`)
- `GET /` - Homepage
- `GET /about` - About page

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# JWT Configuration
JWT_KEY=your_jwt_secret_key_change_this

# Session Configuration
EXPRESS_SESSION_SECRET=your_session_secret_change_this

# Environment
NODE_ENV=development

# Server Port
PORT=3000
```

### Important Security Notes
- **Never commit `.env` file** - It contains sensitive information
- Use strong, unique secret keys for production
- Rotate secrets regularly
- Keep secrets out of version control

---

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   - Go to Vercel Dashboard
   - Project Settings → Environment Variables
   - Add `JWT_KEY`, `EXPRESS_SESSION_SECRET`, `MONGODB_URI`

5. **Configure MongoDB Atlas**
   - Use MongoDB Atlas for cloud database
   - Update `MONGODB_URI` in config

### vercel.json Configuration
The `vercel.json` file contains deployment configurations for serverless functions.

---

## 📝 Database Schema

### User Schema
```javascript
{
  fullname: String,
  email: String,
  password: String (hashed with bcrypt),
  cart: [Product IDs],
  orders: Array,
  contact: Number,
  picture: String
}
```

### Product Schema
```javascript
{
  image: Buffer,
  name: String,
  price: Number,
  discount: Number (default: 0),
  bgcolor: String,
  panelcolor: String,
  textcolor: String
}
```

### Owner Schema
```javascript
{
  email: String,
  password: String (hashed with bcrypt),
  fullname: String,
  contact: Number,
  picture: String,
  gstin: String
}
```

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
- **Error**: `connect ECONNREFUSED 127.0.0.1:27017`
- **Solution**: Ensure MongoDB is running locally or configure MongoDB Atlas

### Port Already in Use
- **Error**: `Error: listen EADDRINUSE: address already in use :::3000`
- **Solution**: Change port in `.env` file or kill process using port 3000

### Session/Cookie Issues
- **Solution**: Clear browser cookies and restart server

### File Upload Errors
- **Solution**: Ensure `public/images/` directory exists and is writable

---

## 📚 Dependencies

Run `npm list` to see all installed packages:

```
├── bcrypt@6.0.0
├── config@4.2.0
├── connect-flash@0.1.1
├── cookie-parser@1.4.7
├── debug@4.4.3
├── dotenv@17.2.3
├── ejs@4.0.1
├── express@5.2.1
├── express-session@1.19.0
├── jsonwebtoken@9.0.3
├── mongoose@9.1.5
└── multer@2.0.2
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📞 Support

For support, email support@scatch.com or create an issue in the repository.

---

## 🎯 Roadmap

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] Admin analytics dashboard
- [ ] Mobile app
- [ ] Social login (Google, GitHub)

---

## 👨‍💻 Author

Developed as a learning project for e-commerce platform development with Node.js and MongoDB.

---

**Happy Shopping! 🛍️**
