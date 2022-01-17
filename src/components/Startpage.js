import React,{Component} from 'react'
import Upbar from './Upbar'
import logo1 from './logo1.jpg'
import Nextbtn from './Nextbtn'
import { motion } from 'framer-motion'
import Sharebtn from './Sharebtn'
import Prevbtn from './Prevbtn'
import Logobtn from './Logobtn'
import Firebaseinit from './Firebaseinit'

class Startpage extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      user:-1
    }
  }
  

  

  render(){
    console.log(process.env)
   
   
    
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
      
      
        <motion.div initial ={{x:rorl}} animate={{x:0}} transition={{duration : 0.5}}>
        <div className = "new_top">
            <div className="first_container">
              <div className="first_first_container">
                <div className="headline">이런 술은</div>
                <div className="headline">어때요?</div>
                <div className = "emptybox"></div>
                <div className = "sublinebox">
                  <div className = "subline">당신은 평소 어떤 술을 좋아하시나요?</div>
                  <div className = "subline">당신은 술자리에서 어떤 사람인가요?</div>
                </div>
                <div className = "sublinebox">
                  <div className = "subline"><text className = "littlebold">나만의 술자리 유형</text>에 따라</div>
                  <div className = "subline"><text className = "littlebold">꼭 맞는 전통주</text>를 찾아드립니다.</div>
                </div>
              </div>
            </div>
   <div className="Second_container">
              <div className="empty"></div>
              <div className="imgbox">
                <Logobtn btnname='눌러서 시작하기' onNextpage={this.props._onNextpage}></Logobtn>
              </div>
              <div className="countbox">
                지금까지 나만의 술 찾은 사람 {this.props.userlen}명
              </div>
             
            </div>
          </div>
      </motion.div>
      
     </div>



    )
  }
}
export default Startpage