
import './App.css';
// importing in the components from the component/profile folders
import ProfilePhoto from './component/profile/ProfilePhoto';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';

// the root app component
function App() {
  return (
    // returning of JSX
    <div className="App">
          {/* using the components */}
          <ProfilePhoto />
       <div className="App_info">
          {/* using the components */}
          <FullName />
          <Address />
       </div>
      
    </div>
  );
}
// default export of the App component
export default App;
