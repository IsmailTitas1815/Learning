import React from 'react'
import Header from './Header';
import { useSelector } from 'react-redux'
import Product from './Product';

const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer)
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
