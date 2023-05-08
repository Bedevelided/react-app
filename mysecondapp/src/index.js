// reactdom to manipulate the dom
import ReactDOM from 'react-dom/client';
import './index.css';
// importing the App component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // rendering the root component into the index.html file
    <App />
  
);


