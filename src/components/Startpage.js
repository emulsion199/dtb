import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Upbar from './Upbar'
import Container from'@material-ui/core/Container'
import ImageList  from './ImageList'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { directive } from '@babel/types'
import Fab from '@material-ui/core/Fab'
import NextIcon from '@material-ui/icons/NavigateNext'
import PrevIcon from '@material-ui/icons/NavigateBefore'
import Btn from './Btn'
import logo1 from './logo1.jpg'
import Nextbtn from './Nextbtn'
import { motion } from 'framer-motion'
import GoogleButton from './GoogleButton'
class Startpage extends Component
{

  render(){

    return(

      <div className='container' >
      <Upbar _page={0} _loginf={this.props.loginf}></Upbar>
      <motion.div
      initial={{x:-500}}
      animate={{x:0}}>
      <h1>대충 시작페이지</h1>
      <img src={logo1} className='logo'></img>
      <GoogleButton  
      onLoginpost={this.props._onLoginpost}
      onNextpage={this.props._onNextpage}></GoogleButton>
      </motion.div>
     </div>




    )
  }
}
export default Startpage