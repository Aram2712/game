
import './App.scss';
import Home from './Pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Purchase from "./Pages/Purchase.jsx";
import Header from './Components/Header.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import Payment from './Pages/Payment.jsx';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/purchase' element={<Purchase />} />
                <Route path='/purchase/product' element={<ProductPage />} />
                <Route path='/purchase/payment' element={<Payment />} />
            </Routes>
        </div>
    )
}

export default App;