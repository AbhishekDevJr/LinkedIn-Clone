import React from 'react';

function HeaderOptions(props){
    return(
        <div className = "options-icons">
            {props.icon && <props.icon />}
            <p>{props.title}</p>
        </div>
    );
}

export default HeaderOptions;