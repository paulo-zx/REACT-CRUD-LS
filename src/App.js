import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { EmployeeList , EmployeeForm } from "./components";
import { MotoboyList , MotoboyForm } from "./components";
import { Home } from "./components";


export const App =() => {
  return (
    <div>
     <Navbar/>


    <div className="container"> 
    <Routes>

    <Route path="/" element={<Home/>}/>

      <Route path="/listar-cliente" element={<EmployeeList/>}/>
      <Route path="/cadastrar-cliente" element={<EmployeeForm/>}/>
      <Route path="/editar-cliente/:id" element={<EmployeeForm/>}/>

      <Route path="/listar-motoboy" element={<MotoboyList/>}/>
      <Route path="/cadastrar-motoboy" element={<MotoboyForm/>}/>
      <Route path="/editar-motoboy/:id" element={<MotoboyForm/>}/>
    </Routes>
    </div>

    </div>
  );
}

export default App;
