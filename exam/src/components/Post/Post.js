import React from 'react'

const Post = ({ post, onRemove }) => {
    const { id, title, content } = post;

    return (
        <div>
            <div>
                <label>아이디 : </label>
                {post.idx}
            </div>

            <div>
                <label>글쓴이 : </label>
                {id}
            </div>

            <div>
                <label>제목 : </label>
                {title}
            </div>

            <div>
                <label>내용 : </label>
                {content}
            </div>

            <button>수정</button>
            <button onClick={onRemove}>삭제</button>

            <br />
            <br />
        </div>
    )
}

export default Post
