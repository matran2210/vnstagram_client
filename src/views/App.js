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

  const reloadListPost = (postId, action, newPost) => {
    switch (action) {
      case 'DELETE':
        let temp = [ ...listPost ];
        temp = temp.filter(item => item.id !== postId);
        setState((prevState) => ({
          ...prevState,
          listPost: temp,
        }));
        break;
      case 'EDIT':
        let temp1 = [ ...listPost ]; //phải để lại là kiểu mảng thì mới dùng findIndex đc
        let ObjIndex = temp1.findIndex(item => item.id === postId);
        temp1[ObjIndex].title = newPost.title;
        temp1[ObjIndex].content = newPost.content;
        setState((prevState) => ({
          ...prevState,
          listPost: temp1,
        }));
        break;
        case 'ADD':
          loadListPost();
          break;
      default:
        return listPost;
    }
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
          {/* note* phải thêm điều kiện này nếu không khi HomeComponent được render thì listPost lại chưa có */}
          {listPost &&
            <Route index element={
              <HomeComponent
                listPost={listPost}
                reloadListPost={reloadListPost}
              />
            } />
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
