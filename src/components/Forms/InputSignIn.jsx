import React, { useState } from 'react';
import { useSignIn } from '../Context/Login/hook-query-login';
import { useNavigate } from 'react-router-dom';

const InputSignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorActive, setErrorActive] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(null);

 const navigate = useNavigate()
  const [getUser] = useSignIn();
  console.log('first', getUser);

  const sendUser = async (e) => {
    e.preventDefault();
    await getUser({ variables: { email, password },
      onError: (error) =>{
        setInvalidMessage(error.graphQLErrors[0].message)
      }, 
    });
    
   
    if (!email || !password) {
      setErrorMessage('Campo Vacio')
      setErrorActive(true)
      return;
    }else{
      setTimeout(() => {
        localStorage.setItem('Users', email)
        console.log('Logueado');
      }, 2000);
    }

  };

  return (
    <div>
      <form onSubmit={sendUser}>
        {invalidMessage}
        <input
          type="email"
          name="email"
          className={invalidMessage ? errorActive && "message" : ""}
          placeholder= {errorMessage ? errorMessage : "Enter Your Email" }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className={invalidMessage ? errorActive && "message" : ""}
          placeholder= {errorMessage ? errorMessage : "Enter Your Password" }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value={'Send'} />
      </form>
    </div>
  );
};

export default InputSignIn;
