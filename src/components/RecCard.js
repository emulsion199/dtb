import React,{Component} from 'react'
import Bar_com from './Bar_com'

import Horibar from './Horibar'
import sooldata from './sool_data.json'
import tagdata from './tagdata.json'
import Firebaseinit from './Firebaseinit'

class RecCard extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            
            imghover:0,
            heart:'uheart',
            hnumber:-1,
            clickflag:0,
        }
    }
    render()
    
    { 
        var _imgsrc=this.props.imgsrc
        var _imgname=this.props.imgname
        var _rank=this.props.rank
        var _id=this.props.id
        var anjoo=''
        var t
        var anjooflag=0
        if(this.state.hnumber==-1)
        {
            const dbref = Firebaseinit.database().ref('/heartdir');
            dbref.once('value').then((snapshot) => {
            this.setState(
          {
            hnumber:Number(snapshot.val()['heart'][_id].length)-1
          }
        )
        }
        )
      }
        

        for(var i=0;i<tagdata["tag"][_id].length;i++)
        {
            t=tagdata["tag"][_id][i]
            console.log(t)
            if(t=='#고기류'||t=='#샐러드'||t=='#전,튀김,구이'||t=='#면요리'||t=='#양식'||t=='#마른안주'||t=='#회'||t=='#생선찜'||t=='#과일'||t=='#국물요리'||t=='#디저트류')
            {
                anjoo=anjoo.concat(' '+t.substring(1,t.length))
            }
        }
        if(anjoo!='')
        {
            anjooflag=<div style={{
                color:'rgb(117,80,52)',
                margin:'10px',
                fontFamily:'Pretendard-Bold',
                paddingTop:'0px'

                
            
        }}
            >어울리는 안주:{anjoo}</div>
        }
        else
        {
            anjooflag=<div></div>
        }
        
        
        return(
            
            <div className='rankbox'>
                <div
                style={{
                    color:'white',
                    fontSize:'20px',
                    fontFamily: 'Pretendard-Bold',
                    fontStyle: 'bold'
                    
                }}
                >{sooldata[_id]['상품명']}</div>
                
                    <div className='alchbox'>

                        <div className='imgover'>
                        
                        
                        
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
                        
                        <Bar_com id={_id}
                        
                        ></Bar_com>
                        </div>
                        
                

             
                
                
                <div className='barrowgrid'>
                <div style={{
                    background:'white',
                    width:'96%',
                    height:'0.5px',
                    marginTop: '20px'
                    }}></div>
            
                <div style={{
                    color:'white',
                    margin:'30px'

                
            }}>{sooldata[_id]['상품명']}, 어떤 술일까?</div>
            
                
                

                <div className='taggrid'>
                    {tagdata["tag"][_id].map((tags)=>
                    <div className='tagbox'>{tags}</div>)}
                    
                </div>
                {anjooflag}
                
                

                    

                
                
                </div>
                <div className='recbtngrid'>
                <div
                className='shoppingbtn'
                onClick={function()
                {
                    var dbref = Firebaseinit.database().ref('/prdir');
                        dbref.once('value').then((snapshot) => {
                              var hnumber=Number(snapshot.val()['pr'])
                      
                              dbref.set({
                                pr:hnumber+1
                              })
                            });




                    alert('만약 찾으시는 전통주가 검색되지 않는다면, 아직 판매 입고가 되지 않은 술이라 그렇습니다. 이용자분의 니즈를 해당 양조장 측에 전달하여 향후 입고될 수 있도록 하겠습니다')
                    window.open('https://msearch.shopping.naver.com/search/all?query='+sooldata[_id]['상품명'],'_blank')
                }}>
                    <div className='logogrid2'>
                        
                        <img 
                        style={{
                            height:'50px',
                            borderRadius:'10px',
                            marginTop:'-13px'
                        }}
                        src={require('./icons/naverlogo.png').default}></img>
                        <div>지금 구매하러 가기!</div>
                    </div>
                    </div>
                    <div className='heartbtn'
                onClick=
                {
                
                    function()
                    {
                        if(this.state.clickflag==0)
                        { var dbref = Firebaseinit.database().ref('/heartdir');
                        dbref.once('value').then((snapshot) => {

                              var hnumber=Number((snapshot.val()['heart'][_id]).length)
                              var hlist=(snapshot.val()['heart'])
                              hlist[_id].push(this.props.sdata)
                              
                              dbref.set({
                                heart:hlist
                              });
                              
                              
                            }
                            )
                                        this.setState(
                                            {
                                                heart:'sheart',
                                                hnumber:this.state.hnumber+1,
                                                clickflag:1
                                            }
                                        )}
                       
                    }.bind(this)
                }
               
                
                >
                    <div
                    style={{marginTop:'5px'}}>
                    <img src={require('./icons/'+this.state.heart+'.png').default} height={25}></img>
                    <div style=
                    {{
                        fontSize:"12pt",
                        color:'black',
                    }}>{this.state.hnumber}</div>
                    </div>
                    </div>
                    </div>
                
                

            </div>
           
  
           
       

        )
    }

}
export default RecCard