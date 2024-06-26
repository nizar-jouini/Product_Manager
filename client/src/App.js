import './App.css';
import DisplayOneProduct from './components/DisplayOneProduct';
import UpdateProduct from './components/updateProduct';
import Main from './views/Main';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className='mb-3 text-center'>Product Manager</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />  {/* redirect the path "/" to "/products" */}
        <Route element={<Main />} path='/products' default />  {/* adding the default makes this the default path */}
        <Route element={<DisplayOneProduct />} path='/products/:id' />  {/* The :id part of our path is a variable that we 
            must give value. */}
        <Route element={<UpdateProduct />} path='/products/edit/:id' />
      </Routes>
    </div>
  );
}

export default App;
