import React from 'react'
import WomenItem from '../WomenItems'
export default function index() {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-primary mb-3'>Women Collection</h1>
                        <div className='template'>
                            <WomenItem img="https://4.imimg.com/data4/EX/QR/MY-25863481/deededed-500x500.jpeg" name='womens dress' price={5000} />

                            <WomenItem img="https://4.imimg.com/data4/EX/QR/MY-25863481/deededed-500x500.jpeg" name='womens dress' price={5000} />

                            <WomenItem img="https://4.imimg.com/data4/EX/QR/MY-25863481/deededed-500x500.jpeg" price={5000} name='womens dress' />

                            <WomenItem img="https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg" price={10000} name='womens dress' />

                            <WomenItem img="https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg" price={10000} name='womens dress' />

                            <WomenItem img="https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg" price={10000} name='womens dress' />

                            <WomenItem img="https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg" price={15000} name='womens dress' />

                            <WomenItem img="https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg" price={15000} name='womens dress' />

                            <WomenItem img="https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg" price={15000} name='womens dress' />

                            <WomenItem img="https://www.dressyzone.com/cdn/shop/files/p16604-embroidered-net-maxi-dress_580x.jpg?v=1693466953" name='womens dress' price={20000} />

                            <WomenItem img="https://www.dressyzone.com/cdn/shop/files/p16604-embroidered-net-maxi-dress_580x.jpg?v=1693466953" name='womens dress' price={20000} />

                            <WomenItem img="https://www.dressyzone.com/cdn/shop/files/p16604-embroidered-net-maxi-dress_580x.jpg?v=1693466953" price={20000} name='womens dress' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}