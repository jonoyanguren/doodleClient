import React from 'react';
import Slider from 'react-slick';

export const IndividualDoodle = ({doodle}) => {
    var settings = {
        dots: true,
        infinite: true,
        adaptiveHeight: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="individual-doodle contanier">
            <h1>{doodle.name}</h1>
            <p>{doodle.description}</p>
            <div className="individual-products">
                {
                    doodle.products.map((product, index) => {
                        return (
                            <div key={index} className="row individual-product">
                                    {/*{*/}
                                        {/*product.images.length != 0 ?*/}
                                            {/*<img className="col-lg-4" src={product.images[0].secureUrl} /> :*/}
                                            {/*<img className="col-lg-4" src="../../../img/no-image-evangify.jpg"/>*/}
                                    {/*}*/}

                                <Slider {...settings} className="col-lg-4">
                                    {
                                        product.images.map((image, index) => {
                                            return <div><img src={image.secureUrl} key={index} /></div>
                                        })
                                    }
                                </Slider>

                                <div className="col-lg-offset-1 col-lg-4 product-info">
                                    <h2>{product.name}</h2>
                                    <div className="line-through red">Precio Normal: {product.normalPrice}€</div>
                                    <div className="green">Precio Doodle: {product.doodlePrice}€</div>
                                    <div>Maximo: {product.max}</div>
                                    <div>Minimo: {product.min}</div>
                                </div>
                                <div className="col-lg-3 product-shipping">
                                    {
                                        product.freeShipping ?
                                            <img src="/doodleClient/img/free-shipping.png"/> :
                                            null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};