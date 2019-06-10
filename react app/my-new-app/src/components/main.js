import React from 'react'

const Main = () => (
  <div id="container">
    <div id="header">header</div>
    <div id='topnav'>nav
      <button id='createAccount'>Create New Account</button>
      <button type="button" name="button">Login</button>
    </div>
    <div class="side">left</div>
    <div id="main">main
      <form id="myAccountForm" action="get">
        <input type="text" name="userName" />
        <input type="password" name="password" />
        <input id='sub' type="submit" />
      </form>
    </div>
    <div class="side">right</div>
    <div id='footer'>footer</div>
  </div>
);

export default Main;
