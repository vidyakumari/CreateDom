import React from 'react';
import ReactDom from 'react-dom'
import './App.css';

class App extends React.Component{
  input = React.createRef();

  Container = () => React.createElement('div',{},
  [React.createElement('h1', {}, 'Contentlist'),
  React.createElement('ol',{},
  [
    React.createElement('li',{ onClick : this.handleInput },'Vidya Kumari'),
    React.createElement('li',{ onClick : this.handleInput },'Manikanta Rahul'),
    React.createElement('li',{ onClick : this.handleInput },'Papu Kumar'),
    React.createElement('li',{ onClick : this.handleInput },'Devesh Bhardwaj'),
    React.createElement('li',{ onClick : this.handleInput },'Sanjay Kakkar')
  ]),
  React.createElement('input',{type:'text', id:'input', ref: this.input},null)]
  )

  handleInput = (event) =>{
    this.input.current.focus();
    document.getElementById('input').value= event.target.innerText;
  }
  render(){
  return (
    <div className="App">
      {this.Container()}
    </div>
  );
}
}

ReactDom.render(
 App,
  document.getElementById('root')
);

export default App;
