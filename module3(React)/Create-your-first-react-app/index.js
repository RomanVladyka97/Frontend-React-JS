import React from 'react';
import ReactDOM from 'react-dom/client';
import  './style.css';

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = {
  title: 'This test text for homework page',
  list: 'Here we have the list:',
  pictureLink: <img src="https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/fox_1200x675.jpg" alt="Fox" width="300"></img>,
  docsLink: <a href="https://uk.reactjs.org/docs/getting-started.html" rel="noreferrer" target="_blank">It is link to our docs</a>,
}
function Greet(props){
  return(
    <div className='greet'>
      <h1 style={{color: 'white',}}>{props.title}</h1>
      <br></br>
      <h2>{formatUserName('Sara', 'Connor')}</h2>
      <br></br>
      <h3>{formatUserName('John', 'Doe')}</h3>
      <p>{props.list}</p>
    </div>
  )
}

function Ul(props) {
  return(
    <ul>
      <li tab-index="_1">
        Just text here
      </li>
      <li>
        <span>Here we have text and link!</span>
        {props.docsLink}
      </li>
      <li>
        <span>And the picture!!!</span>
        {props.pictureLink}
      </li>
    </ul>
  )
}

function formatUserName(firstName, lastName){
  return `Welcome to website, ${firstName} ${lastName}`
}
function App(props){
  return (
    <div className='app'>
        <Greet title={props.title} greeting={props.greeting} list={props.list} />
        <Ul pictureLink={props.pictureLink} docsLink={props.docsLink}/>
      </div>
  )
}
root.render(<App {...data}/>, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
