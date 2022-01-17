import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Upbar from './Upbar'
import ImageList  from './ImageList'
import Nextbtn from './Nextbtn'
import { motion } from 'framer-motion'
import Prevbtn from './Prevbtn'
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
      transition={{duration:0.5}}
      >
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
      <Prevbtn
      _pagelevel={1}
      onLoginpost={this.props._onLoginpost}
      onPrevpage={this.props._onPrevpage}></Prevbtn>
      </motion.div>
      </div>
     
    )
    }
  
}
export default Firstpage