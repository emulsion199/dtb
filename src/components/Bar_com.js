import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import sooldata from './sool_data.json'

class Bar_com extends Component {
  render(){
  var _id=this.props.id
  const options = {
    animation: {
      duration: 0
  },
    plugins:{   
      legend: {
        display: false
              },
           },
      
   tooltips: {
      enabled: false
   },
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true
    },
    y: {
        stacked: true
    }
     }
 }

 let data ={ 
   datasets:[
   
     
    {
     label: '단맛',
     barThickness: 10,
       data :[Number(sooldata[this.props.id]['단맛'])],
       backgroundColor: [
        'rgba(41, 130, 41, 1)',
      ],
     },
     {
       label: '신맛',
       barThickness: 10,
       data:  [Number(sooldata[this.props.id]['신맛'])],
       backgroundColor: [
        'rgba(50, 160, 50, 1)',
      ], 
     },
     {
      label: '청량감',
      barThickness: 10,
      data:  [Number(sooldata[this.props.id]['청량감'])] ,
      backgroundColor: [
        'rgba(60, 190, 60, 1)',
     ],
    },
    {
      label: '바디감',
      barThickness: 10,
      data:  [Number(sooldata[this.props.id]['바디감'])] ,
      backgroundColor: [
        'rgba(75, 220, 70, 1)',
     ],
    },
    {
      label: '향',
      barThickness: 10,
      data:  [Number(sooldata[this.props.id]['향'])] ,
      backgroundColor: [
        'rgba(90, 230, 90, 1',
     ],
    }],
   labels:['맛']
 }
  return (
    
    <div className='chartdo'>
        <Bar data={data} options={options}  />
    </div>
  );
}
}
export default Bar_com;