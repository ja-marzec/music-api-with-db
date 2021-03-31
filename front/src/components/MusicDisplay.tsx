import React from "react";
import { useSelector } from "react-redux";
import { Music, selectMusic } from "../slices/musicSlice";
import TrackTile from "./TrackTile";

export default function MusicDisplay() {
    const musicData = useSelector(selectMusic);

    return (
        <div className="App">
        <section className="tile__section">
       <h1> Nowe utwory</h1> 
        {(musicData.music as [any]).map((item: Music, index: number) => {
          return (
            <div key={index} className="tile__wrapper">
           <TrackTile track={item} />
              </div>
          )
        })}
        </section>
      </div>
    )
}