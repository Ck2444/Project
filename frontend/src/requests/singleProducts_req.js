import { loadSingleProductAction } from "../store/reducers/singleProductReducer"



export const getSingleProduct = id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)))
    }
}