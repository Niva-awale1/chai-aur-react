import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function MyApp(){
  return(
    <div>
      <h2>Custom App</h2>
    </div>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit google link</a>
)

const AnotherUser = 'Hello'
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to open google',
  AnotherUser

)
ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
);