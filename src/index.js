import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="ui">
        <ApprovalCard className="approval card">
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45pm"
            content="awesome"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Sue"
            timeAgo="Today at 5:00pm"
            content="are you gonna go?"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="John"
            timeAgo="Today at 2:00pm"
            content="i dunno"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
