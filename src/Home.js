import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className="home_image"
                src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/KV_M31Prime-1024x371.jpg"
                />
                <div className='home_row'>
                    <Product 
                        title='The lean Startup' 
                        price={99} 
                        image='' 
                        rating={5}/>
                    <Product
                        title='The lean Startup' 
                        price={99} 
                        image='' 
                        rating={5}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        title='The lean Startup' 
                        price={99} 
                        image='' 
                        rating={5}
                    />
                    <Product
                        title='The lean Startup' 
                        price={99} 
                        image='' 
                        rating={5}
                    />
                    <Product
                        title='The lean Startup' 
                        price={99} 
                        image='' 
                        rating={5}
                    />
                </div>
                <div className='home_row'>
                    <Product/>
                    <Product/>
                </div>
            </div>
            
        </div>
    )
}

export default Home

