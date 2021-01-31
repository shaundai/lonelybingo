import React from 'react'

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        <img src={props.src}/>
    </span>
);

export default Emoji;


//https://unicode.org/emoji/charts/full-emoji-list.html#1f48b