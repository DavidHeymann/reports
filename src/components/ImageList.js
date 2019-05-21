import React from "react";

export default (props) => {
    return (
        <div>
            {props.images.map(({description, id, urls}) => {
                return <img key={id} alt={description} src={urls.regular}/>
            })}
        </div>
    );
}  