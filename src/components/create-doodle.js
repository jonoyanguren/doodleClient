import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createDoodle, getAmbassadorsByValue} from '../actions/index';
import GoogleMap from './GoogleMap';
import Marker from './GoogleMap';
import Places from './Places';
import DatePicker from 'react-datepicker';
import DropZoneContainer from './dropzone-container';
import Product from './product';
import * as moment from 'moment';
import AmbassadorsList from './ambassadors-list';

class CreateDoodle extends Component {
    getInitialState() {
        return {
            date: moment()
        };
    }

    state = {
        center: null,
        products: [],
        currentFiles: [],
        ambassadors: [],
        selectedAmbassador: null
    };

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                location: {
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
                icon="img/markers/you-are-here.png"
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
                if (data.error) {
                    alert("Error: " + data.payload.message);
                    return;
                }

                // this.props.history.push('/');
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

        var productFormIsWrong = this.refs.productName.value == "" || this.refs.productMax.value == "" || this.refs.productMin.value == "" || this.refs.productStep.value == "" || this.refs.productStock.value == "" || this.refs.productPrice.value == "";

        if (productFormIsWrong) {
            alert("Invalid product fields");
            return;
        }

        var newProduct = {
            name: this.refs.productName.value,
            max: this.refs.productMax.value,
            min: this.refs.productMin.value,
            step: this.refs.productStep.value,
            stock: this.refs.productStock.value,
            price: this.refs.productPrice.value,
            images: this.state.currentFiles
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
        this.setState({currentFiles: []});
    }

    onDrop(files) {
        this.setState({currentFiles: files});
    }

    onAmbassadorInputChange(e) {
        e.preventDefault();
        var value = e.target.value;

        if (value.length > 2) {
            this.props.getAmbassadorsByValue(value)
                .then((result) => {
                    if (result.error) {
                        alert("Error getting the ambassadors");
                    }

                    this.setState({ambassadors: result.payload.data})
                });
        } else {
            this.setState({ambassadors: []});
        }
    }

    onAmbassadorItemClick(ambassador) {
        this.setState({selectedAmbassador: ambassador});
        console.log(ambassador);
    }

    render() {
        const {fields: {name, packagingType}, handleSubmit} = this.props;

        return (
            <div className="create-form">
                <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    <div className="inputs-section">
                        <h3 className="first">Create a new Doodle</h3>
                        <div>
                            <p>Aquí crearás toda la información básica de un doodle.</p>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4">
                                <label>Name</label>
                                <input type="text" className="form-control" {...name}/>
                            </div>
                            <div className="form-group col-lg-4">
                                <label>Ends at:</label><br/>
                                <DatePicker
                                    className="form-control"
                                    placeholderText="Click to select a date"
                                    dateFormat="DD/MM/YYYY"
                                    selected={this.state.date}
                                    onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-group col-lg-4">
                                <label>Package type</label>
                                <select className="form-control"
                                    {...packagingType}
                                        value={packagingType.value || ''}>
                                    <option value="">Selecciona un packaging</option>
                                    <option value="0">Con burbujas</option>
                                    <option value="1">Con caja normal</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="inputs-section">
                        <h3 className="first">Select your ambassador</h3>
                        <div>
                            <p>Choose the ambassador that will hold the doodle. You can search in the field or enter an email. If you chose the second option an automatic email will be sent with all the information to the address.</p>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4 col-md-4">
                                <label>Name</label>

                                <input type="text" className="form-control"
                                       onChange={this.onAmbassadorInputChange.bind(this)}/>

                                {
                                    this.state.selectedAmbassador ?
                                        <div className="selected-ambassador">
                                            {!this.state.selectedAmbassador.image ? <img src="img/no-image.jpg"/> : <img src={this.state.selectedAmbassador.image}/>}
                                                <div>
                                                    <h4 className="card-title">{this.state.selectedAmbassador.name}</h4>
                                                    <p className="card-text">{this.state.selectedAmbassador.email}</p>
                                                </div>
                                        </div>
                                        : null
                                }
                            </div>
                            <div className="col-lg-6 col-lg-offset-2 col-md-6 col-md-offset-2 list-group">
                                {
                                    !this.state.ambassadors.length == 0 ?
                                        <AmbassadorsList onClick={this.onAmbassadorItemClick.bind(this)}
                                                         ambassadors={this.state.ambassadors}/> :
                                        null
                                }
                            </div>
                        </div>
                    </div>

                    {/*<div className="inputs-section">
                     <h3 className="second">¿Dónde se va a recoger el pedido?</h3>
                     <p>Arrastra el marcador del mapa hasta la posición donde la gente tendrá que ir a recoger el
                     pedido.</p>
                     {this.renderMap()}
                     </div>*/}

                    <div className="inputs-section">
                        <h3 className="third">Área de productos</h3>
                        <h4>Todos tus productos</h4>
                        {this.renderNoHayProductos}

                        <div className="products list-group">
                            {
                                this.state.products.length == 0 ?
                                    <p>No hay ningún producto añadido a este doodle todavía</p> :

                                    <div className="products">
                                        {
                                            this.state.products.map((product, index) => {
                                                return (
                                                    <Product key={index} product={product}/>
                                                )
                                            })
                                        }
                                    </div>
                            }
                        </div>

                        <h4>Add a product</h4>
                        <div className="row product-fields" ref="productForm">
                            <div className="form-group col-lg-2 col-md-12 col-xs-12">
                                <label>Name</label>
                                <input type="text" className="form-control" ref="productName"/>
                            </div>
                            <div className="form-group col-lg-2 col-md-2 col-xs-2">
                                <label>Max</label>
                                <input type="text" className="form-control" ref="productMax"/>
                            </div>
                            <div className="form-group col-lg-2 col-md-2 col-xs-2">
                                <label>Min</label>
                                <input type="text" className="form-control" ref="productMin"/>
                            </div>
                            <div className="form-group col-lg-2 col-md-2 col-xs-2">
                                <label>Step</label>
                                <input type="text" className="form-control" ref="productStep"/>
                            </div>
                            <div className="form-group col-lg-2 col-md-2 col-xs-2">
                                <label>Stock</label>
                                <input type="text" className="form-control" ref="productStock"/>
                            </div>
                            <div className="form-group col-lg-2 col-md-2 col-xs-2">
                                <label>Price</label>
                                <input type="text" className="form-control" ref="productPrice"/>
                            </div>

                        </div>

                        <h4>Añade imágenes</h4>
                        <DropZoneContainer
                            files={this.state.currentFiles}
                            onDrop={this.onDrop.bind(this)}/>

                        <div className="row">
                            <a className="btn btn-primary btn-block btn-a save-product"
                               onClick={this.saveProduct.bind(this)}>Save</a>
                        </div>
                    </div>

                    <div className="doodle-form-submit">
                        <button type="submit" className="btn btn-block btn-success margin20v">Create Doodle</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'CreateDoodle',
    fields: ['name', 'packagingType', 'product.name', 'product.max', 'product.min', 'product.step', 'product.stock', 'product.price']
}, null, {createDoodle, getAmbassadorsByValue})(CreateDoodle);