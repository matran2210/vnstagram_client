// import logo from './logo.svg';
import './App.scss';
import AboutComponent from './Base/AboutComponent';
import LoginComponent from './Auth/LoginComponent';
import HomeComponent from './Base/HomeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParentComponent from './Base/ParentComponent';
import React, { useState, useEffect } from "react";
import { loadListPostService } from "../services/PostService";

function App() {

  const initialState = {
    listPost: null
  };
  const [{ listPost }, setState] = useState(initialState);

  const loadListPost = async () => {
    let res = await loadListPostService();
    // console.log(res.data.data);
    setState((prevState) => ({
      ...prevState,
      listPost: res.data.data,
    }));
  }

  useEffect(() => {
    loadListPost();

  }, []);



  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/' element={<ParentComponent />}>
          <Route path='/about' element={<AboutComponent />} />
          <Route index element={<HomeComponent listPost={listPost} />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
