import { useContext } from 'react'
import {Card, Button} from 'react-bootstrap'
import { CardContext } from '../contexts/CardContext'

const ProductCard = ({product}) => {
    const {name, id} = product;
    const {addOneToCart} = useContext(CardContext)
    
  return (
        <Card className='m-3 p-2' style = {{background: '#d3d3d3'}}>
            <Card.Img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} />
            <Card.Title>{name}</Card.Title>
            <Card.Text>Price: ${id*10}</Card.Text>
            <Button onClick={()=> addOneToCart(product)} variant="primary">Add to Cart</Button>
        </Card>
  )
}

export default ProductCard