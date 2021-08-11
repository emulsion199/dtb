import React, {Component} from 'react'
class Qbox extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            selected:0,
        }
    }
    render()
    {   var k=0
        var _question=this.props.question;
        return(
            <div className={this.state.selected?'selectedqbox':'qbox'}


            onClick={function(){
                k=this.state.selected? 0:1
                this.setState(
                    {
                        selected:k,
                    }
                )
            }.bind(this)}
            >
            <div className='textinbox'>{_question}</div>
            </div>

        )
    }
}
export default Qbox