
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import NavbarComponent from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout/Checkout';
import Shop from './pages/Shop/Shop';

const App = () => {
   
  return (
        <Container>
            <NavbarComponent />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Shop />} />
                    <Route path='checkout' element={<Checkout />}/>
                </Routes>
            </BrowserRouter>
        </Container>
  );
}

export default App;
