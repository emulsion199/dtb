import React, {Component} from 'react'
class Prevbtn extends Component
{
    render()
    {
        var pagelevel=this.props._pagelevel
        var stateqlist=this.props.stateq_list
        var tempvar=-1

        return(
            <div className='nextbtn'
            onClick={function(){
                
                    this.props.onPrevpage()
                }
                

                .bind(this)}>
            <div className='textinbox'>이전</div>
            </div>

        )
    }
}
export default Prevbtn