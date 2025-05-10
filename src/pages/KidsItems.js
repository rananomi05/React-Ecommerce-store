import React, { useContext } from 'react'
import { CartContext } from '../Context/Cart'

export default function KidsItems(props) {
    const Cart = useContext(CartContext)
    return (
        <>

            <div class="card" style={{ width: "350px" }}>
                <img src={props.img} style={{ height: "300px" }} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 className='text-center'>{props.name}</h4>
                    <h3 className='text-center'>{props.price}</h3>
                    <div className='text-center'>
                        <button className="btn btn-danger" onClick={() => Cart.setItems([...Cart.Items, { name: props.name, price: props.price }])}>Buy Now</button>  </div>
                </div>
            </div>
        </>
    )
}