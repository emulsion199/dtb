import React,{Component} from 'react';

import sooldata from './sool_data.json'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

class Horibar extends Component
{
  render()
  {var percentage = Number(sooldata[this.props.id]['도수'])
    return(
      <div className='circlebarbox'>
        <div className='alchdo'>{percentage}%</div>
      <div className='circlebar'>
        
      <CircularProgressbar
  value={percentage*2}
  
  styles={buildStyles({

    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',



    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 10,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',
    
    // Colors
    pathColor: `rgba(50, 180, 101,1)`,
    textColor: '#f88',
    trailColor: 'rgba(50, 180, 101,0.3)',
    backgroundColor: 'rgba(50, 180, 101,1)',
  })}
/>
</div>
</div>
  
    )
  }
}
export default Horibar