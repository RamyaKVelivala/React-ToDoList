import React from 'react';
import ReactDOM from 'react-dom';
import ReactToDo from './react-todo';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(ReactToDo),
    document.getElementById('reactToDoMain')
  );
});
