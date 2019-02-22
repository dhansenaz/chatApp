import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui conatiner comments">
        <CommentDetail 
        author='Sam'
        timeAgo='Today at 4:45pm' 
        content='awesome'
        />
        <CommentDetail 
        author='Sue' 
        timeAgo='Today at 5:00pm' 
        content='are you gonna go?'
        />
        <CommentDetail 
        author='John' 
        timeAgo='Today at 2:00pm' 
        content='i dunno'
        />
        
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
