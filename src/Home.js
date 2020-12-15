import React, { useState, useEffect } from "react";
import Loader from 'react-loader-spinner'
import axios from "axios";
import "./Home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    getData();
  }, []);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async() => {
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    try {
      let res = await axios.get(url);
      let data = res.data;
      setLoading(false);
      setPosts(data); 
    } catch (error) {
      console.log("Error: ", error);
      setLoading(false);
      setPosts([]);
    }
  };
const historyFunc = useHistory();
  return (
    <div style={{ fontSize: 30 }}>
      <h1 className="home-main-title">Home</h1>
      <div className="loading-parent">
      <Loader
      visible={loading}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      //  timeout={3000} //3 secs
      />
      </div>
          <div className="loading-parent">
    <button className="about-button" onClick={()=>{historyFunc.push("/about")}}>About</button>
    </div>
      {posts.map(val => (
        <div style={{ fontSize: 20 }}>
          <ul>
            <li>
              <div style={{ fontWeight: "bold" }}>{val.title}</div>
              <div>{val.body}</div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
