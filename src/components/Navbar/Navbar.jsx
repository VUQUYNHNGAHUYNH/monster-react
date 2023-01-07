import { useContext, useState } from 'react'
import {Button, Navbar, Modal} from 'react-bootstrap'
import { CardContext } from '../../contexts/CardContext';
import CartItem from '../CartItem';


const NavbarComponent = () => {
    const {items} = useContext(CardContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const totalCount = items.reduce((total, item) => total + item.quantity, 0);
    const TotalCost = items.reduce((total, item) => total + item.quantity * (item.id * 10) , 0)

  return (
    <>
    <Navbar>
        <Navbar.Brand href='/'>Monsters Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}> Cart: ({totalCount} Items)</Button>
        </Navbar.Collapse>
    </Navbar>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Title></Modal.Title>
        <Modal.Body>
            {totalCount > 0 ?
            <>
                <h2>Items in your cart: </h2>
                {items.map( (item) => 
                    <CartItem key={item.id} cartItem={item}/>
                    )}

                <h2>Total: {TotalCost}</h2>
            </>
            :
            <h2>There is no items in your cart!</h2>
        } 

        </Modal.Body>
    </Modal>
    </>
    
  )
}

export default NavbarComponent