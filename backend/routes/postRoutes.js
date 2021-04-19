import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('All Products');
});

router.get('/:id', (req, res) => {
  res.send('single product');
});

export default router;
