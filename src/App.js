import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ShopppingCart from './ShoppingCart';
import './App.css';
import AddItem from './AddItem';
import TotalValue from './TotalValue';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ]
    }

  }

  addItem = (addedItem) => {

    let updateItem = this.state.cartItems.find(item => item.product.id === addedItem.product.id);
    if (updateItem !== undefined) {
      this.setState( prevState => {
        const updatedCartList = prevState.cartItems.reduce((acc, val) => {
          if (val.product.id === addedItem.product.id) {
            val.quantity += addedItem.quantity;
          }
          acc.push(val);
          return acc;
        }, []);
        return {cartItems: updatedCartList};
      });
    } else {
      let newIdx = this.state.cartItems.reduce((a, b) => a = a.id > b.id ? a : b).id + 1;
      addedItem.id = newIdx;
      this.setState(prevState => {
         const result = prevState.cartItems.concat(addedItem);
        return { cartItems: result };
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header title={this.props.headerTit} />
        <ShopppingCart title={this.props.mainTit} items={this.state.cartItems} />
        <TotalValue items={this.state.cartItems}/>
        <AddItem products={this.state.products} addItem={this.addItem}></AddItem>
        <Footer copyright={this.props.footerTit} />

      </div>
    );
  }

}

export default App;
