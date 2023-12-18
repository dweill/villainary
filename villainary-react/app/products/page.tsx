import { Grid } from '@mui/material';
import { products } from '../constants/products';
import ProductCard from './ProductCard';

export default function page() {
    return (
        <Grid container rowSpacing={3} columnSpacing={3}>
            {products.map((product) => (
                <Grid item xs={6}>
                    <ProductCard product={product} key={product.id} />
                </Grid>
            ))}
        </Grid>
    );
}
