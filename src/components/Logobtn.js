import React, {Component} from 'react'
class Logobtn extends Component
{
    render()
    {
        var pagelevel=this.props._pagelevel
        var stateqlist=this.props.stateq_list
        var tempvar=-1

        return(
            <div>
            <img className='logobtn'
            src={require('./icons/logo1.jpg').default}
            onClick={function(){
                
                    this.props.onNextpage()
                }
                

                .bind(this)}>
            
            </img>
            <div style={{
                color:'white',
                fontSize:'15pt',
                fontFamily: 'Pretendard-Bold'

            }}>눌러서 시작하기</div>
            </div>
        )
    }
}
export default Logobtn