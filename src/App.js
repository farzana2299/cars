
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Auth from './page/Auth';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Auth register></Auth>}></Route>
        <Route path='/login' element={<Auth></Auth>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
