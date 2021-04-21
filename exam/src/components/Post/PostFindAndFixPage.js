import React, { useState } from 'react'
import { withRouter } from 'react-router'

function PostFindAndFixPage() {
    const [PostNumber, setPostNumber] = useState(""); 

    const onPostNumberHandler = (event) => {
        setPostNumber(event.currentTarget.value);
    }

    return (
        <div>
            <label>조회할 게시글의 번호를 입력 : </label>
            <input type="text" 
                   placeholder="게시글 번호를 입력하세요."
                   value={PostNumber}
                   onChange={onPostNumberHandler}/>

            <button>
                검색
            </button>
        </div>
    )
}

export default withRouter(PostFindAndFixPage)
