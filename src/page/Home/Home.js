import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import FormLogin from './Form';

export default function Home() {
  // let navigate = useNavigate();

  // useEffect(()=>{
  //   navigate("/login");
  // }, [navigate]);

  return (
    <div className="container flex">
      Home
      <FormLogin/>
    </div>
  )
}
