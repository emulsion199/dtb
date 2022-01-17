import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Upbar from './Upbar'
import { motion } from 'framer-motion'
import RecCard from './RecCard'
import sooldata from './sool_data.json'
import Sharebtn from './Sharebtn'
import imagelink from './imglink.json'
import tagdata from './tagdata.json'
import humtype from './type.json'
import Firebaseinit from './Firebaseinit'
import CircularProgress from '@material-ui/core/CircularProgress';

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
    var testtype=this.props._testtype
    console.log(testtype)
    var _content= 
    <div className='loading'>
    <CircularProgress
    color='rgb(11, 180, 101)'
    ></CircularProgress>
    </div>
    if(_postdata!='loading')
    {
      var _desc1=''
      var _desc2=''
      var _desc3=''
      for(var i=0;i<tagdata["tag"][_postdata[0]].length;i++)
      {
        _desc1=_desc1+tagdata["tag"][_postdata[0]][i]
      }
      for(var i=0;i<tagdata["tag"][_postdata[1]].length;i++)
      {
        _desc2=_desc2+tagdata["tag"][_postdata[1]][i]
      }
      for(var i=0;i<tagdata["tag"][_postdata[2]].length;i++)
      {
        _desc3=_desc3+tagdata["tag"][_postdata[2]][i]
      }
      
      _content=<motion.div
      initial={{x:-500}}
      animate={{x:0}}>
      <Grid
      container
      direction='row'
      justifyContent='center'
      >
     
      </Grid>

      <div className='resultrow'>
        <div style={{color:'white'}}>
         
        <img className='testimg' src={require('./icons/c'+(testtype+1)+'.png').default}></img>

        </div>
        <div style={{
          color:'white',
          fontSize:'20pt',
          paddingBottom:'20px',
          fontFamily:'Pretendard-Bold',
        }}>당신에게 어울리는 전통주는?&#127862;</div>
        <RecCard 
        
        id={_postdata[0]} rank={1} imgsrc={require('./imgbox/'+(_postdata[0]+12)+'.jpg').default} imgname={sooldata[_postdata[0]]["상품명"]}></RecCard>
        <RecCard 
        
        id={_postdata[1]} rank={2} imgsrc={require('./imgbox/'+(_postdata[1]+12)+'.jpg').default} imgname={sooldata[_postdata[1]]["상품명"]}></RecCard>
        <RecCard 
        
        id={_postdata[2]} rank={3} imgsrc={require('./imgbox/'+(_postdata[2]+12)+'.jpg').default} imgname={sooldata[_postdata[2]]["상품명"]}></RecCard>
       </div>
       <div className='fixedbtn'>
       <Sharebtn desc1={_desc1} title1={sooldata[_postdata[0]]['상품명']} imgsrc1={imagelink["링크"][_postdata[0]]}
      desc2={_desc2} title2={sooldata[_postdata[1]]['상품명']} imgsrc2={imagelink["링크"][_postdata[1]]}
      desc3={_desc3} title3={sooldata[_postdata[2]]['상품명']} imgsrc3={imagelink["링크"][_postdata[2]]}></Sharebtn>
         
       </div>  

      </motion.div>
    }
    
      
    


    

    return(

      <div className='container' >
     
      {_content}

      </div>
     
    )
    }
  
}
export default Result