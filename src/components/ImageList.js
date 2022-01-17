import React,{Component} from 'react'
import CardPage from './CardPage'
import 'C:/Users/user/hello/src/App.css'
import sooldata from './sool_data.json'
var sool=[]
var i=1
while(i<=12)
{
    sool.push(
        {name:sooldata[i+528]["상품명"],
        id:i,
        key:i,
        desc:'술'+i})
    i+=1
}
class ImageList extends Component
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
            type='sool'
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
            currentnum={this.state.selectednum} imgsrc={require('./imgbox/'+item.id+'.jpg').default} imgname={item.name} key={item.id}></CardPage>)
        return(

            <div className='box'>
                <div className='grid'>
                    {_card}
                </div>
            </div>

        )
    }
}
export default ImageList