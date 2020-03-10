import React from 'react';

const TotalValue = ({items}) => {

const calculateTotalValue = () => items.reduce((acc, val) => acc +=  val.product.priceInCents * val.quantity/100, 0); 

return <div className="container mb-3">
    <div className="card card-body text-center h4">
    {`Totalvalue: ${ calculateTotalValue().toFixed(2)}$`}
    </div>
</div>

} 

export default TotalValue;