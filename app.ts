// Import necessary modules
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { generateProductId } from './generateProductId';
// Create an instance of Express
const app: Application = express();

// Use middleware to parse JSON bodies
app.use(bodyParser.json());


let products: any[] = [
    {
        "id": "1",
        "name": "Product A",
        "price": 10
      },
      {
        "id": "2",
        "name": "Product B",
        "price": 19.99
      },
      {
        "id": "3",
        "name": "Product C",
        "price": 19.99
      }
];

// GET /api/products
app.get('/api/products', (req: Request, res: Response) => {
    res.json(products);
});

// GET /api/products/:id
app.get('/api/products/:id', (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = products.find((p) => p.id === productId);

    if (!product) {
        res.status(404).json({ error: 'Product not found' });
    } else {
        res.json(product);
    }
});

// POST /api/products

app.post('/api/products', (req: Request, res: Response) => {
    const newProduct = req.body;
    newProduct.id = generateProductId(); // Generate a unique ID (you can implement this function)
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT /api/products/:id
app.put('/api/products/:id', (req: Request, res: Response) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    const existingProductIndex = products.findIndex((p) => p.id === productId);

    if (existingProductIndex === -1) {
        res.status(404).json({ error: 'Product not found' });
    } else {
        products[existingProductIndex] = { ...products[existingProductIndex], ...updatedProduct };
        res.json(products[existingProductIndex]);
    }
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req: Request, res: Response) => {
    const productId = req.params.id;
    products = products.filter((p) => p.id !== productId);
    res.json({ message: 'Product deleted successfully' });
});
export default app;
// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Middleware for logging incoming requests
app.use((req: Request, res: Response, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;

    console.log(`${timestamp} - ${method} request to ${url}`);
    next();
});
