import React from "react"

type MusicTile = {
    title: string,
    author: string,
    genre: string,
    url: string
  }
export default function TrackTile(props: {track: MusicTile}) :JSX.Element {
    return (
        <div className="tile">
            <a href={props.track.url} target="_blank">
            {props.track.title}
            </a>
        </div>
    )
}