import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import musicSlice, { addMusic, deleteItemFromDisplay, resetDataToSend, selectMusic, setDataToSend, setMusic } from "../slices/musicSlice";

export default function AddMusic() {

    const dispatch = useDispatch();
    const music = useSelector(selectMusic);
     interface Music  {
        title: string,
        author: string,
        genre: string,
        url: string
    }

   enum MusicKeys {
       Title = "title",
       Author =  "author",
       Genre = "genre",
       Url = "url"
   }

   async function sendNewSong(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
       e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/", music.musicToPost);
           if(res.status === 200) {
            dispatch(addMusic(res.data));
            dispatch(resetDataToSend())
           };
        }catch(err) {
            console.log("DUUUPA");
}   
    }

    function createFields() {
      const musicKeys = Object.entries(music.musicToPost);
    
      return musicKeys.map(([keyName] ) => {
          return (
                  <div>
                      <label htmlFor={keyName} >{keyName.toUpperCase()}</label>
                      <br/>
                      {/* @ts-ignore */}
                      <input id="keyName" value={music.musicToPost[keyName]} required onChange={(e) => dispatch(setDataToSend({keyName: keyName , val: e.target.value}))} />
                  </div>
          )
      })
    }

    async function deleteItem(e: React.MouseEvent, id: string) {
        e.preventDefault();
        try {
    const res = await axios.delete(`http://localhost:5000/${id}`)
           if(res.status === 200) {
                dispatch(deleteItemFromDisplay(id))
           }
        }
        catch(err) {
            console.log("error");
        }
    }

    function avaibaleMusic() {
    return  (music.music as [any]).map((item:any) => {
                 return (
                    <div>
                    <div>
                        {item.title}
                    </div>
                    <button onClick={(e) => deleteItem(e, item._id)}>Delete</button>
                    </div>
                )
        })
    }

    return(
        <div>
            <form>
            {createFields()}
            <button type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendNewSong(e)}>Send</button> 
            </form>
            {avaibaleMusic()}
        </div>
    )
}