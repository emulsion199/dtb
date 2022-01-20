import React,{Component} from 'react'
import Firstpage from './components/Firstpage'
import Startpage from './components/Startpage'
import Secpage from './components/Secpage'
import { motion } from 'framer-motion'
import Result from './components/Result'
import sooldata from './components/sool_data.json'
import axios from 'axios'
import Firebaseinit from './components/Firebaseinit'

import Thirdpage from './components/Thirdpage'
import Anjoopage from './components/Anjoopage'
var selecteddosu=-1
var postdosu=-1
var posttaste=-1
var posttansan=-1
var postcond=-1
var postcond2=-1
var postbob=-1
var email=null
var profile=null
var id=null
var postimp=-1
var postimp2=-1
var testtype=0

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      user:-1,
      login_inform:['로그인 해주세요','https://www.fabriziorocca.it/guide/wp-content/uploads/2018/03/thumb_14400082930User.png','asd'],
      data:'loading',
      page:0,
      selectedcardid2:[],
      selectedcardid:[
      ],
      rorl:0,
      
    }
  }
  onNextpage=function(){
    this.setState(
      {
        rorl:0,
        page:this.state.page+1,
        selectedcardid:this.state.selectedcardid,
      }
    )
  }.bind(this)
  onPrevpage=function(){
    this.setState(
      {
        rorl:1,
        page:this.state.page-1,
        selectedcardid:this.state.selectedcardid,
      }
    )
  }.bind(this)

  onSelectedCard=function(_list){
    this.setState(
      {
        selectedcardid:_list
      }
    )}.bind(this)
    onSelectedCard2=function(_list){
      this.setState(
        {
          selectedcardid2:_list
        }
      )}.bind(this)


  render(){
    console.log(process.env)
    if(this.state.user==-1)
    {
    const dbref = Firebaseinit.database().ref('/userdir');
    dbref.once('value').then((snapshot) => {
     
        
        this.setState(
          {
            user:Number(snapshot.val()['user'])
          }
        )
        }
        )
      }

    var idlist=this.state.selectedcardid
    var tastelist=[]
    for(var idx=0;idx<idlist.length;idx+=1)
    {
      tastelist=tastelist.concat(sooldata[idlist[idx]+528])
    }
   var userlen=0
    
    
  





    var _page=null
    if(this.state.page===1)
    {
      _page=
      
      <Firstpage
      _rorl={this.state.rorl}
      loginf={this.state.login_inform}
      _onPrevpage={this.onPrevpage}
      _onNextpage={function(){
        if(this.state.selectedcardid==0)
        {
          alert('1개 이상 선택해주세요!')
        }
        else{
        this.setState(
          {
            rorl:0,
            page:this.state.page+1,
            selectedcardid:this.state.selectedcardid,
          }
        )
        }
      }.bind(this)}
      _onSelectedCard={this.onSelectedCard}
      ></Firstpage>

    }
    else if(this.state.page===0)
    {
      _page=

      <Startpage
      userlen={this.state.user}
      _rorl={this.state.rorl}
      loginf={this.state.login_inform}
      _onLoginpost={function(inf){
         email=inf['email']
         id=inf['givenName']
         profile=inf['imageUrl']
        this.setState(
          {
            login_inform:[email,profile,id],
            data:this.state.data,
            page:this.state.page,
            selectedcardid:this.state.selectedcardid,
          }
        )
    
        }.bind(this)}
      _onNextpage={this.onNextpage}
      _onPrevpage={this.onPrevpage}></Startpage>


    }
    else if(this.state.page===3)
    {
      _page=<Thirdpage
      _rorl={this.state.rorl}
      _onPrevpage={this.onPrevpage}
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'저도수(1%~10%)'
        },
        {
            issel: 0,
            q_id: 2,
            q_name:'중도수(11%~20%)'
        },
        {
            issel: 0,
            q_id: 3,
            q_name:'고도수(21%~)'
        },
        
      ] }
      _question='어떤 도수의 술을 좋아하시나요?'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu



      for(var i=0;i<selecteddosu.length;i++)
      {
        if(selecteddosu[i]['issel']==1)
        {
          postdosu=i
        }
      }
      
    }}
      
  
  ></Thirdpage>



    }
    else if(this.state.page===2)
    {
      _page=

      <Secpage
      _rorl={this.state.rorl}
      _onPrevpage={this.onPrevpage}
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'과일향(사과, 포도, 복숭아등)'
        },
        {
            issel: 0,
            q_id: 2,
            q_name:'곡물향(누룩, 햅쌀, 밤등)'
        },
        {
            issel: 0,
            q_id: 3,
            q_name:'달달한 향(캐러멜, 꿀, 코코넛등)'
        },
        {
          issel: 0,
          q_id: 4,
          q_name:'자연의 향(솔향, 꽃향, 풀향등)'
      },
      {
        issel: 0,
        q_id: 5,
        q_name:'약재향(인삼, 더덕등)'
    },
    {
      issel: 0,
      q_id: 6,
      q_name:'상관 없음'
  },
      ] }
      _question='어떤 향을 좋아하시나요?'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu
        

      for(var i=0;i<selecteddosu.length;i++)
      {
        if(selecteddosu[i]['issel']==1)
        {
          posttaste=i
        }
      }
      
    }}
     ></Secpage>

    }
    else if(this.state.page===5) 
    {
      _page=
      <Thirdpage
      _rorl={this.state.rorl}
      _onPrevpage={this.onPrevpage}
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'혼자가 편해, 혼술'
        },
        {
          issel: 0,
          q_id: 2,
          q_name:'둘이나 셋, 소소한 술자리'
      },
        {
            issel: 0,
            q_id: 3,
            q_name:'여럿이 모여, 떼술'
        },
      
      ] }
      _question='주로 누구와 술을 마시나요?'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu
 

      for(var i=0;i<selecteddosu.length;i++)
      {
        if(selecteddosu[i]['issel']==1)
        {
          postcond=i
        }
      }
      
    }}
     ></Thirdpage>
    }
    else if(this.state.page===6) 
    {
      _page=
      <Secpage
      _rorl={this.state.rorl}
      _onPrevpage={this.onPrevpage}
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'집이 편해, 홈술'
        },
        {
            issel: 0,
            q_id: 2,
            q_name:'분위기에 맞는 장소찾아, 밖술'
        },
      
      ] }
      _question='주로 어디서 술을 마시나요?'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu


      for(var i=0;i<selecteddosu.length;i++)
      {
        if(selecteddosu[i]['issel']==1)
        {
          postcond2=i
        }
      }
      
    }}
     ></Secpage>


    }

      else if(this.state.page===4 ) 
    {
      _page=
      <Secpage
      _rorl={this.state.rorl}
      _onPrevpage={this.onPrevpage}
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'탄산 없음'
        },
        {
          issel: 0,
          q_id: 2,
          q_name:'탄산 중간'
      },
        {
            issel: 0,
            q_id: 3,
            q_name:'탄산 많음'
        },
       
      ] }
      _question='어느 정도의 탄산을 선호하세요?'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu
    

      for(var i=0;i<selecteddosu.length;i++)
      {
        if(selecteddosu[i]['issel']==1)
        {
          posttansan=i
        }
      }
      
    }}
     ></Secpage>
    }
  
  else if(this.state.page===8) 
  {
    _page=
    <Secpage
    _rorl={this.state.rorl}
    _onPrevpage={this.onPrevpage}
    /*_onPostdata={function(){
      axios.post('http://192.168.0.4:5000/home',
    {
      "인기주류":tastelist,
      "도수":postdosu,
      "맛":posttaste,
      "탄산":posttansan,
      "상황":postcond,
      "밥":postbob,
    })
    .then(function (response) {
      console.log(response.data)
        this.setState({
    
          data: response.data['result'],
    
        })
    }.bind(this))
    }.bind(this)
    } */
    loginf={this.state.login_inform}
    _page_level={this.state.page}
    _q_list={[
      {
          issel: 0,
          q_id: 1,
          q_name:'맛, 향 술 자체'
      },
      {
          issel: 0,
          q_id: 2,
          q_name:'안주 우선'
      },
    
    
    ] }
    _question='술을 고를 때 무엇이 더 중요한가요?'
    _onNextpage={this.onNextpage}
    _onDosuchange={function(dosu){selecteddosu=dosu



    for(var i=0;i<selecteddosu.length;i++)
    {
      if(selecteddosu[i]['issel']==1)
      {
        postimp=i
      }
    }
    
  }}
   ></Secpage>
  }
  else if(this.state.page===9) 
  {
    _page=
    <Thirdpage
    _rorl={this.state.rorl}
    _onPrevpage={this.onPrevpage}
    
    loginf={this.state.login_inform}
    _page_level={this.state.page}
    _q_list={[
      {
          issel: 0,
          q_id: 1,
          q_name:'마시던 것만 마시는 편'
      },
      {
          issel: 0,
          q_id: 2,
          q_name:'독특하고 새로운 걸 도전하는 편'
      },
      {
        issel: 0,
        q_id: 3,
        q_name:'전문가의 Pick을 신뢰하는 편'
    },
    {
      issel: 0,
      q_id: 4,
      q_name:'가격을 중시하는 편'
  },
  {
    issel: 0,
    q_id: 5,
    q_name:'예쁜 패키징에 끌리는 편'
},
    
    ] }
    _question='나는 술을 고를 때 어떤 사람인가요?'
    _onNextpage={this.onNextpage}
    _onDosuchange={function(dosu){selecteddosu=dosu


    for(var i=0;i<selecteddosu.length;i++)
    {
      if(selecteddosu[i]['issel']==1)
      {
        postimp2=i
      }
    }
    
  }}
  _onPostdata={function(){
    var dbref = Firebaseinit.database().ref('/userdir');
    dbref.once('value').then((snapshot) => {
          userlen=Number(snapshot.val()['user'])
          dbref.set({
            user:userlen+1
          });
          
        }
        )


        
  



    if(postcond==0)
      if(postcond2==0)
        if(postimp==0)
          if(postimp2==0 || postimp2==2 || postimp2==0)
            testtype=0
          else
            testtype=1
        else
          if(postimp2==0 || postimp2==2 || postimp2==0)
            testtype=2
          else
            testtype=3
      else
        if(postimp==0)
          if(postimp2==0 || postimp2==2 || postimp2==0)
            testtype=4
          else
            testtype=5
        else
          if(postimp2==0 || postimp2==2 || postimp2==0)
            testtype=6
          else
            testtype=7
    else
      if(postcond2==0)
        if(postimp==0)
          if(postimp2==0 || postimp2==2 || postimp2==0)
            testtype=8
          else
            testtype=9
        else
          if(postimp2==0 || postimp2==2 || postimp2==0)
            testtype=10
          else
            testtype=11
      else
        if(postimp==0)
          if(postimp2==0 || postimp2==2 || postimp2==0)
            testtype=12
          else
            testtype=13
        else
          if(postimp2==0 || postimp2==2 || postimp2==0)
            testtype=14
          else
            testtype=15
      
      


    


    axios.post('https://projw.pythonanywhere.com//home',
  {
    "주종":tastelist,
    "도수":postdosu,
    "맛":posttaste,
    "탄산":posttansan,
    "상황":postcond,
    "밥":postbob,
    "안주":this.state.selectedcardid2,
    "중요도1":postimp,
    "중요도2":postimp2,
  })
  .then(function (response) {
    console.log(response.data['result'])
   
      this.setState({
  
        data: response.data['result'],
        
  
      })
  }.bind(this))
  }.bind(this)
  }
   ></Thirdpage>
}
else if(this.state.page===7) 
{
  _page=
  <Anjoopage
  _rorl={this.state.rorl}
  _onPrevpage={this.onPrevpage}
  _onDosuchange={function(){
    console.log(1)
  }}
  
loginf={this.state.login_inform}
      _onNextpage={function(){
        if(this.state.selectedcardid2==0)
        {
          alert('1개 이상 선택해주세요!')
        }
        else{
        this.setState(
          {
            page:this.state.page+1,
            selectedcardid2:this.state.selectedcardid2,
          }
        )
        }
      }.bind(this)}
      _onSelectedCard={this.onSelectedCard2}
/*_onPostdata={function(){
  axios.post('http://10.64.133.29:5000/home',
{
  "인기주류":tastelist,
  "도수":postdosu,
  "맛":posttaste,
  "탄산":posttansan,
  "상황":postcond,
  "밥":postbob,
  "안주":this.state.selectedcardid2
})
.then(function (response) {
  console.log(response.data)
    this.setState({

      data: response.data['result'],

    })
}.bind(this))
}.bind(this)
} */
 ></Anjoopage> 
}

    else if(this.state.page===10)
    {
 
      _page=<Result 
      _testtype={testtype}
      loginf={this.state.login_inform}
      postdata={this.state.data}
      sdata={[
        tastelist,
        postdosu,
        posttaste,
        posttansan,
        postcond,
        postbob,
        this.state.selectedcardid2,
        postimp,
        postimp2,
      ]}

     
    ></Result>
    }

    return(
      <div className='root'>
    {_page}
      
      </div>
      
      
      
    )
  }
}
export default App
