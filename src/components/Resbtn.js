import React, {Component} from 'react'
class Resbtn extends Component
{
    render()
    {
        return(
            <div className='nextbtn'
            onClick={function(){
                this.props.onDosuchange()
                this.props.onNextpage()
                this.props.onPostdata()
                }.bind(this)}>
            <div className='textinbox'>결과보기</div>
            </div>

        )
    }
}
export default Resbtn