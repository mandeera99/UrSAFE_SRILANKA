import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

// export const useSignup = () => {
//   const [error, setError] = useState(null)
//   const [isLoading, setIsLoading] = useState(null)
//   const { dispatch } = useAuthContext()

//   const signup = async (email,password,userType,name,address,phoneNumber,pharmacyName,zipCode,state,city) => {
//     setIsLoading(true)
//     setError(null)

//     const response = await fetch('/api/user/signup', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({ email,password,userType,name,address,phoneNumber,pharmacyName,zipCode,state,city})
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       setIsLoading(false)
//       setError(json.error)
//     }
//     if (response.ok) {
//       // save the user to local storage
//       localStorage.setItem('user', JSON.stringify(json))

//       // update the auth context
//       dispatch({type: 'LOGIN', payload: json})

//       // update loading state
//       setIsLoading(false)
//     }
//   }

//   return { signup, isLoading, error }
// }
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, userType, name, address, phoneNumber, pharmacyName, zipCode, state, city) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, userType, name, address, phoneNumber, pharmacyName, zipCode, state, city })
      });
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'An error occurred during signup');
      }

      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      return true; // indicate successful signup

    } catch (error) {
      setError(error.message || 'An error occurred during signup');
      return false; // indicate failed signup
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
