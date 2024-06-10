import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import ViewallFriend from './components/ViewallFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddFriend/>}/>
    <Route path='/view' element={<ViewallFriend/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
