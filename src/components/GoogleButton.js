import React from 'react';
import GoogleLogin from 'react-google-login';
import {Component} from 'react';
const clientId = "OAuth Web Client ID";
class GoogleButton extends Component{
    render(){
    const onSuccess = async(response) => {
    	alert(response.profileObj.name+'로 로그인 되었습니다');
        this.props.onNextpage()
        this.props.onLoginpost(response.profileObj)

        const { googleId, profileObj : { email, name } } = response;
        
        
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
            buttonText="구글계정으로 시작하기"
                clientId='48378889644-glbf51bd21drptffln3i645dt89a7bcu.apps.googleusercontent.com'
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}
}

export default GoogleButton