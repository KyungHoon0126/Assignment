import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import User from './User';
import baseAxios from '../../lib/baseAxios';

const SignupPage = () => {
    const history = useHistory();
    const [members, setMembers] = useState([]);
    const [searchMember, setSearchMember] = useState(null);

    const [modify, setModify] = useState(null);

    const [searchId, setSearchId] = useState('');

    const [request, setRequest] = useState({
        name: '',
        password: '',
        email: '',
    });

    const requestUserList = useCallback(async () => {
        await baseAxios.get("/user/list")
            .then(({ data }) => {
                setMembers(data);
            });
    }, []);

    const onChangeRequest = useCallback((e) => {
        const { value, name } = e.target;

        setRequest((prevRequest) => ({
            ...prevRequest,
            [name]: value,
        }));
    }, []);

    const onSubmit = useCallback(() => {
        setRequest({
            name: '',
            email: '',
            password: '',
        });
    }, []);

    const onSubmitHandler = useCallback(async (event) => {
        event.preventDefault();

        await baseAxios.post('/user/add', request)
            .then((response) => {
                if (response.status === 200) {
                    alert('회원가입 성공');
                    requestUserList();
                }
            });

        onSubmit();
    }, [onSubmit, request, requestUserList]);

    const onModifyClick = useCallback((id) => {
        const find = members.find((member) => member.id === id);

        if (find) {
            setModify(find);
        }
    }, [members]);

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

        await baseAxios.put(`/user/update/${modify.id}`, copiedModify)
            .then((response) => {
                if (response.status === 200) {
                    requestUserList();
                    onResetModify();
                }
            })
    }, [modify, onResetModify, requestUserList]);

    const onRemove = useCallback(async (id) => {
        await baseAxios.delete(`/user/delete/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    alert('삭제 성공');
                    requestUserList();
                    onResetModify();
                }
            })
    }, [onResetModify, requestUserList]);

    const onSearch = useCallback(async () => {
        await baseAxios.get(`/user/view/${searchId}`)
        .then((response) => {
            if (response.status === 200) {
                setSearchMember(response.data);
            }
        });
    }, [searchId]);

    useEffect(() => {
        requestUserList();
    }, [requestUserList]);

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>1. 회원가입</h1>
                <label>이메일 : </label>
                <input
                    type="email" 
                    placeholder="Email"
                    value={request.email}
                    onChange={onChangeRequest}
                    name='email'
                />

                <br />  

                <label>이름 : </label>
                <input
                    type="text"
                    name='name'
                    placeholder="Name"
                    value={request.name}
                    onChange={onChangeRequest}
                />
                
                <br />  

                <label>패스워드 : </label>
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={request.password}
                    onChange={onChangeRequest}
                />
                
                <br />  

                <button type="submit" onSubmit={onSubmitHandler}>
                    확인
                </button>

                <button onClick={() => {
                    history.push('/');
                }}>
                    취소
                </button>
            </form>

            <br />

            <div>
                <h1>2. 회원목록, 수정 및 삭제</h1>
            
                {members.map(user => (
                    <User user={user}
                        key={user.idx}
                        onRemove={onRemove}
                        onModifyClick={onModifyClick}
                    />
                ))}
            </div>

            {
                modify !== null &&
                <div>
                    <label>이메일 : </label>
                    <input
                        type="email" 
                        placeholder="Email"
                        value={modify.email}
                        onChange={onChangeModify}
                        name='email'
                    />

                    <br />  

                    <label>이름 : </label>
                    <input
                        type="text"
                        name='username'
                        placeholder="Name"
                        value={modify.username}
                        onChange={onChangeModify}
                    />
                    
                    <br />
                    
                    <br />  

                    <button type="submit" onClick={onModify}>
                        확인
                    </button>

                    <button onClick={onResetModify}>
                        취소
                    </button>
                </div>
            }

            <br />

            <div>
                <h1>3. 회원 조회</h1>

                <label>아이디 : </label>
                <input type="text" 
                    placeholder="조회할 아이디를 입력하세요."
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />

                <button onClick={onSearch}>
                    검색
                </button>

                {
                    searchMember !== null &&
                    <div>
                        <div>{searchMember.username}</div>
                        <div>{searchMember.email}</div>
                    </div>
                }
                    
                
            </div>
        </div>
    )
}

export default SignupPage;
