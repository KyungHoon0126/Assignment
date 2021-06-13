import React from 'react'

const Post = ({ post, onRemove, onModifyClick }) => {
    const { id, userId, content } = post;

    return (
        <div>
            <div>
                <label>아이디 : </label>
                {userId}
            </div>

            <div>
                <label>내용 : </label>
                {content}
            </div>

            <button onClick={() => onModifyClick(id)}>수정</button>
            <button onClick={() => onRemove(id)}>삭제</button>

            <br />
            <br />
        </div>
    )
}

export default Post
