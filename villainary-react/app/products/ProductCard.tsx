'use client';

import { Grid, Typography } from '@mui/material';
import { theme } from '../Theme';
import Money from '../components/Money';
import { Currencies } from '../enums/currencies';
import { Product } from '../interfaces/Product';

type ProductCardProps = {
    product: Product;
};

export default function ProductCard(props: ProductCardProps) {
    const { id, title, description, discount, price, imageUrl } = props.product;
    return (
        <Grid
            container
            rowSpacing={1}
            sx={{
                backgroundColor: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
                height: '15rem',
                padding: '1rem 2rem',
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h6">{title}</Typography>
            </Grid>
            <Grid item xs={12}>
                {description}
            </Grid>
            <Grid item xs={12}>
                <Money currency={Currencies.USD} value={price - discount} />
            </Grid>
        </Grid>
    );
}
