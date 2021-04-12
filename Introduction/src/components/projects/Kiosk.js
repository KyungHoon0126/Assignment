import React from 'react'
import KioskHomeSrc from '../../Assets/kiosk_home.JPG';

function Kiosk() {
    return (
        <div>
            <h1>Kiosk</h1>

            <img src={KioskHomeSrc}
                 alt="image"
                 style={{ width: "30%" }}/>

            <br></br>

            <h2>프로젝트 명 : 더리터 키오스크</h2>
            <h3>2020년 C++ 프로그래밍 팀 프로젝트, 김경훈 외 1명</h3>
            <a href="https://github.com/KyungHoon0126/THE_LITER_KIOSK">
                깃허브 주소 : TheLiterKiosk GitHub
            </a>
            <h4>
                2020년 09월 ~ 2020년 11월, 약 3개월간 프로젝트를 진행하며 주문, 좌석선택, 테이블, 결제, 관리자 등 다수의 기능을 포함한 무인 주문 시스템 개발
            </h4>
        </div>
    )
}

export default Kiosk
