import React, { useEffect } from 'react'
import Firebaseinit from './Firebaseinit'
const Sharebtn = (props) => {
    
    
  useEffect(() => {
    createKakaoButton(props)
  }, [])
  const createKakaoButton = (props) => {


      console.log(props.imgsrc)
      
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
   
       
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY)
       
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'list',
        headerTitle: '추천 술 결과!',
     headerLink: {
    mobileWebUrl: 'https://developers.kakao.com',
    webUrl: 'https://developers.kakao.com',
  },
        contents:
        [
            {
          title: props.title1,
          description: props.desc1,
          imageUrl: props.imgsrc1, // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        {
            title: props.title2,
            description: props.desc2,
            imageUrl: props.imgsrc2, // i.e. process.env.FETCH_URL + '/logo.png'
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: props.title3,
            description: props.desc3,
            imageUrl: props.imgsrc3, // i.e. process.env.FETCH_URL + '/logo.png'
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          
        ],
        buttons: [
          {
            title: '나도 해보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
         
        ],
      })
    }
  }
  return (

     
      <div className='kakao-share-button'
      id="kakao-link-btn">
        <div className='logogrid'>
          <img 
          style={{
            borderRadius:'10px 10px 10px 10px',
            marginTop:'15px'
          }}
          src={require('./icons/kakaologo.png').default}
          height={50}></img>
        <div className='sharetxt'>카카오톡으로 결과 공유하기</div>
        </div>
         
        
      </div>

  )
}
export default Sharebtn