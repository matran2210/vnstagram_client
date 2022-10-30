import React, { useState, createContext } from "react";
import { loadListPostService } from "../services/PostService";

  const ListPostContext = createContext();
  const ListPostContextProvider = () => {
    const initialState = {
        listPost: 'abc'
      };
      const [{ listPost }, setState] = useState(initialState);
    
      // const loadListPost = async () => {
      //   let res = await loadListPostService();
      //   setState((prevState) => ({
      //     ...prevState,
      //     listPost: res.data.data,
      //   }));
      // }


    return (
        <ListPostContext.Provider 
        value = {listPost}>
        </ListPostContext.Provider>
    )
}

export {ListPostContextProvider,ListPostContext}