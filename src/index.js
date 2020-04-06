import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class BaseTemplate extends React.Component {
  render() {
    return (
      <div className="base-page">
        <div className="page-info">
          <h1> Anthony Tsui </h1>
          <h1>Work In Progress for my Personal Site</h1>  
          <p className="temp-info"> I have no idea what I'm doing</p>
        </div>
      </div>
    );
  }
}

// ========================================
document.body.classList.add('bg');

ReactDOM.render(
  <BaseTemplate />,
  document.getElementById('root')
);
