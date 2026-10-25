# 🌱 CropCart

### Farm-Fresh Products, Directly From Farmers

CropCart is a full-stack agricultural marketplace project designed to connect local farmers directly with consumers. The goal is to make fresh produce more accessible while creating a simple, transparent, and convenient shopping experience.

**Current Status:** Frontend MVP in development. Backend integration is planned.

## Overview

CropCart provides an interactive shopping experience where users can browse agricultural products, add items to a shopping cart, review quantities and prices, and complete a demo checkout form.

The project is being developed incrementally, starting with a responsive React frontend and progressing toward a complete full-stack application.

## Features

### Implemented
- **Product Listings:** Browse agricultural products with images and prices.
- **Shopping Cart:** Add products and track item quantities.
- **Cart Summary:** View selected items and calculated subtotals.
- **Persistent Cart:** Retain cart data across browser refreshes using localStorage.
- **Checkout Form:** Enter customer name, email, phone number, and delivery address.
- **Input Validation:** Validate required customer details before demo order confirmation.
- **Reusable Components:** Organize the interface into React components for easier maintenance.

### Planned
- Node.js and Express.js backend
- RESTful APIs for products and orders
- MongoDB database integration
- User registration and authentication
- Farmer product-management dashboard
- Order creation and tracking
- Admin management features
- Secure payment integration

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Build Tool | Vite |
| State Management | React Hooks (`useState`, `useEffect`) |
| Browser Storage | localStorage |
| Version Control | Git and GitHub |
| Backend (Planned) | Node.js, Express.js |
| Database (Planned) | MongoDB |

## Project Structure

```text
CropCart/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── Checkout.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/abhinav0080/CropCart.git
```

**2. Navigate to the frontend folder**

```bash
cd CropCart/client
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically `http://localhost:5173`.

## How It Works
1. Browse available products on the homepage.
2. Click **Add to Cart** to select an item.
3. Review your cart and product quantities.
4. Refresh the page without losing your saved cart.
5. Enter customer details in the checkout form.
6. Submit the form to receive a demo order confirmation.

**Note:** Checkout currently runs entirely in the browser. It does not process payments, save orders to a server, or place real orders.

## Development Roadmap
- [x] Initialize React frontend
- [x] Create navigation and hero section
- [x] Build reusable product cards
- [x] Implement shopping cart state
- [x] Persist cart with localStorage
- [x] Implement demo checkout form
- [ ] Build Express.js backend
- [ ] Create product APIs
- [ ] Connect frontend to backend
- [ ] Integrate MongoDB
- [ ] Implement authentication
- [ ] Build farmer and admin dashboards
- [ ] Implement persistent order management
- [ ] Deploy the application

## Future Improvements

The long-term vision is to provide a marketplace where farmers can independently manage their products and consumers can place and track orders through a secure application.

## Author

**Abhinav Dixit**

GitHub: [@abhinav0080](https://github.com/abhinav0080)

## Project Status

CropCart is an ongoing personal software development project built for hands-on learning and practical experience with modern web technologies.
