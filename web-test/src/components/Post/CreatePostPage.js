import React, { useCallback, useState } from 'react'
import { withRouter } from 'react-router'
import Post from './Post';
import PostList from './PostList';

function CreatePostPage(props) {
    const [Id, setId] = useState(""); // 회원 아이디
    const [Content, setContent] = useState(""); // 내용

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onContentHandler = (event) => {
        setContent(event.currentTarget.value);
    }

    const [PostNumber, setPostNumber] = useState(""); 

    const onPostNumberHandler = (event) => {
        setPostNumber(event.currentTarget.value);
    }

    const onSubmit = useCallback(
        e => {
            setId('');
            setContent('')
            e.preventDefault();
        },
        [Content, Id]
    );

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>4. 새 글 작성</h1>
                <label>회원 아이디 : </label>
                <input type="text" 
                    placeholder="아이디"
                    value={Id}
                    onChange={onIdHandler}/>

                <br />

                <label>내용 : </label>
                <input type="text" 
                    placeholder="내용"
                    value={Content}
                    onChange={onContentHandler}/>

                <br />

                <button type="submit" onSubmit={onSubmit}>
                    확인
                </button>

                <button onClick={() => {
                    props.history.push('/');
                }}>
                    취소
                </button>
            </form>

            <div>
                <h1>5. 게시글 목록 및 삭제</h1>

                <button>
                    게시글 전체 검색
                </button>

                <br />
                
                {/* {posts.map(post => (
                    <PostList post={post}
                        key={post.id}
                    />
                ))} */}
            </div>

            <div> 
                <h1>6. 게시글 조회</h1>
                
                <label>조회할 게시글의 아이디 : </label>
                <input type="text" 
                    placeholder="게시글 번호를 입력하세요."
                    value={PostNumber}
                    onChange={onPostNumberHandler}/>

                <button>
                    검색
                </button>

                <br />

                {/* {posts.map(post => (
                    <Post post={post}
                        key={post.idx}
                        onRemove={onRemove}
                    />
                ))} */}
            </div>
        </div>
    )
}

export default withRouter(CreatePostPage)
