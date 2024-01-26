import { Grid } from '@mui/material';
import Wallet from '../components/Wallet';
import { products } from '../constants/products';
import ProductCard from './ProductCard';
import {Product} from "@/app/interfaces/Product";

async function getData(): Promise<Product[]> {
    try {
        const res = await fetch(`http://${process.env.API_HOST}:8080/api/VillainaryProducts`);
        return res.json();
    } catch(error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
export default async function page() {

    const products = await getData();
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
