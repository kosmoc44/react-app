import React, { Component } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

export class Order extends Component {
    render() {
        const { item, onDelete } = this.props;
        return (
            <div className="item">
                <img src={this.props.item.img} alt={item.title} />
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <FaRegTrashAlt className="delete-icon" onClick={() => onDelete(item.id)} />
            </div>
        )
    }
}

export default Order
