import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import 'C:/Users/user/hello/src/App.css'
import Logout from './Logout'
class Upbar extends Component
{
  render()
  {
    var loginf=this.props._loginf
    console.log(loginf)
    return(
      <div className='upbar'>
        <h10>이런 술은 어때요</h10>
        <h10>{loginf[0]}</h10>
        <img height={25}
        width={25}
        src={loginf[1]}></img>
      </div>
    )
  }

}
export default Upbar