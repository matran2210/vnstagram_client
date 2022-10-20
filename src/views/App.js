// import logo from './logo.svg';
import './App.scss';
import AboutComponent from './Base/AboutComponent';
import LoginComponent from './Auth/LoginComponent';
import HomeComponent from './Base/HomeComponent';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ParentComponent from './Base/ParentComponent';
import React, { useState,useEffect } from "react";
import { loadListPostService } from "../services/PostService";

function App() {

  const initialState = {
    listPost: []
  };
  const [{ listPost }, setState] = useState(initialState);

  const loadListPost = async () => {
    let listPost = await loadListPostService();
    console.log(listPost);
  }

  useEffect(() => {
    loadListPost();
  }, []);



  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<LoginComponent />}/>
          <Route path='/' element={<ParentComponent />}>
              <Route path='/about' element={<AboutComponent />} />
              <Route index element={<HomeComponent />}/>
          </Route>
          
      </Routes>
    </BrowserRouter>
  );
}
export default App;
