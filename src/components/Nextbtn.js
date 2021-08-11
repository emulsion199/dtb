import React, {Component} from 'react'
class Nextbtn extends Component
{
    render()
    {
        var pagelevel=this.props._pagelevel
        return(
            <div className='nextbtn'
            onClick={function(){
                if(pagelevel!=1)
                {
       
                    this.props.onDosuchange()
                }
                this.props.onNextpage()

                }.bind(this)}>
            <div className='textinbox'>다음</div>
            </div>

        )
    }
}
export default Nextbtn