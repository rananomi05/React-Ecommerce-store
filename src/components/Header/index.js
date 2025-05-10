import React from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
export default function index() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/men" className="nav-link active" aria-current="page" href="#">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/woman" className="nav-link active" aria-current="page" href="#">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/kids" className="nav-link active" aria-current="page" href="#">Kids</Link>
                            </li>
                        </ul>
                        <Link to="/basket"><h3 style={{ marginRight: "50px" }}><TiShoppingCart /></h3></Link>
                        <form className="d-flex">
                            <Link to="/login"><button className="btn btn-outline-danger" type="submit">Login</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}