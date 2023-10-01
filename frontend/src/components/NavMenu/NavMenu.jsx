import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import s from '../NavMenu/NavMenu.module.css'
import { AiOutlineShopping } from 'react-icons/ai'
import img from '../../media/image_1.png'

export default function NavMenu() {

    // const className = ({ isActive }) => [s.link, isActive ? s.active : ''].join(' ');
    const commonClassName = ({ isActive }) => [s.link, isActive ? s.active : ''].join(' ');
    const catalogClassName = ({ isActive }) => [s.link, isActive ? s.active : '', s.catalog].join(' ');


    return (
        <div className={s.main_nav_menu}>
            <div className={s.img_catalog}>
                <NavLink to='./'>   <img src={img} alt="" className={s.imgg} /></NavLink>

                <NavLink to='/categories' className={catalogClassName}>Catalog</NavLink>
            </div>
            <div className={s.second_menu}>
                <NavLink to='/' className={commonClassName}>Main Page </NavLink>
                <NavLink to='/products' className={commonClassName}>All products</NavLink>
                <NavLink to='/all_sales' className={commonClassName}>All sales</NavLink>
            </div>
            <Link to='/cart' className={s.shopping_link}><AiOutlineShopping /></Link>
        </div>





    )
}
