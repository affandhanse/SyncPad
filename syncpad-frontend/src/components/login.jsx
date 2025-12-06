import React, {useState} from 'react'

const Login = () => {

  const [isLoginMode, setIsLoginMode] = useState(true)
  return (
    <div>
      {/* Header Section */}
      <div>
        <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>
      </div>

      {/* Tab controls */}
      <div>
        <button onClick={()=> setIsLoginMode(true)}> 
             Login 
        </button> 
        <button onClick={()=> setIsLoginMode(false)}> 
             Sign Up 
        </button>
        <div> </div>
      </div>

      {/* Form Section */}
      <form>
        {!isLoginMode && (
          <input type="text" placeholder="Username" required/>
          )}

          {/* shared input */}
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>

          {/* signup field */}
          {!isLoginMode && (
          <input type="password" placeholder="Confirm Password" required/>
          )}


      </form>


    </div>
  )
}

export default Login