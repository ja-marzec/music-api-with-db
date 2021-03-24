import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { set } from 'mongoose';
import PersistentDrawerRight from './components/Header'


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await axios.get("http://localhost:5000");
        setData(result.data)
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
    console.log(data);
  }, [])


  const genres = () => {
      return  data.map(_ => {
        return (
          <div class="genre__card">
            <p>da</p>
          </div>
        )
      })

  }

  return (
    <div className="App">
      <PersistentDrawerRight />
      <div className="container">
        <h1> New Songs </h1>

        <div className="songs__container">
          {data.map(item => {
            return (
              <div class="card">
                <a href={item.url} className="tittle"> {item.title}</a>
              </div>
            )
          })}
        </div>

        <h1> Pick genre </h1>

        <div className="genre__container">
           {genres()}
        </div>
      </div>
    </div>

  );
}

export default App;
