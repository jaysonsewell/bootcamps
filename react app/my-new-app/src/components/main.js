import React from 'react'

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
    <div id="container">
        <div class="head">
          <img id="sail" src="free-sailboat-download-png.jpeg" alt="Sailboat"></img>
        </div>
        <div class="head">
          <h1 >Web Name</h1>
        </div>
        <div class="head">
          <p>- Your handy tool for mapping _____ efficiently</p>
        </div>
      <div id='topnav'>
         <div id="container">
             <div class="treeType" id="chico">- Chico</div>
             <div class="treeType" id="redding">- Redding</div>
             <div class="treeType">- ....</div>
             <div class="treeType">- more</div>
             <div>
               <h3>Red: Sat, </h3>
               <h3>Blue: Sat & Sun</h3>
             </div>
         </div>
      </div>
      <div class="side">left
      </div>
      <div id="main">
        <div id="map"></div>
      </div>
      <div class="side">right</div>
      <div id='footer'>footer</div>
    </div>
    )
  }
}

// const Main = () => (
//   <div id="container">
//     <div id="header">header</div>
//     <div id='topnav'>nav
//       <button id='createAccount'>Create New Account</button>
//       <button type="button" name="button">Login</button>
//     </div>
//     <div className="side">left</div>
//     <div id="main">main
//       <button>click me</button>
//     </div>
//     <div className="side">right</div>
//     <div id='footer'>footer</div>
//   </div>
// );
export default Main;
