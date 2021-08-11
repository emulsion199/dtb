import React,{Component} from 'react'
import Firstpage from './components/Firstpage'
import Startpage from './components/Startpage'
import Secpage from './components/Secpage'
import { motion } from 'framer-motion'
import Result from './components/Result'
import sooldata from './components/sool_data.json'
import axios from 'axios'
import Thirdpage from './components/Thirdpage'
var selecteddosu=0
var postdosu=0
var posttaste=0
var posttansan=0
var postcond=0
var postbob=0
var postanjoo=0
var email=null
var profile=null
var id=null

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      login_inform:['로그인 해주세요','https://www.fabriziorocca.it/guide/wp-content/uploads/2018/03/thumb_14400082930User.png','asd'],
      data:'loading',
      page:0,
      selectedcardid:[
      ],
      
    }
  }
  onNextpage=function(){
    this.setState(
      {
        page:this.state.page+1,
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
  


  render(){
    var idlist=this.state.selectedcardid
    var tastelist=[]
    for(var idx=0;idx<idlist.length;idx+=1)
    {
      tastelist=tastelist.concat(sooldata[idlist[idx]+528])
    }
   
    
    
  





    var _page=null
    if(this.state.page===1)
    {
      _page=
      
      <Firstpage
      loginf={this.state.login_inform}
      _onNextpage={function(){
        if(this.state.selectedcardid==0)
        {
          alert('1개 이상 선택해주세요!')
        }
        else{
        this.setState(
          {
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
      _onNextpage={this.onNextpage}></Startpage>


    }
    else if(this.state.page===3)
    {
      _page=<Thirdpage
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'1%~10%'
        },
        {
            issel: 0,
            q_id: 2,
            q_name:'10%~20%'
        },
        {
            issel: 0,
            q_id: 3,
            q_name:'20%~30%'
        },
        {
          issel: 0,
          q_id: 4,
          q_name:'30%~40%'
      },
      {
        issel: 0,
        q_id: 5,
        q_name:'40%~'
    }
      ] }
      _question='선호하는 도수를 골라주세요!'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu
        console.log(selecteddosu)

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
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'과일 향'
        },
        {
            issel: 0,
            q_id: 2,
            q_name:'곡물 향'
        },
        {
            issel: 0,
            q_id: 3,
            q_name:'달달한 향'
        },
        {
          issel: 0,
          q_id: 4,
          q_name:'자연의 향'
      },
      {
        issel: 0,
        q_id: 5,
        q_name:'약재 향'
    }
      ] }
      _question='선호하는 향을 골라주세요!'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu
        

      for(var i=0;i<selecteddosu.length;i++)
      {
        if(selecteddosu[i]['issel']==1)
        {
          posttaste=i
        }
      }
      console.log(posttaste)
      
    }}
     ></Secpage>

    }
    else if(this.state.page===5) 
    {
      _page=
      <Thirdpage
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'혼자 마실 때'
        },
        {
            issel: 0,
            q_id: 2,
            q_name:'파티'
        },
        {
          issel: 0,
          q_id: 3,
          q_name:'친한 친구 집에 놀러갈 때'
      },
      {
        issel: 0,
        q_id: 4,
        q_name:'여럿이서 마실 때'
    },
      
      ] }
      _question='언제 마시고 싶으신가요?'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu
        console.log(selecteddosu)

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

      else if(this.state.page===4 ) 
    {
      _page=
      <Secpage
      loginf={this.state.login_inform}
      _page_level={this.state.page}
      _q_list={[
        {
            issel: 0,
            q_id: 1,
            q_name:'많음'
        },
        {
          issel: 0,
          q_id: 2,
          q_name:'중간'
      },
        {
            issel: 0,
            q_id: 3,
            q_name:'없음'
        },
       
      ] }
      _question='탄산의 포함 여부를 골라주세요!'
      _onNextpage={this.onNextpage}
      _onDosuchange={function(dosu){selecteddosu=dosu
        console.log(selecteddosu)

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
  
  else if(this.state.page===6) 
  {
    _page=
    <Secpage
    loginf={this.state.login_inform}
    _page_level={this.state.page}
    _q_list={[
      {
          issel: 0,
          q_id: 1,
          q_name:'식전주'
      },
      {
          issel: 0,
          q_id: 2,
          q_name:'식중주'
      },
      {
        issel: 0,
        q_id: 3,
        q_name:'식후주'
    },
    
    ] }
    _question='밥을 드셨나요?'
    _onNextpage={this.onNextpage}
    _onDosuchange={function(dosu){selecteddosu=dosu
      console.log(selecteddosu)

    for(var i=0;i<selecteddosu.length;i++)
    {
      if(selecteddosu[i]['issel']==1)
      {
        postbob=i
      }
    }
    
  }}
   ></Secpage>
}
else if(this.state.page===7) 
{
  _page=
  <Thirdpage
  loginf={this.state.login_inform}
  _page_level={this.state.page}
  _q_list={[
    {
        issel: 0,
        q_id: 1,
        q_name:'마른 안주'
    },
    {
        issel: 0,
        q_id: 2,
        q_name:'해산물 회'
    },
    {
      issel: 0,
      q_id: 3,
      q_name:'익힌 해산물'
  },
  {
    issel: 0,
    q_id: 4,
    q_name:'고기'
},
{
  issel: 0,
  q_id: 5,
  q_name:'샐러드'
},
{
  issel: 0,
  q_id: 6,
  q_name:'과일'
},
{
  issel: 0,
  q_id: 7,
  q_name:'국물 요리'
},
{
  issel: 0,
  q_id: 8,
  q_name:'디저트류'
},
{
  issel: 0,
  q_id: 9,
  q_name:'면요리'
},
{
  issel: 0,
  q_id: 10,
  q_name:'전, 튀김, 구이'
},
{
  issel: 0,
  q_id: 11,
  q_name:'양식'
},
  
  ] }
  _question='어떤 안주를 선호하시나요?'
  _onNextpage={this.onNextpage}
 
  _onDosuchange={function(dosu){selecteddosu=dosu
    console.log(selecteddosu)

  for(var i=0;i<selecteddosu.length;i++)
  {
    if(selecteddosu[i]['issel']==1)
    {
      postanjoo=i
    }
  }
  
}}
_onPostdata={function(){
  axios.post('http://10.64.128.166:5000/home',
{
  "인기주류":tastelist,
  "도수":postdosu,
  "맛":posttaste,
  "탄산":posttansan,
  "상황":postcond,
  "밥":postbob,
  "안주":postanjoo,
})
.then(function (response) {
  console.log(response.data)
    this.setState({

      data: response.data['result'],

    })
}.bind(this))
}.bind(this)
}
 ></Thirdpage>







  }

    else if(this.state.page===8)
    {
 
      _page=<Result 
      loginf={this.state.login_inform}
      postdata={this.state.data}

      onGradepost={function(){
        axios.post('http://10.64.128.166:5000/grade',
{
  "이메일":email,
  "점수":1
})
.then(function (response) {
  console.log(response)
  if(response.data['result']==1)
  {
        alert('평가 감사합니다!')
  }
  else{
    alert('이미 평가 하셨습니다!')
  }

}
)
}
}
    ></Result>
    }

    return(
      <div>
      {_page}
      </div>
    )
  }
}
export default App
