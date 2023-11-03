import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className="log-in">
        <form>
            <label>user name</label>
            <input type="text"></input>
            <label>Email</label>
          <input type="email"></input>
          <label>Password</label>
       <button>Ragister</button>
        </form>
      
    </div>
  )
}

export default Login