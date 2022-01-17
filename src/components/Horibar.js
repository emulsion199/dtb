import React,{Component} from 'react';

import sooldata from './sool_data.json'


class Horibar extends Component
{
  render()
  {
    var percentage = Number(sooldata[this.props.id]['도수'])
    return(
      <div>
        도수
      </div>
      
    

  
    )
  }
}
export default Horibar