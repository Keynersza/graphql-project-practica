import React, { useState } from 'react';
import { useSignUp } from '../Context/Register/custom-hooks-register';

const InputRegister = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [messageError, setmessageError] = useState(null);
  const [errorActive, setErrorActive] = useState(false);
  const [isValidError, setIsValidError] = useState('');

  const [createPerson] = useSignUp();

  const addUser = async (e) => {
    e.preventDefault();

    await createPerson({variables: { name, password, email }}, 
      console.log(useSignUp)
      );

    if (!email || !password || !name) {
      setIsValidError('Campo Vacio');
      setErrorActive(true)
      return;
    }
    localStorage.setItem('Users', name);
  }   

  return (
    <div>
      <form onSubmit={addUser}>
        {messageError && (
          <div
            style={{
              marginRight: '30px',
              display: 'contents',
              width: '150px',
              border: 'solid 1px',
              color: 'red',
            }}
          >
            {messageError}
          </div>
        )}

        <input
          type="text"
          name="name"
          className={messageError ? errorActive && "message" : ""}
          placeholder={isValidError ? isValidError : 'Enter Your Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className={messageError ? errorActive && "message" : ""}
          placeholder={isValidError ? isValidError : 'Enter Your Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          name="email"
          className={messageError ? errorActive && "message" : ""}
          placeholder={isValidError ? isValidError : 'Enter Your Email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value={'Send'} />
      </form>
    </div>
  );
};

export default InputRegister;
