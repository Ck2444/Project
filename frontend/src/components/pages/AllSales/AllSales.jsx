import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../ConteinersAndItems/ProductsContainer/ProductsContainer';
import SortFormForSales from '../../FilterForms/SortFormForSales/SortFormForSales';

export default function AllSales() {
    const product_sale = useSelector(state => state.allproducts);

    const discount_products = product_sale.filter(el => el.discont_price !== null)

    return (

        <div>
            <h1>All Sales</h1>
            <SortFormForSales />
            <ProductsContainer products={discount_products} />
        </div>
    )
}
