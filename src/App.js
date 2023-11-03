import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import SignIn from './Views/signIn';
import SignUp from './Views/signUp';
import Home from './Pages/Home';
import Error404 from './Pages/error404';
import InputProduct from './components/Forms/InputProduct';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/create-product' element = {<InputProduct/>}/>
      <Route path='/sesion' element = {<SignIn/>}/>
      <Route path='/register' element = {<SignUp/>}/>
      <Route path='*' element = {<Error404/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
