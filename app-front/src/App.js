import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import { set } from 'mongoose';



function App() {

  const [data, setData] = useState([]);

  useEffect(async () => {
    try{
      const result = await axios.get("http://localhost:5000");
      setData(result.data)
    }catch(err) {
      console.log(err);
    }
    },[])

    useEffect(() => {
      console.log(data);
      },[data])

  return (
    <div className="App">
        {data.map(item => {
          return (
            <div>{item.title}</div>
          )
        })}
    </div>
  );
}

export default App;
