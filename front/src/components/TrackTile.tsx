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
            {props.track.title}
        </div>
    )
}