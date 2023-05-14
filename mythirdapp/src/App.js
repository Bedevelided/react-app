// importing the stylesheets
import './App.css';
// importing in the Profile components
import Profile from "./profile/Profile";

function App(props) {
  return (
    <>
    {/* using the profile component and passing in props*/}
      <Profile fullName='Modibo Camara' profession={"Web designer"} bio={"I’m a designer who codes. I'm also the author of Laying the Foundations (a book about design systems, web design, and product design). I’ve worked internationally, in-house, and remotely on projects for leading brands, agencies, startups, and charities."}>
            {/* CHILD PROP */}
          <img src="./profilephoto.jpg" alt=""/>
      </Profile>
    </>
  );
}

export default App;
