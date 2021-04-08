import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import musicSlice, { Music, selectMusic, setMusic } from './slices/musicSlice';
import TrackTile from './components/TrackTile';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import MusicDisplay from './components/MusicDisplay';
import AdminRoute from './components/AdminRoute';
import AddMusic from './components/AddMusic';
import AdminLogin from './components/AdminLogin';

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
},[])

const musicByGenre = () => {
  // TODO - add type to r
  return (musicData.music as [any]).reduce((r, it: Music) => {
      const group = it.genre;
      r[group] = r[group] || [];
      r[group].push(it);
      return r
  },{})
}

console.log(musicByGenre());
  return (
    <BrowserRouter>
    <Route  path="/"  component={MusicDisplay} exact  />
    <Route  path="/login"  component={AdminLogin} exact  />
    <Route  path="/admin"  component={AddMusic}  exact  />
     </BrowserRouter>
   
  );
}

export default App;
