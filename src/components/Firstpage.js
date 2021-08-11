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
import Nextbtn from './Nextbtn'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
class Firstpage extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      selectedidlist:[]
    }
  }

  render(){


    return(
      <div className='container' >
      <Upbar _page={1} _loginf={this.props.loginf}></Upbar>
      <motion.div
      initial={{x:-500}}
      animate={{x:0}}>
      <Grid
      container
      direction='row'
      justifyContent='center'
      >
      <div className='step'>
        <div>STEP1</div>
        </div>
      <h3 className='step_question'>선호하는 주류를 선택하세요(최대3개)</h3>
      </Grid>
      <ImageList onChangelist={this.props._onSelectedCard}></ImageList>
      <Nextbtn _pagelevel={1} onNextpage={this.props._onNextpage}></Nextbtn>
      </motion.div>
      </div>
     
    )
    }
  
}
export default Firstpage