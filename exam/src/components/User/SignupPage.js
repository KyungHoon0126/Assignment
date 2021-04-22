import React, { useCallback, useState, useRef, useReducer } from 'react'
import { withRouter } from 'react-router';
import User from './User';
import UserList from './UserList';

const SignupPage = (props) => {
    const [Id, setId] = useState(""); // 아이디
    const [Email, setEmail] = useState(""); // 이메일
    const [Name, setName] = useState(""); // 이름
    const [Password, setPassword] = useState(""); // 패스워드
    const [PhoneNumber, setPhoneNumber] = useState(""); // 전화번호

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHanler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onPhoneNumberHandler = (event) => {
        setPhoneNumber(event.currentTarget.value);
    }

    const onSubmit = useCallback(
        e => {
            onInsert(Id, Name, PhoneNumber, Email, Password);
            setName('');
            setPassword('');
            setPhoneNumber('')
            setId('');
            setEmail('');
            e.preventDefault();
        },
        [Email, Id, Name, Password, PhoneNumber]
    );

    const [findId, setFindId] = useState(""); 

    const onFindIdHandler = (event) => {
        setFindId(event.currentTarget.value);
    }

    function userReducer(users, action) {
        console.log(`userReducer : ${users}`)
        switch (action.type) {
          case "INSERT":
            return users.concat(action.user);
          case "REMOVE":
            return users.filter(user => user.id !== action.id);
          default:
            return users;
        }
      }

      function createBulkUsers() {
          const array = [];
          array.push({
            idx: 0,
            id: "KyungHoon",
            name: "김경훈",
            phonenumber: "01012345678",
            email: "devkyunghoon@gmail.com",
            password: "12345678"
          });

          return array;
      }
    
      const [users, dispatch] = useReducer(userReducer, undefined, createBulkUsers);
      const nextIdx = useRef(2);
      const onInsert = useCallback(
        (id, name, phonenumber, email, password) => {
            const user = {
                idx: nextIdx.current,
                id: id,
                name: name,
                phonenumber: phonenumber,
                email: email,
                password: password
            };
            dispatch({ type: "INSERT", user });
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
                <h1>1. 회원가입</h1>

                <label>아이디 : </label>
                <input type="text" 
                        placeholder="Id"
                        value={Id}
                        onChange={onIdHandler}/>

                <br /> 

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

                <label>전화번호 : </label>
                <input type="text"
                        placeholder="PhoneNumber"
                        value={PhoneNumber}
                        onChange={onPhoneNumberHandler}/>

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

            <br />

            <div>
                <h1>2. 회원 조회 및 수정</h1>
            
                <label>조회할 아이디 : </label>
                
                <input type="text" 
                    placeholder="조회할 아이디를 입력하세요."
                    value={Id}
                    onChange={findId}/>

                    <button>
                        검색
                    </button>

                    <br />
                    <br />

                    {users.map(user => (
                        <User user={user}
                            key={user.idx}
                            onRemove={onRemove}
                        />
                    ))}
            </div>

            <br />

            <div>
                <h1>6. 회원 목록</h1>
                <button>회원 목록 전체 검색</button>
                {users.map(user => (
                    <UserList user={user}
                        key={user.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default withRouter(SignupPage)
