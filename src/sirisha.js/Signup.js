import React,{useState} from 'react';
import axios from 'axios';

const Signup = () => {
const [cat,setData1] = useState({
    username:'',
    email:'',
    password:'',
    conPassword:'',
    submit:'',
}) 
const {username,email,password,conPassword} = cat;

const changeHandler = e =>{
    setData1({...cat,[e.target.name]:e.target.value})
}
const submitHandler = e =>{
    e.preventDefault();
    
//console.log(data1);
if (password !== conPassword){
   console.log ("incorrect password");
}else{
   axios.post('https://siri-ff1ad-default-rtdb.firebaseio.com/signup.json',cat).then(()=> alert("submitted"))  
}
}


  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" name="username" value={username} onChange={changeHandler} /><br />
            <input type="email" name="email" value={email} onChange={changeHandler} /><br />
            <input type="password" name="password" value={password} onChange={changeHandler} /><br />
            <input type="password" name="conPassword" value={conPassword} onChange={changeHandler} /><br />
            <input variant="dark" type="submit" name="submit" />
        </form>
    </div>
  )
}

export default Signup;