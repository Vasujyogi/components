import React from 'react'



class ProductsData extends React.Component{
    state = {
        Products:[
            {
                name: "Galaxy S22+",
                image: <img src="https://www.cnet.com/a/img/resize/20ddb34526723119296f9c16795a69434718eccd/hub/2022/02/11/7ca46cb8-01a8-471d-940c-416e94fc0671/samsung-s22-plus-hands-on-003.jpg?auto=webp&fit=crop&height=675&width=1200" alt='galaxt s22 image'
                width={300} height={200} />,
                description: 'Samsung galaxy S22+ is a Compact,yet a big Screen Phone',
                price: '₹1,75,000'
            },
            {
                name: "iPad Pro (6th Gen)",
                image:<img src="https://photos5.appleinsider.com/gallery/50648-100945-2022-M2-iPad-Pro-VS-2021-M1-iPad-Pro!-xl.jpg" alt='laptop image'
                width={300} height={200} />,
                description: 'iPad Pro is a 12.9 inch miniLED tablet with M2 Chip inside.',
                price: ' ₹3,00,000'
            },
            {
                name: "Hero Xpulse 200 4V (2022)",
                image: <img src="https://www.heromotocorp.com/en-in/motorcycles/performance/xpulse-200-4v/_jcr_content/root/container/container/container/productbanner_copy_c.coreimg.png/1663155449282/top-banner-bike.png" alt='laptop image'
                width={200} height={200} />,
                description: 'Hero Xpulse 200 4V (2022) is a adventure bike with long telescopic suspensions',
                price:  ' ₹2,00,000'
            },
         ]
    }
    render() {
        return (
            <div className='ProductsFlex'>
            {
                this.state.Products.map((product) => (
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.image}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        
                    </div>
                ))
             }
        </div>
        )
    }
}

export default ProductsData