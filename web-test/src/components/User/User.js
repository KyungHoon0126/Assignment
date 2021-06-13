import React from 'react'

const User = ({ user, onRemove, onModifyClick }) => {
    const { id, username, email } = user;

    return (
        <div>
            <div>
                <label>이름 : </label>
                {username}
            </div>

            <div>
                <label>이메일 : </label>
                {email}            
            </div>

            <button onClick={() => onModifyClick(id)}>수정</button>
            <button onClick={() => onRemove(id)}>삭제</button>

            <br />
            <br />
        </div>
    )
}

export default User
