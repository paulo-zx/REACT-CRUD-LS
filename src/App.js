import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { EmployeeList , EmployeeForm } from "./components";


export const App =() => {
  return (
    <div>
     <Navbar/>


    <div className="container"> 
    <Routes>
      <Route path="/" element={<EmployeeList/>}/>
      <Route path="/cadastrar-cliente" element={<EmployeeForm/>}/>
      <Route path="/editar-cliente/:id" element={<EmployeeForm/>}/>
    </Routes>
    </div>

    </div>
  );
}

export default App;
