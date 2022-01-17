import React,{Component} from 'react'
import 'C:/Users/user/hello/src/App.css'
class Upbar extends Component
{
  render()
  {
    var loginf=this.props._loginf
    console.log(loginf)
    return(
      <div className='upbar'>
        <h10>이런 술은 어때요</h10>
  
      </div>
    )
  }

}
export default Upbar