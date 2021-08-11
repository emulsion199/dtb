import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {Component} from 'react';
const clientId = "OAuth Web Client ID";
class GoogleButton extends Component{
    render(){
        function signOut() {
            var auth2 = this.gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
              console.log('User signed out.');
            });
          }
   

    return(
  
        <div>
            <GoogleLogout
        clientId='48378889644-glbf51bd21drptffln3i645dt89a7bcu.apps.googleusercontent.com'
      buttonText="Logout"
      onLogoutSuccess={signOut}
    >
    </GoogleLogout>
        </div>
    )
}
}

export default GoogleButton