import React from "react";
// import faker from 'faker';

export default props => {
  return (
    <div className="comment">
      <a className="avatar">
        <img alt="Avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};
