import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Upbar from './Upbar'
import Nextbtn from './Nextbtn'

import Qbox from './Qbox'
import { motion } from 'framer-motion'
import Resbtn from './Resbtn'
import Prevbtn from './Prevbtn'
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
    var rorl=null
    if(this.props._rorl==0)
    {
      rorl=1000
    }
    else
    {
      rorl=-1000
    }

    var question=this.props._question
    var pagelevel=this.props._page_level
    var nxt_btn=null
    if(pagelevel==10)
    {
      nxt_btn=<Resbtn 
      stateq_list={this.state.q_list}
      onDosuchange={function(){
      this.props._onDosuchange(this.state.q_list)}.bind(this)}
      onNextpage={this.props._onNextpage}
      onPostdata={this.props._onPostdata}></Resbtn>
    }
    else
    {
      nxt_btn=<Nextbtn onNextpage={this.props._onNextpage}
      stateq_list={this.state.q_list}
      _pagelevel={2}
      onDosuchange={function(){

        this.props._onDosuchange(this.state.q_list)}.bind(this)}></Nextbtn>
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
      <Prevbtn
      _pagelevel={1}
      onLoginpost={this.props._onLoginpost}
      onPrevpage={this.props._onPrevpage}></Prevbtn>
    
     
      </motion.div>
      </div>
     
    )
    }
  
}
export default Secpage