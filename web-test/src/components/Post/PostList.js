import React from 'react'

const PostList = ({ post }) => {
    const { id, content } = post;

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
                <label>내용 : </label>
                {content}
            </div>

            <br />
            <br />
        </div>
    )
}

export default PostList
