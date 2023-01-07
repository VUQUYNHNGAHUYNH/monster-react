import {Row, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';



const Shop = () => {
  const [ products, setProducts] = useState([])

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then ((response) => response.json())
    .then((data) => setProducts(data))
  },[])

  return (
    <>
    <h1 align='center' className='p-3'>Welcome to Monsters Store!</h1>
    <Row xs={2} md={4} className='g-4'>
        {products.map( (item, id) => {
            return (
                <Col key= {id} align='center'>
                    <ProductCard product = {item} />
                </Col>
            )
        })}
    </Row>
    </>
  )
}

export default Shop