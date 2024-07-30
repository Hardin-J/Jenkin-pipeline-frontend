import React from 'react'

function RegisterPage() {
  return (
    <div>
      <form align="center">
        <label role="Namelabel" htmlFor="uname">Username : </label>
        <input type="text" role='name' placeholder='Enter User name'/><br />
        <label role="Pswdlabel" htmlFor="pswd">Password : </label>
        <input type="password" role='password' placeholder='Enter password'/><br />
        <button type="submit" data-testid="login-submit">Login</button> <input type="checkbox" name='check-box' data-testid="checked" role="rememberName" /> <label htmlFor="check-box">Remember Me</label>
      </form>
    </div>
  )
}

export default RegisterPage
