import React,{Component} from 'react'
import CardPage from './CardPage'
import 'C:/Users/user/hello/src/App.css'

import sooldata from './sool_data.json'
var sool=[
    {
        name:sooldata[541]["상품명"],
        id:1,
        key:i,
        desc:'술'+i
        },
        {
            name:sooldata[542]["상품명"],
            id:2,
            key:i,
            desc:'술'+i
        },
        {
            name:sooldata[543]["상품명"],
            id:3,
            key:i,
            desc:'술'+i
      },
      {
        name:sooldata[544]["상품명"],
        id:4,
        key:i,
        desc:'술'+i
    },
    {
        name:sooldata[545]["상품명"],
        id:5,
        key:i,
        desc:'술'+i
    },
    {
        name:sooldata[546]["상품명"],
        id:6,
        key:i,
        desc:'술'+i
    },
    {
        name:sooldata[547]["상품명"],
        id:7,
        key:i,
        desc:'술'+i
    },
    {
        name:sooldata[548]["상품명"],
        id:8,
        key:i,
        desc:'술'+i
    },
    {
        name:sooldata[549]["상품명"],
        id:9,
        key:i,
        desc:'술'+i
    },
    {
        name:sooldata[550]["상품명"],
        id:10,
        key:i,
        desc:'술'+i
    },
    {
        name:sooldata[551]["상품명"],
        id:11,
        key:i,
        desc:'술'+i
    },
]
var i=1
class AnjooList extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            selectednum:0,
            selectedlist: []

        }
    }
    
    
    
    render(){
        String.prototype.format = function() {
            var theString = this;
            
            for (var i = 0; i < arguments.length; i++) {
                var regExp = new RegExp('\\{' + i + '\\}', 'gm');
                theString = theString.replace(regExp, arguments[i]);       
            }
            
            return theString;
        }
       

        

  
        var _card= sool.map((item)=>
            <CardPage 
            type='anjoo'
            onclickedplus={function(){
                var k=this.state.selectedlist.concat(item.id)

                this.setState({selectednum:this.state.selectednum+1,selectedlist:k})
                this.props.onChangelist(k)
            }.bind(this)

            }
            onclickedminus={function(id_num){
                var list_a=this.state.selectedlist
                var i=0
                var k=null
                while(i<list_a.length)
                {
                    if(list_a[i]==item.id)
                    {
                        break
                    }
                    i+=1
                }
                k=[
                    ...this.state.selectedlist.slice(0, i),
                    ...this.state.selectedlist.slice(i + 1, this.state.selectedlist.length)
                  ]
                this.setState({selectednum:this.state.selectednum-1,
                selectedlist:k
                

            })
            this.props.onChangelist(k)
        }.bind(this)}        
            currentnum={this.state.selectednum} imgsrc={require('./imgbox/안주'+item.id+'.png').default} imgname={item.name} key={item.id}></CardPage>)
        return(

            <div className='box'>
                <div className='grid'>
                    {_card}
                </div>
            </div>

        )
    }
}
export default AnjooList