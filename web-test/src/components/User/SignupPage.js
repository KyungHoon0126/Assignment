import React, { useCallback, useEffect, useState } from 'react'
import { withRouter } from 'react-router';
import Axios from 'axios';
import User from './User';
import UserList from './UserList';

const SignupPage = (props) => {
    const [Member, setMembers] = useState([])

    const [Email, setEmail] = useState(""); // 이메일
    const [Name, setName] = useState(""); // 이름
    const [Password, setPassword] = useState(""); // 패스워드

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHanler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmit = useCallback(
        e => {
            setName('');
            setPassword('');
            setEmail('');
            e.preventDefault();
        },
        [Email, Name, Password]
    );

    useEffect(() => {
        fetch("/user/list")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMembers(response)
            })
    }, [])

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        Axios.post('http://localhost:8080/user/add', body)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMembers(response)
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>1. 회원가입</h1>
                <label>이메일 : </label>
                <input type="email" 
                        placeholder="Email"
                        value={Email}
                        onChange={onEmailHandler}/>

                <br />  

                <label>이름 : </label>
                <input type="text"
                        placeholder="Name"
                        value={Name}
                        onChange={onNameHandler}/>
                
                <br />  

                <label>패스워드 : </label>
                <input type="password"
                        placeholder="Password"
                        value={Password}
                        onChange={onPasswordHanler} />
                
                <br />  

                <button type="submit" onSubmit={onSubmitHandler}>
                    확인
                </button>

                <button onClick={() => {
                    props.history.push('/');
                }}>
                    취소
                </button>
            </form>

            <br />

            <div>
                <h1>2. 회원목록, 수정 및 삭제</h1>
            
                <button>
                    회원 목록 전체 검색
                </button>
            </div>

            <br />

            <div>
                <h1>3. 회원 조회</h1>

                <label>아이디 : </label>
                <input type="text" 
                    placeholder="조회할 아이디를 입력하세요."/>
                    {/* value={Id}
                    onChange={findId} */}

                    {/* {users.map(user => (
                        <User user={user}
                            key={user.idx}
                            onRemove={onRemove}
                        />
                    ))} */}
                <button>
                    검색
                </button>

                {/* {users.map(user => (
                    <UserList user={user}
                        key={user.id}
                        onRemove={onRemove}
                    />
                ))} */}
            </div>
        </div>
    )
}

export default withRouter(SignupPage)
