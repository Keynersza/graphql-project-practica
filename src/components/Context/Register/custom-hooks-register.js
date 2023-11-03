import { useMutation } from '@apollo/client';
import { ADD_USER } from './register-mutations';

export const useSignUp = () => {
  const resultado = useMutation(ADD_USER);
  return resultado;
};
