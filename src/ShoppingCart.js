import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ title, items }) => {


const createItems = (items) => {
const cartItems =  items.map(item => <CartItem key={item.id} item={item}/>);
return cartItems;
}

    return (
        <div className="container mb-3">
            <h1>{title}</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {createItems(items)}
            </div>
        </div>



    );
}

export default ShoppingCart;