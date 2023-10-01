import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../../requests/singleCategory';
import ProductsContainer from '../../ConteinersAndItems/ProductsContainer/ProductsContainer';
import SortFormByCategory from '../../FilterForms/SortFormByCategory/SortFormByCategory';



export default function ProductsByCategoriesPage() {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => dispatch(getProductsByCategory(id)), [])


    const products_by_category_state = useSelector(state => state.productsByCategory);
    const products = products_by_category_state?.data || [];
    console.log(products);

    // console.log(products_by_category_state);
    const category_with_title = products_by_category_state.category;

    return (
        <div>
            <p> {category_with_title?.title}</p>
            <SortFormByCategory />
            <ProductsContainer products={products} category_show={false} />
        </div>
    )
}


{/* <p >{discont_price*count ? discont_price : price*count}$</p> */ }