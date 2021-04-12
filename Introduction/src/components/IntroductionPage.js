import React from 'react'
import { withRouter } from 'react-router'

function IntroductionPage() {
    return (
        <div>
           <span>
               희망 취업 분야 : <b>Window Application Development</b>
           </span>
           
            <br />
            <br />
           <span>
            상세 소개 : 윈도우 어플리케이션 개발자는 개발 하는 거에 따라 완전히 달라질 수 있다.
                        그 중에서도 C#, WPF, XAML을 활용한 윈도우 응용 프로그램 개발을 하고 싶습니다.
           </span>
        </div>
    )
}

export default withRouter(IntroductionPage)
