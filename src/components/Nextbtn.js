import React, {Component} from 'react'
class Nextbtn extends Component
{
    render()
    {
        var pagelevel=this.props._pagelevel
        var stateqlist=this.props.stateq_list
        var tempvar=-1

        return(
            <div className='nextbtn'
            onClick={function(){
                console.log(stateqlist)
                if(pagelevel!=1)
                {
                    this.props.onDosuchange()
                    for(var i=0;i<stateqlist.length;i++)
                {
                    if(stateqlist[i]['issel']==1)
                {
                tempvar=i
                }
                }
                if(tempvar==-1)
                {
                    alert('답을 정해주세요')
                }
                else{
                    this.props.onNextpage()
                }
                    
                }
                else{
                    this.props.onNextpage()
                }
                

                }.bind(this)}>
            <div className='textinbox'>다음</div>
            </div>

        )
    }
}
export default Nextbtn