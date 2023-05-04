
// importing bootstrap from node modules
import 'bootstrap/dist/css/bootstrap.min.css';
// importing the local css stylesheet
import './App.css';
// importing differents components from the component files
import Input from './components/Input';
import Header from './components/Header';
import Checkbox from './components/Checkbox';
import  Button  from './components/Button';
import Footer from './components/Footer';
// this function creates the App component which contains the form element
function App() {

  return (
    <div className="App">
          <main className="form-signin w-100 m-auto">
           {/* form element */}
            <form>
                <Header/>
                <Input type={"email"} placeholder={"name@example.com"} id={"floatingInput"} labelValue={"Email address"} />
                <Input type={"password"} placeholder={"password"} id={"floatingPassword"} labelValue={"Password"} />
                <Checkbox />
                <Button />
                <Footer />  
            </form>
          </main>
    </div>
  );
}
// default export of the App components

export default App;
