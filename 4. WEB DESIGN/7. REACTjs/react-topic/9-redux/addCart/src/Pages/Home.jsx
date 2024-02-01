import React from 'react';
import productsData from '../Data/productsData';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';


const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <Header />
                    <div className="home_content grid grid-cols-4">
                        { 
                            productsData.map((item) => (
                                <ProductCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;