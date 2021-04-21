import React from 'react'

const User = ({ user }) => {
    const { id, name, phonenumber, email } = user;

    return (
        <div>
            <div>
                <label>아이디 : </label>
                {id}
            </div>

            <div>
                <label>이름 : </label>
                {name}
            </div>

            <div>
                <label>전화번호 : </label>
                {phonenumber}
            </div>

            <div>
                <label>이메일 : </label>
                {email}            
            </div>

            <button>수정</button>
            <button>삭제</button>

            <br />
            <br />
        </div>
    )
}

export default User
