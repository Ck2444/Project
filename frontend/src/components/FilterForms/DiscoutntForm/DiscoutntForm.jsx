import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { discoutnProductsAction } from '../../../store/reducers/allProductsReducer'

export default function DiscoutntForm() {

    const dispatch = useDispatch()

    const [checkboxChecked, setCheckboxChecked] = useState(false)

    const handelChange = () => setCheckboxChecked(!checkboxChecked)

    const get_products = e => dispatch(discoutnProductsAction(e.target.checked))
    return (
        <div>
            <label>
                <p>Discounted items</p>
                <input type="checkbox" checked={checkboxChecked} onChange={handelChange}
                    onClick={get_products}
                />
            </label>
        </div>
    )
}
