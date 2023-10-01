import { loadAllproductsAction } from "../store/reducers/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer"



export const getProductsByCategory = id => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadProductsByCategoryAction(json)))


    }
}

export const getAllproducts = (dispatch) => {
    fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllproductsAction(json)))
}






//return dispatch => {}
//.then(json => dispatch(loadProductsByCategoryAction(json.category)))