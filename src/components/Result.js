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
import RecCard from './RecCard'
import sool1 from './sool1.jpg'
import axios from 'axios'
import sooldata from './sool_data.json'
import Last from './Last'
class Result extends Component
{
  constructor(props)
  {
    super(props)
    this.state={

      selectedcircle:0
    }
  }

  render(){
    var _postdata=this.props.postdata
    if(_postdata!='loading')
    {
      var _content=<motion.div
      initial={{x:-500}}
      animate={{x:0}}>
      <Grid
      container
      direction='row'
      justifyContent='center'
      >
      <div className='step'>
        <div>STEP3</div>
        </div>
      <h3 className='step_question'>추천</h3>
      </Grid>

      <div className='resultcol'>
        <div className='selectedcircle'> <RecCard 
        onClickCircle={function(){
          this.setState(
            {
                selectedcircle:0
            }
          )
        }.bind(this)}
        id={_postdata[0]} rank={1} imgsrc={require('./imgbox/'+(_postdata[0]+12)+'.jpg').default} imgname={sooldata[_postdata[0]]["상품명"]}></RecCard></div>
         
        <div className='selectedcircle'> <RecCard
        onClickCircle={function(){
          this.setState(
            {
                selectedcircle:1
            }
          )
        }.bind(this)}
         id={_postdata[1]} rank={2} imgsrc={require('./imgbox/'+(_postdata[1]+12)+'.jpg').default} imgname={sooldata[_postdata[1]]["상품명"]}></RecCard></div>
        <div className='selectedcircle'> <RecCard 
        onClickCircle={function(){
          this.setState(
            {
                selectedcircle:2
            }
          )
        }.bind(this)}
        id={_postdata[2]} rank={3} imgsrc={require('./imgbox/'+(_postdata[2]+12)+'.jpg').default} imgname={sooldata[_postdata[2]]["상품명"]}></RecCard></div>
         
      </div>
      <Last 
      _onGradepost={this.props.onGradepost}
      btnc='이 앱이 정식으로 출시 된다면 사용해볼 의향이 있나요?'
      ></Last>

      </motion.div>
    }


    

    return(

      <div className='container' >
      <Upbar _loginf={this.props.loginf}></Upbar>
      {_content}

      </div>
     
    )
    }
  
}
export default Result