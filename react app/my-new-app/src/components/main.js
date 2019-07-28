import React from 'react'
import HelloWorld from './first.js'
import CreateAccount from './createAccount'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false};
  }
  // handleStateClick( newState ) {
  //       this.setState({
  //           editing: newState
  //       });
  //   }
  edit(){
  //  alert('edit');
   this.setState({editing: true});
  }
  login(){
    alert('login');
  }
  save(){
   this.setState({editing: false})
  }
  renderNormal(){
    return <div id="container">
      <div id="header">header</div>
      <div id='topnav'>nav
      <button onClick={this.edit} id='createAccount'>Create New Account</button>
      <button onClick={this.login} type="button" name="button">Login</button>
      </div>
      <div className="side">left</div>
      <div id="main">main
      <button>click me</button>
      </div>
      <div className="side">right</div>
      <div id='footer'>footer</div>
    </div>
  }
  renderForm(){
    return <div id="container">
      <div id="header">header</div>
      <div id='topnav'>nav
      </div>
      <div className="side">left</div>
      <div id="main">main
        <CreateAccount/>
      </div>
      <div className="side">right</div>
      <div id='footer'>footer</div>
    </div>
  }
  render() {
    if(this.state.editing){
      return this.renderForm();
    }else{
      return this.renderNormal();
    }
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
