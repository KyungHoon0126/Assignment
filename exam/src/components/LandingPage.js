import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

function LandingPage() {
    return (
        <div className="LandingPage-Wrapper">
            <div>
                <Link to="/signup">회원가입 & 회원 목록 & 회원 조회 및 수정</Link>
            </div>

            <br />

            <br />

            <div>
                <Link to="/createpost">새 글 작성 & 게시글 목록 & 게시글 조회 및 수정 & 사용자별 게시글 확인</Link>
            </div>

            <br />

            <br />
        </div>
    )
}

export default LandingPage
