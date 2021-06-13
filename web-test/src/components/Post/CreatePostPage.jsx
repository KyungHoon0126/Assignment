import React, { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Post from './Post';
import baseAxios from '../../lib/baseAxios';

const CreatePostPage = () => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [searchPost, setSearchPost] = useState(null);

    const [modify, setModify] = useState(null);
    
    const [searchId, setSearchId] = useState('');
    
    const [request, setRequest] = useState({
        userId: '',
        content: '',
    });

    const requestPostList = useCallback(async () => {
        await baseAxios.get("/comment/list")
            .then(({ data }) => {
                setPosts(data);
            });
    }, [])

    const onChangeRequest = useCallback((e) => {
        const { value, name } = e.target;

        setRequest((prevRequest) => ({
            ...prevRequest,
            [name]: value,
        }));
    }, []);

    const onSubmit = useCallback(() => {
        setRequest({
            userId: '',
            content: '',
        });
    }, []);

    const onSubmitHandler = useCallback(async (event) => {
        event.preventDefault();

        await baseAxios.post('/comment/add', request)
            .then((response) => {
                if (response.status === 200) {
                    alert('게시물 작성 성공');
                    requestPostList();
                }
            });

        onSubmit();
    }, [onSubmit, request, requestPostList]);

    const onModifyClick = useCallback((id) => {
        const find = posts.find((post) => post.id === id);

        if (find) {
            setModify(find);
        }
    }, [posts])

    const onResetModify = useCallback(() => {
        setModify(null);
    }, []);

    const onChangeModify = useCallback((e) => {
        const { name, value } = e.target;

        setModify((prevModify) => ({
            ...prevModify,
            [name]: value,
        }));
    }, []);

    const onModify = useCallback(async () => {
        const copiedModify = {
            ...modify,
        };
        delete copiedModify.id;

        await baseAxios.put(`/comment/update/${modify.id}`, copiedModify)
            .then((response) => {
                if (response.status === 200) {
                    alert('수정 완료');
                    requestPostList();
                    onResetModify();
                }
            });
    }, [modify, onResetModify, requestPostList])

    const onRemove = useCallback(async (id) => {
        await baseAxios.delete(`/comment/remove/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    alert('삭제 성공');
                    requestPostList();
                    onResetModify();
                }
            })
    }, [onResetModify, requestPostList])

    const onSearch = useCallback(async () => {
        await baseAxios.get(`/comment/view/${searchId}`)
            .then((response) => {
                if (response.status === 200) {
                    setSearchPost(response.data);
                }
            });
    }, [searchId])

    useEffect(() => {
        requestPostList();
    }, [requestPostList])

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>4. 새 글 작성</h1>
                <label>회원 아이디 : </label>
                <input type="number" 
                    placeholder="아이디"
                    value={request.userId}
                    onChange={onChangeRequest}
                    name='userId'
                />
                <br />

                <label>내용 : </label>
                <input type="text" 
                    name='content'
                    placeholder="내용"
                    value={request.content}
                    onChange={onChangeRequest}
                />
                <br />

                <button type="submit" onSubmit={onSubmit}>
                    확인
                </button>

                <button onClick={() => {
                    history.push('/');
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
                
                {posts.map(post => (
                    <Post post={post}
                        key={post.id}
                        onRemove={onRemove}
                        onModifyClick={onModifyClick}
                    />
                ))}
            </div>

            {
                modify !== null &&
                <div>
                    <label>회원 아이디 : </label>
                    <input type="text"
                        name='userId'
                        placeholder="아이디"
                        value={modify.userId}
                        onChange={onChangeModify}/>

                    <br />

                    <label>내용 : </label>
                    <input type="text" 
                        name='content'
                        placeholder="내용"
                        value={modify.content}
                        onChange={onChangeModify}/>

                    <br />

                    <button type="submit" onClick={onModify}>
                        확인
                    </button>

                    <button onClick={onResetModify}>
                        취소
                    </button>
                </div>
            }

            <div> 
                <h1>6. 게시글 조회</h1>
                
                <label>조회할 게시글의 아이디 : </label>
                <input type="text" 
                    placeholder="게시글 번호를 입력하세요."
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}/>

                <button onClick={onSearch}>
                    검색
                </button>

                <br />

                {
                    searchPost !== null &&
                    <div>
                        <div>{searchPost.userId}</div>
                        <div>{searchPost.content}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CreatePostPage
