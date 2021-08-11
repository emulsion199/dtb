import React,{Component} from 'react'
import Fab from '@material-ui/core/Fab'
class Last extends Component
{
    render()
    {
        const Btncase=this.props.btnc
        return(
            <div className='postbtn' 
>
            {Btncase}
         </div>

        )
    }
}
export default Last