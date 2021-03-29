import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import musicSlice, { Music, selectMusic, setMusic } from './slices/musicSlice';

declare var process : {
  env: {
    GET_URL: string
  }
}

function App() {

const dispatch = useDispatch();
const musicData = useSelector(selectMusic);


useEffect(() => {
    const data = async () => {
      await axios.get("http://localhost:5000/").then(res => {
        dispatch(setMusic(res.data));
      }).catch(err => {
        console.log(err);
      })
    }
    data();
    console.log((musicData.music as any[]));
    
},[])

  return (
    <div className="App">
      {(musicData.music as any[]).map((item: Music, index: number) => {
        <div>

        <div>{item.title}</div>
        <div>{item.genre}</div>
          </div>
      })}
    </div>
  );
}

export default App;
