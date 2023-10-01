import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../../store/reducers/cartReducer';

import s from './CartItem.module.css'

export default function CartItem({ id, title, price, count, image }) {
    const dispatch = useDispatch();

    return (
        <div className={s.cart}>
            <img src={`http://localhost:3333${image}`} alt={title} />
            <p>{title}</p>
            <p>{price * count} $</p>
            <p>{count}</p>

            <div>
                <button onClick={() => dispatch(decrementCountAction(id))}>-</button>
                <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
            </div>

            <span onClick={() => dispatch(deleteFromCartAction(id))}>X</span>


        </div>
    )
}

