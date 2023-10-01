import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../../store/reducers/cartReducer'
import s from '../SingleProductCard/SingleProductCard.module.css'

export default function SingleProductCard({ id, title, image, price, description }) {
    const dispatch = useDispatch()

    return (
        <div >
            <p className={s.title}>{title}</p>
            <div className={s.main_card}>
                <img src={`http://localhost:3333${image}`} alt={title} />
                <div className={s.productInfo}>
                    <p>
                        <span className={s.priceText}>{price}</span>
                        <span className={s.currencySymbol}> $</span>
                    </p>
                    <div
                        className={s.cart_btn}
                        onClick={() => dispatch(addToCartAction({ id, image, title, price }))}
                    >To cart</div>
                    <div className={s.dotted_line}></div>
                    <p className={s.descriptionLabel}>Description</p>
                    <p className={s.text_description}> {description}</p>

                </div>
            </div>


        </div>
    )
}
