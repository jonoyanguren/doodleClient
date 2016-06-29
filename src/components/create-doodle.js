import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createDoodle} from '../actions/index';
import GoogleMap from './GoogleMap';
import Marker from './GoogleMap';
import Places from './Places';
import DatePicker from 'react-datepicker';
import * as moment from 'moment';

class CreateDoodle extends Component {
    getInitialState() {
        return {
            date: moment()
        };
    }

    state = {
        center: null,
        products: []
    };

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            });
        });
    }

    onDragend(event) {
        this.setState({
            location: {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }
        });

        console.log(this.state.location);
    }

    renderYouAreHereMarker() {
        return (
            <Marker
                position={this.state.center}
                draggable={true}
                onDragendEvent={this.onDragend.bind(this)}
                icon="../../img/you-are-here.png"
            />
        )
    }

    onFormSubmit(props) {
        var data = {
            props: props,
            location: this.state.location,
            endsAt: this.state.date,
            products: this.state.products
        };

        this.props.createDoodle(data)
            .then(() => {
                // this.context.router.push('/');
                console.log("Doodle creado!");
            });
    }

    renderMap() {
        if (!this.state.center) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <GoogleMap
                    style={{height: '50vh', width: '100%', margin: '30px 0'}}
                    center={this.state.center}
                    zoom={15}
                >
                    <Places />
                    {this.renderYouAreHereMarker()}
                </GoogleMap>
            </div>
        );
    }

    handleChange(date) {
        this.setState({date: date})
    }

    saveProduct(e) {
        e.preventDefault();

        var newProduct = {
            name: this.refs.productName.value,
            max: this.refs.productMax.value,
            min: this.refs.productMin.value,
            step: this.refs.productStep.value,
            stock: this.refs.productStock.value,
            price: this.refs.productPrice.value
        };

        var newProducts = this.state.products;
        newProducts.push(newProduct);

        this.setState({products: newProducts});

        this.refs.productName.value = "";
        this.refs.productMax.value = "";
        this.refs.productMin.value = "";
        this.refs.productStep.value = "";
        this.refs.productStock.value = "";
        this.refs.productPrice.value = "";
    }

    render() {
        const {fields: {name, packagingType, product}, handleSubmit} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    <h3>Create a new Doodle</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" {...name}/>
                    </div>
                    <div className="form-group">
                        <label>Ends at:</label><br/>
                        <DatePicker
                            className="form-control"
                            placeholderText="Click to select a date"
                            dateFormat="DD/MM/YYYY"
                            selected={this.state.date}
                            onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label>Package type</label>
                        <select className="form-control"
                            {...packagingType}
                                value={packagingType.value || ''}>
                            <option value="">Selecciona un packaging</option>
                            <option value="0">Con burbujas</option>
                            <option value="1">Con caja normal</option>
                        </select>
                    </div>

                    {this.renderMap()}

                    {
                        this.state.products.map((product, index) => {
                            return(
                                <p key={index}>{product.name} - {product.max} - {product.min} - {product.step} - {product.stock} - {product.price}</p>
                            )
                        })
                    }

                    <h3>Add a product</h3>

                    <div className="row product-fields" ref="productForm">
                        <div className="form-group col-lg-2">
                            <label>Name</label>
                            <input type="text" className="form-control" ref="productName"/>
                        </div>
                        <div className="form-group col-lg-2">
                            <label>Max</label>
                            <input type="text" className="form-control" ref="productMax"/>
                        </div>
                        <div className="form-group col-lg-2">
                            <label>Min</label>
                            <input type="text" className="form-control" ref="productMin"/>
                        </div>
                        <div className="form-group col-lg-2">
                            <label>Step</label>
                            <input type="text" className="form-control" ref="productStep"/>
                        </div>
                        <div className="form-group col-lg-2">
                            <label>Stock</label>
                            <input type="text" className="form-control" ref="productStock"/>
                        </div>
                        <div className="form-group col-lg-2">
                            <label>Price</label>
                            <input type="text" className="form-control" ref="productPrice"/>
                        </div>
                        <a className="btn btn-primary" onClick={this.saveProduct.bind(this)}>Save</a>
                    </div>

                    <button type="submit" className="btn btn-block btn-success margin20v">Create Doodle</button>
                </form>
            </div>
        );
    }
}

/*
 * name: String,
 max: Number,
 min: Number,
 step: Number,
 stock: Number,
 price: Number*/
export default reduxForm({
    form: 'CreateDoodle',
    fields: ['name', 'packagingType', 'product.name', 'product.max', 'product.min', 'product.step', 'product.stock', 'product.price']
}, null, {createDoodle})(CreateDoodle);