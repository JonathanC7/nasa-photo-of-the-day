import React from 'react';

function Title(props){
    console.log(props)
    return(
        <div className = 'card'>
            <h1>{props.data.title}</h1>
        </div>
    )
}

export default Title;