import React,{Component} from 'react'
import Bar_com from './Bar_com'
import Tag from './Tag'
import Horibar from './Horibar'
import axios from 'axios'
import { bind } from 'lodash'
import sooldata from './sool_data.json'

class RecCard extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            
            imghover:0
        }
    }
    render()
    
    { 
        var _imgsrc=this.props.imgsrc
        var _imgname=this.props.imgname
        var _rank=this.props.rank
        var _id=this.props.id
        
        return(
            <div className='rankbox'>

                <div className='rankrowgrid'>
                <div className='zxc'>{_rank}위</div>
                <img src={_imgsrc}
                className='borderimage'
                
                >
                </img>
                <div className={this.state.imghover? 'hoverrank':'rank'}><div className='imgnamepad'>{_imgname}{sooldata[_id]['가격']}</div></div>
                <div className='btnhoverrange'
                onClick={function(){
                    this.props.onClickCircle()
                }.bind(this)}
                onMouseOver={function(){
                    this.setState(
                        {
                            imghover:1
                        }
                    )
                }.bind(this)}
                onMouseOut={function(){
                    this.setState(
                        {
                            imghover:0
                        }
                    )
                }.bind(this)}></div>

                </div>
                
                
                <div className='barrowgrid'>
                <Horibar id={_id}></Horibar>
                
                
                
                <div className='tagbox'>#tag1 #tag2 #tag3 #tag4 #tag5 #tag6 #tag7 #tag8</div>
                
                </div>
                <Bar_com id={_id}></Bar_com>
                

            </div>
           
  
           
       

        )
    }

}
export default RecCard