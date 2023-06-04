import React from 'react'
// hooks
import { useEffect , useState } from 'react'
// importing axios after installations
import axios from "axios"
// jsonplaceholder api
const url = "https://jsonplaceholder.typicode.com/users"

const UserList = () => {
// empty listOfUsers array
const [listOfUsers , setListOfUsers] = useState([])
  useEffect(() => {

    const fetchData = () => {
        // fetching the data width axios
        axios.get(url)
        .then(response => setListOfUsers(response.data))
        .catch(error => console.log("data not found;", error))
    }
    fetchData()

  },[])
  return <section>
  <h1>Jsonplaceholder users</h1>

  <ul className='users'>
    {listOfUsers.map((user) => {
      const {id , name ,email ,phone} = user
      return <li key={id}>
        
        <div>
          <h5>N: {name}</h5>
          <h5>E: {email}</h5>
          <h5>Ph: {phone}</h5>
          {/* <a href={website}>profile</a> */}
        </div>
      </li>
    })}
  </ul>
</section>;
}

export default UserList