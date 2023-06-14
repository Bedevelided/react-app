import React from 'react';
import { useParams ,BrowserRouter as Router , Link , Route , Routes } from 'react-router-dom';
const User = () =>{
        const params = useParams();
        console.log(params)
        return (
            <div><h1>User component {params.id} {params.name}</h1></div>
        )
}
const List = () => {
  let users = [
    {name : "anil" , id : 1},
    {name : "peter" , id : 2},
    {name : "bruce" , id : 3},
    {name : "tony" , id : 4}
  ]
  return (
    <div className='App'>
        {/* <Router> */}
        <h1>React Dynamic Routing</h1>

        {users.map(item => (
            <div><Link to={"/user/"+item.id +"/"+ item.name}>{item.name}</Link></div>
        ))}
        <Routes>
            <Route path='/user/:id/:name' element={<User/>}></Route>
        </Routes>
        {/* </Router> */}
    </div>
  )
}

export default List