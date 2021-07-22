import React,{Component} from 'react'
class TOD extends Component{

    render()
    {
        var i=0
        var lists=[]
        var data=this.props.data
        while(i<data.length)
            {
                lists.push(
                <li><a href={"/content/"+data[i].id} 
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault()
                    this.props.onChangePage(e.target.dataset.id)
                }.bind(this)}>{data[i].title}</a></li>)
                i+=1
    }
      return(
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      )
    }
  }
export default TOD