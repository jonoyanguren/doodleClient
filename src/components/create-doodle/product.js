import React, {Component} from 'react';

class Product extends Component {
    render() {
        const {product} = this.props;

        return (
            <div className="product list-group-item">
                <div className="product-info">
                    <div className="productName">{product.name}</div>
                    <div>Max: <span className="productValue">{product.max}</span>
                    </div>
                    <div>Min: <span className="productValue">{product.min}</span>
                    </div>
                    <div>Step: <span className="productValue">{product.step}</span>
                    </div>
                    <div>Stock: <span
                        className="productValue">{product.stock}</span></div>
                    <div>Price: <span className="productValue">{product.price}
                        €</span></div>
                </div>
                <div className="product-images">
                    {
                        product.images.map((image, index) => {
                            return (
                                <img className="product-image" key={index} src={image} />
                            );
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Product;