import React,{Component} from 'react'
import Fab from '@material-ui/core/Fab'
class Btn extends Component
{
    render()
    {
        const Btncase=this.props.btnc
        return(
            <button className='btn' color='primary' aria-label='add'
>
            {Btncase}
         </button>

        )
    }
}
export default Btn