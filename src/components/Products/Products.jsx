import React from 'react';

import {Grid}  from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id:1, name: "Tea", desc: "Assam Tea", price: "Rs. 99", image: "https://media.istockphoto.com/photos/black-tea-in-a-cup-picture-id475614605?k=20&m=475614605&s=612x612&w=0&h=QxyE7nnKJi2m9xoOedKiuLmblGT-87daZPkvHnPP9eY="},
    { id:1, name: "Macbook", desc: "Apple Macbook Air M1", price: "Rs. 999", image: "https://images.indulgexpress.com/uploads/user/imagelibrary/2020/12/30/original/MacBookAirM1.jpg"},
];

const Products = () => {

    const classes = useStyles();
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;
