import React, {Component} from 'react'
class Resbtn extends Component
{
    render()
    {
        var stateqlist=this.props.stateq_list
        var tempvar=-1
        return(
            <div className='nextbtn'
            onClick={function(){
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
                this.props.onPostdata()
            }
                
            

                }.bind(this)}>
            <div className='textinbox'>결과보기</div>
            </div>

        )
    }
}
export default Resbtn