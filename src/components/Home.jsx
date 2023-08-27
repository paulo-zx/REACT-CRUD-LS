import React from 'react'
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div>

    <div className="d-flex my-5 justify-content-between">
      <h1>Home</h1>
    <button className='btn btn-outline-secondary my-2 my-sm-0'
            onClick={() => navigate("/listar-cliente")}
      >
            Clientes
    </button>

    <button className='btn btn-outline-secondary my-2 my-sm-0'
            onClick={() => navigate("/listar-motoboy")}
      >
            Motoboys
    </button>
    </div>
    

    </div>
  )
}
