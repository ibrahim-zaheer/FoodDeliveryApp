import React,{useState} from 'react'

import { Link } from 'react-router-dom';
//we write this code to handle the changes made due to form and then posting it to link
export default function Signup() {
  const [creadentials, setcreadentials] = useState({name:'',email:"",password:'',geolocation:''})
  const handleSubmit=async(e)=>{
   e.preventDefault();
   const response = await fetch("http://localhost:5000/api/createUser",{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({name:creadentials.name,email:creadentials.email,password:creadentials.password,location:creadentials.geolocation})
   });
   const json = await response.json();
   console.log(json);
  if(!json.success){
    alert("Wrong Credentials! Enter Agains")
  }
  }

  const onChange=(event)=>{
setcreadentials({...creadentials,[event.target.name]:event.target.value})
  }
  return (
    <>
    <div className='container-md'>
    <form onSubmit={handleSubmit}>
{/* then we will update the form  to tell which input tag refer to which by adding value and name tag them we will
add onChange to make the form dynamic change */}
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control"  name='name' value={creadentials.name} onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={creadentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={creadentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='geolocation' value={creadentials.geolocation} onChange={onChange}/>
  </div>
 
  <button type="submit" className="m-3 btn btn-primary">Submit</button>
  <Link to="/Login" className="m-3 btn btn-danger">Already A User</Link>
</form>
</div>
    </>
  )
}
