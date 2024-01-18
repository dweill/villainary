import { Grid } from '@mui/material';
import Wallet from '../components/Wallet';
import { products } from '../constants/products';
import ProductCard from './ProductCard';

export default function page() {
    return (
        <Grid container rowSpacing={3}>
            <Grid item>
                <Wallet  />
            </Grid>
            <Grid item container rowSpacing={3} columnSpacing={3}>
                {products.map((product) => (
                    <Grid item xs={6} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
