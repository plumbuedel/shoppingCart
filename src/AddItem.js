import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

    this.state = {
        id: 0,
        product: {},
        quantity: 0
    }
    }

    getOptions = () => {
       const options =  this.props.products.map(product => <option key={product.id} value={product.id}>{product.name}</option>);
       options.push(<option key={0} value="" disabled selected hidden>Select a product...</option>); 
       return options;
    } 

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} className="list-group-item">
               <div className="form-group">
                    <label>Quantity:
                    </label>
                     <input type='number' className="form-control" id="quantity" onChange={(e) =>  this.setState({[e.target.id] :  parseInt(e.target.value)})} required>
                    </input>
                    </div>
                <div className="form-group">
                    <label>Products</label>
                    <select className="form-control" type="select" id="product" placeholder="Select a product" onChange={(e) => {
                        const result = this.props.products.find(product => product.id === parseInt(e.target.value));
                        this.setState({ product : result});
                        }}
                        required>
                    
                        {this.getOptions()}

                    </select>

                </div>
                <div className="form-group">
                    <input className="btn btn-primary" type="submit" value="Add"></input>
                </div>
                </form>
        );
    }
}

export default AddItem;