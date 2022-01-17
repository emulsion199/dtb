import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Upbar from './Upbar'
import AnjooList  from './AnjooList'
import Nextbtn from './Nextbtn'
import { motion } from 'framer-motion'
import Prevbtn from './Prevbtn'

class Anjoopage extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      selectedidlist:[]
    }
  }

  render(){
    var rorl=null
    if(this.props._rorl==0)
    {
      rorl=1000
    }
    else
    {
      rorl=-1000
    }


    return(
      <div className='container' >
    
      <motion.div
      initial={{x:rorl}}
      animate={{x:0}}
      transition={{duration:0.5}}>
      <Grid
      container
      direction='row'
      justifyContent='center'
      >
      <div className='step'>
        <div>STEP7</div>
        </div>
      <h3 className='step_question'>선호하는 안주를 선택하세요(최대3개)</h3>
      </Grid>
      <AnjooList onChangelist={this.props._onSelectedCard}></AnjooList>
      <Nextbtn onDosuchange={this.props._onDosuchange} _pagelevel={1} onNextpage={this.props._onNextpage}></Nextbtn>
      <Prevbtn
      _pagelevel={1}
      onLoginpost={this.props._onLoginpost}
      onPrevpage={this.props._onPrevpage}></Prevbtn>
      </motion.div>
      </div>
     
    )
    }
  
}
export default Anjoopage