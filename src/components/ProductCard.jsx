import React from 'react'
import styles from '../styles/ProductCard.module.css'
import { Card, CardContent, Typography, Button } from '@mui/material'

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={product.inStock ? '' : styles.outOfStockClass}>
      <Card sx={{ margin: 1, padding: 1 }}>
        <CardContent>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body1">{product.price}</Typography>
          <Typography variant="body2">{product.inStock ? 'In Stock' : 'Out of Stock'}</Typography>
          <Button variant="contained" color="error" onClick={() => onRemove(product.id)}>
            Remove
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard