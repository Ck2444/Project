import { loadSingleProductAction } from "../store/reducers/singleProductReducer"



export const getSingleProduct = id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)))
    }
}

export const getDiscount = new_product => {
    fetch('http://localhost:3333/sale/send', {

        method: 'POST',
        body: JSON.stringify({ new_product })

    })
        .then(res => res.json())
        .then(json => console.log(json, 'Congratulations! You have got your disount 5%'))
}

export const sendOrder = new_product => {
    fetch('http://localhost:3333/order/send', {
        method: 'POST',
        body: JSON.stringify({ new_product })
    })
        .then(res => res.json())
        .then(json => console.log(json, 'Congratulations! Your new order added'))
}
