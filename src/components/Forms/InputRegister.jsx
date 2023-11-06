import React, { useState } from 'react';
import { useSignUp } from '../Context/Register/custom-hooks-register';
import formInit from '../../assets/fondo-negro.jpg'
import { Link, useNavigate } from 'react-router-dom';

const InputRegister = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorActive, setErrorActive] = useState(false);
  const [isValidError, setIsValidError] = useState('');
  const [isError, setIsError] = useState('');

  const [createPerson] = useSignUp();

  const addUser = async (e) => {
    e.preventDefault();

    await createPerson(
      { variables: { name, password, email } },
      console.log(useSignUp)
    );

    if (!email || !password || !name || !repeatpassword) {
      setIsValidError("Campos Vacios")
      setErrorActive(true);
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
              placeholder={'Introduzca un Email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class='box-input-reg3'>
            <label className='label-regis'>Contraseña</label>
            <input
              type="password"
              name="password"
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
    </div>
  );
};

export default InputRegister;
