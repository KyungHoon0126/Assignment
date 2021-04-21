import React, { useCallback, useState, useRef, useReducer } from 'react'
import { withRouter } from 'react-router'
import Post from './Post';
import PostList from './PostList';

function CreatePostPage(props) {
    const [Id, setId] = useState(""); // 아이디
    const [Title, setTitle] = useState(""); // 제목
    const [Content, setContent] = useState(""); // 내용

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onTitleHandler = (event) => {
        setTitle(event.currentTarget.value);
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
            onInsert(Id, Title, Content);
            setId('');
            setTitle('');
            setContent('')
            e.preventDefault();
        },
        [Content, Id, Title]
    );

    function postReducer(posts, action) {
        console.log(`postReducer : ${posts}`)
        switch (action.type) {
          case "INSERT":
            return posts.concat(action.post);
          case "REMOVE":
            return posts.filter(post => post.id !== action.id);
          default:
            return posts;
        }
      }

      function createBulkPosts() {
          const array = [];
          array.push({
            idx: 1,
            id: "kyunghoon",
            title: "제목입니다.",
            content: "내용입니다."
          });

          return array;
      }
    
      const [posts, dispatch] = useReducer(postReducer, undefined, createBulkPosts);
      const nextIdx = useRef(2);
      const onInsert = useCallback(
        (id, title, content) => {
            const post = {
                idx: nextIdx.current,
                id: id,
                title: title,
                content: content
            };
            dispatch({ type: "INSERT", post });
            nextIdx.current += 1
        }, 
        []
    );
    
    const onRemove = useCallback(idx => {
        dispatch({ type: "REMOVE", idx });
        }, [],
    );

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>3. 새 글 작성</h1>
                <label>아이디 : </label>
                <input type="text" 
                    placeholder="아이디"
                    value={Id}
                    onChange={onIdHandler}/>

                <br />

                <label>글 제목 : </label>
                <input type="text" 
                    placeholder="글 제목"
                    value={Title}
                    onChange={onTitleHandler}/>

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
                <h1>4. 사용자별 게시글 확인</h1>

                <label>조회할 게시글의 번호를 입력 : </label>
                <input type="text" 
                    placeholder="게시글 번호를 입력하세요."
                    value={PostNumber}
                    onChange={onPostNumberHandler}/>

                <button>
                    검색
                </button>
                
                {posts.map(post => (
                    <PostList post={post}
                        key={post.id}
                    />
                ))}
            </div>

            <div>
                <h1>게시글 목록</h1>
                <button>게시글 전체 검색</button>
                <br />

                {posts.map(post => (
                    <Post post={post}
                        key={post.id}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    )
}

export default withRouter(CreatePostPage)
