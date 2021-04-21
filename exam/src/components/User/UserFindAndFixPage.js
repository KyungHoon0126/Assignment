import React, { useState } from 'react'
import { withRouter } from 'react-router'

function UserFindAndFixPage() {
    const [Id, setId] = useState(""); 

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    return (
        <div>
            <label>조회할 아이디 : </label>
            <input type="text" 
                   placeholder="조회할 아이디를 입력하세요."
                   value={Id}
                   onChange={onIdHandler}/>

                   <button>
                       검색
                   </button>
        </div>
    )
}

export default withRouter(UserFindAndFixPage)
