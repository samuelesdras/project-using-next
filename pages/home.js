import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SideBar from '../components/sideBar';

import styles from '../styles/Home.module.css';

const URL_SERV = 'http://localhost:3004';

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`${URL_SERV}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  console.log(posts);

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.container}>Home page</div>
    </div>
  );
};

export default Home;
