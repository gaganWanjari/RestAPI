# Simple RESTful API with Node.js and TypeScript

This project implements a simple RESTful API using Node.js and TypeScript. The API provides basic CRUD operations for managing a list of products in an in-memory data store.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Middleware](#middleware)
- [Unit Testing](#unit-testing)
- [Documentation](#documentation)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm (Node Package Manager): [https://www.npmjs.com/](https://www.npmjs.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
2. Install dependencies:
	
	npm install

3. Run the server:
	npm start
The server will be running at http://localhost:3000

Endpoints
GET /api/products: Retrieve a list of products.
GET /api/products/:id: Retrieve details of a specific product by ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update details of a specific product by ID.
DELETE /api/products/:id: Delete a product by ID.

Certainly! Below is a template for a README.md file for the provided API. You can customize it based on your specific details and preferences:

markdown
Copy code
# Simple RESTful API with Node.js and TypeScript

This project implements a simple RESTful API using Node.js and TypeScript. The API provides basic CRUD operations for managing a list of products in an in-memory data store.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Middleware](#middleware)
- [Unit Testing](#unit-testing)
- [Documentation](#documentation)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm (Node Package Manager): [https://www.npmjs.com/](https://www.npmjs.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
Install dependencies:

bash
Copy code
cd your-repo
npm install
Run the server:

bash
Copy code
npm start
The server will be running at http://localhost:3000.

Endpoints
GET /api/products: Retrieve a list of products.
GET /api/products/:id: Retrieve details of a specific product by ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update details of a specific product by ID.
DELETE /api/products/:id: Delete a product by ID.

Middleware
A middleware function logs the timestamp, HTTP method, and requested URL for every incoming request to the API.

Unit Testing
Unit tests are implemented using Jest and Supertest. To run the tests, use:
	npm test
