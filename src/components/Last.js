import React,{Component} from 'react'

class Last extends Component
{
    render()
    {
        const Btncase=this.props.btnc
        return(
            <div className='postbtn' onClick={function(){
                this.props._onGradepost()}.bind(this)}>
            {Btncase}
         </div>

        )
    }
}
export default Last