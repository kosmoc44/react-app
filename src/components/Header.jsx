import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaRegSadTear } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
    </div>)
}

const showNothing = () => {
    return (<div className="empty">
        <h2>Товаров нет</h2>
        <FaRegSadTear className="sad" />
    </div>)
}

const Header = (props) => {
    const [cartOpen, setCartOpen] = useState(false)

    return (
        <header className="header">
            <span className="logo">
                House Staff
            </span>
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingBag onClick={() => setCartOpen(cartOpen => !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
                <div className="shop-cart">
                    {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                </div>
            )}
            <div className="presentation">

            </div>
        </header>
    )
}

export default Header

