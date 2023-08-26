import { useEffect, useState } from 'react'
import { EmployeeItem } from './EmployeeItem'
import { getListOfEmployees } from '../services/localstorage';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListOfEmployees());
    },[]);

  return (
    <div>
        <h1 className='my-S text-center'>Gerenciamento dos Clientes</h1>


        {
            employees.length > 0 ? (
                <div className="card bg-secondary p-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Endereço</th>
                                <th>Telefone</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
        
                        <tbody>
                            {employees.map(employee => 
                                <EmployeeItem 
                                    employee={employee}
                                    key={employee.id}
                                    setEmployees={setEmployees}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            ): (
                    <h3 className="text-center">Nenhum Cliente</h3>
            )
        }


        
    </div>
  )
}
