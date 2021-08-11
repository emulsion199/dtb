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
import { Typography } from '@material-ui/core'
import Qbox from './Qbox'
import { motion } from 'framer-motion'
import Resbtn from './Resbtn'
class Secpage extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      q_list:this.props._q_list
    
  }
}

  render(){

    var question=this.props._question
    var pagelevel=this.props._page_level
    var nxt_btn=null
    if(pagelevel==7)
    {
      nxt_btn=<Resbtn 
      onDosuchange={function(){
      this.props._onDosuchange(this.state.q_list)}.bind(this)}
      onNextpage={this.props._onNextpage}
      onPostdata={this.props._onPostdata}></Resbtn>
    }
    else
    {
      nxt_btn=<Nextbtn onNextpage={this.props._onNextpage}
      _pagelevel={2}
      onDosuchange={function(){

        this.props._onDosuchange(this.state.q_list)}.bind(this)}></Nextbtn>
    }
    


    return(
      <div className='container' >
      <Upbar _loginf={this.props.loginf}></Upbar>
      <motion.div
      initial={{x:-500}}
      animate={{x:0}}>
      <Grid
      container
      direction='row'
      justifyContent='center'
      >
      <div className='step'>
        <div>STEP{pagelevel}</div>
        </div>
      <h3 className='step_question'>{question}</h3>
      </Grid>
      {this.state.q_list.map((q_item)=>
      <Qbox 
      question={q_item.q_name}
      onOtherUp={function(){
      
        var copystate=Array.from(this.state.q_list)
        copystate[q_item.q_id-1]['issel']= copystate[q_item.q_id-1]['issel']? 0:1    
        for(var i=1; i<=this.state.q_list.length;i++)
        {
          if(q_item.q_id!=i)
          {
            copystate[i-1]['issel']=0

          }
        }
        this.setState(
          {
            q_list:copystate 
          }
        )
        

      return q_item.issel
      }.bind(this)}
      _id={q_item.q_id}
      _q_list={this.state.q_list}
      ></Qbox>
      )}
      {nxt_btn}
    
     
      </motion.div>
      </div>
     
    )
    }
  
}
export default Secpage