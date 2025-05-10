import React from 'react';
import MenItems from '../MenItems';
import WomenItems from '../WomenItems';
import KidsItems from '../KidsItems';
import Hero from "../../Assets/hero-img1 (2).png";

export default function Shop() {
    return (
        <div className="container py-5">
            {/* Hero Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center text-md-start">
                    <h5 className="text-uppercase text-muted">New Arrival Only</h5>
                    <h1 className="display-4 fw-bold">
                        New <br /> Collection <br /> For Everyone
                    </h1>
                    <button className="btn btn-primary mt-3">Latest Collection</button>
                </div>
                <div className="col-md-6 text-center">
                    <img src={Hero} alt="Hero" className="img-fluid" style={{ maxWidth: "80%" }} />
                </div>
            </div>

            {/* Section Title */}
            <h2 className="text-center text-primary fw-bold mb-4">New Collection</h2>

            {/* Men Items */}
            <h4 className="text-center text-dark mb-3">Men's Wear</h4>
            <div className="row g-4 mb-5">
                {[25000, 10000, 5000, 25000, 15000, 5000].map((price, index) => (
                    <div className="col-6 col-md-4 col-lg-3" key={index}>
                        <MenItems
                            img={[
                                "https://i0.wp.com/risingranks.me/wp-content/uploads/2023/09/street-style-of-mens-clothing-1.jpg?resize=542%2C542&ssl=1",
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4jzel56jAX9X7MWrEdQHR2O9adIwNgwpYQ&usqp=CAU",
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4jzel56jAX9X7MWrEdQHR2O9adIwNgwpYQ&usqp=CAU",
                                "https://i.pinimg.com/564x/84/48/af/8448af80944eaca909874361f6009221.jpg",
                                "https://i.pinimg.com/474x/ff/d4/83/ffd483a418b7a6d4589c427a3665f55e.jpg",
                                "https://www.instyle.com/thmb/EMeMmp7gV5ZC-QgM9f-7R_iLSr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-539573922-2000-a03885527cf14bb9b1719a5812fb1d26.jpg"
                            ][index]}
                            name="Men Dress"
                            price={price}
                        />
                    </div>
                ))}
            </div>

            {/* Women Items */}
            <h4 className="text-center text-dark mb-3">Women's Wear</h4>
            <div className="row g-4 mb-5">
                {[10000, 10000, 10000, 15000, 15000, 15000].map((price, index) => (
                    <div className="col-6 col-md-4 col-lg-3" key={index}>
                        <WomenItems
                            img={[
                                "https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg",
                                "https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg",
                                "https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg",
                                "https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg",
                                "https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg",
                                "https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg"
                            ][index]}
                            name="Women Dress"
                            price={price}
                        />
                    </div>
                ))}
            </div>

            {/* Kids Items */}
            <h4 className="text-center text-dark mb-3">Kids' Wear</h4>
            <div className="row g-4 mb-5">
                {[7000, 7000, 7000, 7000, 7000, 7000].map((price, index) => (
                    <div className="col-6 col-md-4 col-lg-3" key={index}>
                        <KidsItems
                            img={[
                                "https://nronlineshop.pk/wp-content/uploads/2019/12/9-1.jpg",
                                "https://nronlineshop.pk/wp-content/uploads/2019/12/9-1.jpg",
                                "https://nronlineshop.pk/wp-content/uploads/2019/12/9-1.jpg",
                                "https://canary.contestimg.wish.com/api/webimage/5e5de4ff42f0d0323fc489e3-large.jpg?cache_buster=f32be6fd788a14ee26a522f01327c8f9",
                                "https://canary.contestimg.wish.com/api/webimage/5e5de4ff42f0d0323fc489e3-large.jpg?cache_buster=f32be6fd788a14ee26a522f01327c8f9",
                                "https://canary.contestimg.wish.com/api/webimage/5e5de4ff42f0d0323fc489e3-large.jpg?cache_buster=f32be6fd788a14ee26a522f01327c8f9"
                            ][index]}
                            name="Kid Dress"
                            price={price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

