import React, { useState } from 'react';
import { useSignIn } from '../Context/Login/hook-query-login';
import { Link, useNavigate } from 'react-router-dom';
import fondInit from '../../assets/fondo-negro.jpg';
import { LodInit } from '../Loader/lodInit';
const InputSignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorActive, setErrorActive] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const [getUser] = useSignIn();
/*   console.log('first', getUser); */

  const sendUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    await getUser({
      variables: { name, email, password },
      onError: (error) => {
        setTimeout(() => {
          if (error) {
            setLoading(false)
            setInvalidMessage(error.graphQLErrors[0].message);
          }
        }, 1000);
      },
      onCompleted: (data) => {
        let datos = data.findPersonByEmail.name
        console.log(datos);
          if (data) {
          localStorage.setItem('User', datos)
          console.log("log");
          setLoading(false)
          navigate('/')
        }  
      }
    });
  };

  return (
    <div className="complete">
      {loading ? (
        <LodInit />
      ) : (
        <>
          <div>
            <h1 className="title-img">
              INICIA SESION Y EMPIEZA EN ESTE MUNDO DE VENDER Y COMPRAR
              PRODUCTOS
            </h1>
            <img src={fondInit} className="img-init" />
          </div>
          <form onSubmit={sendUser} className="form-init">
            <div>
              <div className="input-one-init">
                <h2 className="title-err">{invalidMessage}</h2>
                <label className="label-init">
                  Nombre de Usuario o Correo Electronico
                </label>
                <input
                  type="email"
                  name="email"
                  className={errorActive ? 'message' : ''}
                  placeholder={'Enter Your Email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-two-init">
                <label className="label-init">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  className={errorActive ? 'message' : ''}
                  placeholder={'Enter Your Password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='idk-accounts'>
                <p>
                  No tienes cuenta? Registrate gratis...
                </p>
                    <Link to={'/register'}>Registrarme</Link> 
                
              </div>
              <button className="btn-init">Iniciar Sesion</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default InputSignIn;
