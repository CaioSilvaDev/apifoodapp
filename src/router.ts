import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// list categorys
router.get('/categorys', listCategories);

// Create category
router.post('/categorys', (req, res) => {
  res.send('OK');
});

// List products
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create product
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get products by category
router.get('/categories/:categoryID/products', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// change order status
router.patch('/orders/:orderID', (req, res) => {
  res.send('OK');
});

// delet/cancel order
router.delete('/orders/:orderID', (req, res) => {
  res.send('OK');
});

