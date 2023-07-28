// Books Context

import { createContext, useContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);

  const APP_KEY = process.env.REACT_APP_apiKey;

  console.log(APP_KEY);

  const getData = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;
    try {
      const { data } = await axios(url);
    } catch (error) {}
  };

  const values = { myData, setMyData };
  return (
    <BooksContext.Provider value={{ values }}>{children}</BooksContext.Provider>
  );
};

export default BooksContextProvider;
