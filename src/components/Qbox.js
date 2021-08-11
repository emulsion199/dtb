import React, {Component} from 'react'
class Qbox extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
            {
                issel:0
            }
        
    }

    
    render()
    {   var k=0
        var selected=this.props._q_list
        var _question=this.props.question;
        var id=this.props._id;
        return(
            <div className={selected[id-1]['issel']?'selectedqbox':'qbox'}


            onClick={function(){
                  this.props.onOtherUp()
                
            }.bind(this)}
            >
            <div className='textinbox'>{_question}</div>
            </div>

        )
    }
}
export default Qbox