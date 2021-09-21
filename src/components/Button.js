import React from 'react';
function Button(props){
    return(
        <a href="#">
            <img src={props.data.src} height={props.data.height} alt=
            'not ava'></img>
        </a>
    )
}
export default Button;