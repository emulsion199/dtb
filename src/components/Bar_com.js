import React,{Component} from 'react';
import sooldata from './sool_data.json'

class Bar_com extends Component {
  render(){
  var _id=this.props.id
  var h=13
  var w=60
 
  return (
    
    <div className='tastegrid'>
      <div>단맛</div>
      <img src={require('./icons/a'+Math.round(sooldata[_id]["단맛"])+'.png').default}
      style={{
        paddingTop:'7px',
        
        width:w,
        height:h,
        objectPosition:'left',
        
      }
    }
      ></img>
      <div>신맛</div>
      <img src={require('./icons/a'+Math.round(sooldata[_id]["신맛"])+'.png').default}
      style={{
        paddingTop:'7px',
        width:w,
        height:h,
        objectPosition:'left',
        
      }
    }
      ></img>
      <div>청량감</div>
      <img src={require('./icons/a'+Math.round(sooldata[_id]["청량감"])+'.png').default}
      style={{
        paddingTop:'7px',
        width:w,
        height:h,
        objectPosition:'left',
       
      }
    }
      ></img>
      <div>바디감</div>
      <img src={require('./icons/a'+Math.round(sooldata[_id]["바디감"])+'.png').default}
      style={{
        paddingTop:'7px',
        width:w,
        height:h,
        objectPosition:'left',
        
      }
    }
      ></img>
      <div>향</div>
      <img src={require('./icons/a'+Math.round(sooldata[_id]["향"])+'.png').default}
      style={{
        paddingTop:'7px',
        width:w,
        height:h,
        objectPosition:'left',
        
      }
    }
      ></img>
    <div>도수</div>
      <div
      style={{
        paddingRight:'80px',
        color:'rgb(117,80,52)',
        fontFamily: 'Pretendard-Bold',
        fontStyle: 'bold',
      
      }}
      >{sooldata[_id]['도수']}%</div>
    </div>
  );
}
}
export default Bar_com;