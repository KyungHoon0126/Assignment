import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="LandingPage-Wrapper">
            <div>
                <Link to="/signup">회원가입 & 회원목록, 수정 및 삭제 & 회원 조회</Link>
            </div>

            <br />
            <br />

            <div>
                <Link to="/post">새 글 작성 & 게시글 목록 & 게시글 조회</Link>
            </div>

            <br />
            <br />
        </div>
    )
}

export default LandingPage
