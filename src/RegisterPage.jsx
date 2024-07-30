import React from 'react'

function RegisterPage() {
  return (
    <div>
      <form align="center">
        <label htmlFor="uname">Username : </label>
        <input type="text" id="username-reg" placeholder='Enter User name'/><br />
        <label htmlFor="pswd">Password : </label>
        <input type="password" id='password-reg' placeholder='Enter password'/><br />
        <button type="submit" data-testid="register-submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
