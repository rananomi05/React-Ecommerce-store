import React, { useContext } from 'react'
import { CartContext } from "../../Context/Cart"
export default function Cart() {

    const cart = useContext(CartContext)
    let total = cart?.Items?.reduce((p, c) => p + c.price, 0);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>Your Cart</h1>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cart?.Items?.map((item, index) =>
                                    (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                        </tr>


                                    )

                                    )

                                }
                                <h3>Total price:{total}</h3>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}