'use client';

import { Button, Grid, Typography } from '@mui/material';
import { theme } from '../Theme';
import Money from '../components/Money';
import { Currencies } from '../enums/currencies';
import { Product } from '../interfaces/Product';

type ProductCardProps = {
    product: Product;
    buyHandler?: () => {};
};

export default function ProductCard(props: ProductCardProps) {
    const { id, title, description, discount, price, imageUrl } = props.product;
    const { buyHandler } = props;
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
            <Grid item xs={12} className="flex justify-between items-center">
                <Money currency={Currencies.USD} value={price - discount} />
                <Button variant="contained" onClick={buyHandler}>
                    Buy
                </Button>
            </Grid>
        </Grid>
    );
}
