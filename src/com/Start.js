import React,{Component} from 'react'
class Start extends Component
{
    render(){
        return(
            <div className="container">
            <div className="Title">
              <p>이런 술은 어때요</p>
            </div>
        <div><img src={require('./logo1.jpg').default}
        width='300'
        height='300'></img></div>
        <div><button className="button" onClick={function(e){
            e.preventDefault();
            this.props.onPage();
        }.bind(this)}>시작</button></div>
        </div>

        )
    }
}
export default Start;