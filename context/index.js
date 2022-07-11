import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyContext = React.createContext();
const URL_SERV = 'http://localhost:3004';

const MyProvider = (props) => {
  const [products, setProducts] = useState(0);
  const [number, setNumber] = useState(1);
  console.log('number no context', number);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `${URL_SERV}/posts?_page=${number}&_limit=10`
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [number]);

  return (
    <>
      <MyContext.Provider
        value={{ products: products, setNumber: setNumber, number: number }}
      >
        {props.children}
      </MyContext.Provider>
    </>
  );
};

export { MyContext, MyProvider };
