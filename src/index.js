import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div class="ui comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        content="First comment"
        date={faker.date.recent().toLocaleString()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        content="Second comment"
        date={faker.date.recent().toLocaleString()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        content="Third comment"
        date={faker.date.recent().toLocaleString()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
