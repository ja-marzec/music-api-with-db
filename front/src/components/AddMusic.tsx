import React from "react";
import { useDispatch } from "react-redux";
import { setMusic } from "../slices/musicSlice";

export default function AddMusic() {

    const dispatch = useDispatch();


    return(
        <div>
            Title
            <input onChange={(e) => dispatch(setMusic({key:"title", val: e.target.value}))}/>
            Author
            <input/>
            Genre
            <input/>
            Url
            <input/>
        </div>
    )
}