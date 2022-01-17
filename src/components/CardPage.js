import React,{Component} from 'react'
class CardPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            isSelected: 0
        }
    }
    render()
    
    {   var k=1
        var _id=this.props.id;
        var tag=0
        var _currentnum=this.props.currentnum;
        var _imgsrc=this.props.imgsrc;
        var _imgname=this.props.imgname;
        var _type=this.props.type;
        console.log(_type)
        return(
         
            <div className={this.state.isSelected ? 'selectedcard' : 'normalcard'}
            onClick={function(){

                if(_currentnum<=2 && this.state.isSelected===0){
   
                        tag=1
                        this.props.onclickedplus();
              
                }
                if(_currentnum>2 && this.state.isSelected===0)
                {
                    alert('최대 3개까지 선택')
                }
                    if(this.state.isSelected==1)
                    {
                        tag=1
                        this.props.onclickedminus()
                    }
                if(tag==1)
                {
     
                k=this.state.isSelected==1 ? 0 : 1
 
                this.setState(
                    {
                        isSelected: k
                    }
                )
            }}
            .bind(this)}>
                <img src={_imgsrc}
                
                className={_type=='sool'?'soolimg':'anjooimg'}
                ></img>
                <div className='cardname'>
                    {_imgname}

                </div>

            </div>

        )
    }
}
export default CardPage