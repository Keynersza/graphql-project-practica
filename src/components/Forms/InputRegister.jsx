import React, { useState } from 'react';
import { useSignUp } from '../Context/Register/custom-hooks-register';
import formInit from '../../assets/fondo-negro.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { LodInit } from '../Loader/lodInit';

const InputRegister = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState('');
  const [isValidError, setIsValidError] = useState('');
  const [errorActive, setErrorActive] = useState(false);
  const [loading, setLoading] = useState(false)
  const [invalidMessage, setinvalidMessage] = useState(null)
  const [createPerson] = useSignUp();
  const navigate = useNavigate()

  const addUser = async (e) => {
    e.preventDefault();
      setLoading(true)
    await createPerson(
      { variables: { name, password, email },
      onError: (error) =>{
        setTimeout(() => {
          if (error) {
            setLoading(false)
           setinvalidMessage(error.graphQLErrors[0].message)
          }
        }, 2000);
      },
      onCompleted: (data) => {
        if (data) {
          setTimeout(() => {
            setLoading(false)
            navigate('/sesion')
          }, 2000);
      }
      }
      },
    );

    if (!email || !password || !name || !repeatpassword) {
      setTimeout(() => {
        setLoading(false)
        setIsValidError("Campos Vacios")
        setErrorActive(true);
      }, 2000);
      return;
    }

    if (password === repeatpassword) {
      console.log('Son iguales')
      return;
    }else{
      setIsError('Las contraseñas no coinciden')
      setErrorActive(true)
    }
   
  };

  return (
    <div className="complete">
      {
        loading ? <LodInit/> : <>
      <div>
            <h1 className="title-img">
              CREA UN NUEVO USUARIO Y EMPIEZA EN ESTE MUNDO DE VENDER Y COMPRAR
              PRODUCTOS
            </h1>
            <img src={formInit} className="img-init" />
          </div>
      <form onSubmit={addUser} class='form-register'>
            <h2 className='message'>{errorActive && isValidError}</h2>
        <div class='inputs-regis'>
          <div class='box-input-reg'>
            <label className='label-regis'>Nombre</label>
            <input
              type="text"
              name="name"
              className={errorActive ? 'errInput' : 'inputOulinet'}
              placeholder={'Introduzca un Nombre'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class='box-input-reg2'>
            <label className='label-regis'>Correo Electronico</label>
            <input
              type="email"
              name="email"
               className={errorActive ? 'errInput' : 'inputOulinet'}
              placeholder={'Introduzca un Email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <h2 className='messageEmail'>{invalidMessage}</h2>
          </div>

          <div class='box-input-reg3'>
            <label className='label-regis'>Contraseña</label>
            <input
              type="password"
              name="password"
               className={errorActive ? 'errInput' : 'inputOulinet'}
              placeholder={'Introduzca un Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          <div class='box-input-reg4'>
            <label className='label-regis'>Repita la Contraseña</label>
            <input
              type="password"
              name="password"
               className={errorActive ? 'errInput' : 'inputOulinet'}
              placeholder={'De nuevo la Password'}
              value={repeatpassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              />
            <h3 className='messagePass'>{isError}</h3>
          </div>
          <div className='yes-accounts'>
                <p>
               Ya tienes una cuenta? Inicia Sesion...
                </p>
                    <Link to={'/sesion'}>Iniciar Sesion</Link> 
                
              </div>
          <button className='btn-regist'>Registrarme</button>
        </div>
      </form>
      </>
    }
    </div>
  );
};

export default InputRegister;
