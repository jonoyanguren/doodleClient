import React, {Component} from 'react';
import {reduxForm} from 'redux-form'
export const fields = ['name', 'maxVal', 'minVal', 'stepVal', 'stock', 'price'];

class ProductForm extends Component {
    render() {
        const {
            fields: { name, maxVal, minVal, stepVal, stock, price }, handleSubmit} = this.props;

        return (
            <div>
                <div className="form-group col-lg-2">
                    <label>Name</label>
                    <input type="text" className="form-control" {...name}/>
                </div>
                <div className="form-group col-lg-2">
                    <label>Max</label>
                    <input type="text" className="form-control" {...maxVal}/>
                </div>
                <div className="form-group col-lg-2">
                    <label>Min</label>
                    <input type="text" className="form-control" {...minVal}/>
                </div>
                <div className="form-group col-lg-2">
                    <label>Step</label>
                    <input type="text" className="form-control" {...stepVal}/>
                </div>
                <div className="form-group col-lg-2">
                    <label>Stock</label>
                    <input type="text" className="form-control" {...stock}/>
                </div>
                <div className="form-group col-lg-2">
                    <label>Price</label>
                    <input type="text" className="form-control" {...price}/>
                </div>
            </div>
        );
    }
}


export default reduxForm({
    form: 'product',
    fields
})(ProductForm)