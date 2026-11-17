import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router"

function ProductList() {
    const [products, setProducts] = useState([])

    async function getProductList() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
        setProducts(response.data)

    }

    useEffect(() => {
        getProductList()
    }, [])

    return (
        <div>
            <h2>Product List</h2>
            {products.map((oneProduct) =>
                <div key={oneProduct._id}>
                    <br></br>
                    <p>Title: {oneProduct.title}</p>
                    <p>Description: {oneProduct.description}</p>
                    <p>Category: {oneProduct.category}</p>
                    <p>Price: {oneProduct.price}</p>
                    <p>Quantity: {oneProduct.quantity}</p>
                    <p>Created At: {oneProduct.createdAt}</p>
                    <p>Updated At: {oneProduct.updatedAt}</p>
                    <Link to={`/products/${oneProduct._id}`}>See Details</Link>


                </div>
            )}
        </div>
    )
}

export default ProductList