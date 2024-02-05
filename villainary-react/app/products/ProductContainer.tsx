'use client';

import { Grid } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../api/api-handler';
import Wallet from '../components/Wallet';
import { products as stubProducts } from '../constants/products';
import { Product } from '../interfaces/Product';
import { updateCurrentFunds } from '../state/userState.slice';
import ProductCard from './ProductCard';

export default function ProductContainer() {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();
    const handleClick = (value: number) => {
        return () => {
            return dispatch(updateCurrentFunds(-value));
        };
    };
    getData<Product[]>('VillainaryProducts')
        .then((products) => {
            setProducts(products);
        })
        .catch((err) => {
            console.error(err);
            setProducts(stubProducts);
        });
    return (
        <Grid container rowSpacing={3}>
            <Grid item>
                <Wallet />
            </Grid>
            <Grid item container rowSpacing={3} columnSpacing={3}>
                {products.map((product) => (
                    <Grid item xs={6} key={product.id}>
                        <ProductCard
                            product={product}
                            buyHandler={handleClick(
                                product.price - product.discount
                            )}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
