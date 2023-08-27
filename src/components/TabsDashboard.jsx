import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getListOfTarefas } from '../services/localstorageTarefa';
import { getListOfMotoboys } from '../services/localstorageMotoboy';
import { getListOfEmployees } from '../services/localstorage'; // Importe a função para obter a lista de clientes
import { useNavigate } from 'react-router-dom';

export const TabsDashboard = () => {
    const [tarefas, setTarefas] = useState([]);
    const [motoboys, setMotoboys] = useState([]);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        setTarefas(getListOfTarefas());
        setMotoboys(getListOfMotoboys());
        setClientes(getListOfEmployees());
    }, []);

    const filterTarefasByStatus = (status) => {
        return tarefas.filter((tarefa) => tarefa.status === status);
    };

    const motoboyIdToName = motoboys.reduce((map, motoboy) => {
        map[motoboy.id] = motoboy.name;
        return map;
    }, {});

    const clientIdToName = clientes.reduce((map, cliente) => {
        map[cliente.id] = cliente.name;
        return map;
    }, {});

    const navigate = useNavigate();

    return (
        <div>
            <h1 className="my-5 text-center">Tabelas</h1>
            <Tabs>
            <TabList className="nav nav-pills nav-justified">
                <Tab className="nav-item nav-link active">Aguardando</Tab>
                <Tab className="nav-item nav-link active">Em Andamento</Tab>
                <Tab className="nav-item nav-link active">Encerrados</Tab>
            </TabList>

                <TabPanel>
                    <h3>Tarefas Aguardando</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Motoboy</th>
                                <th>Status</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterTarefasByStatus('Aguardando').map((tarefa) => (
                                <tr key={tarefa.id}>
                                    <td>{clientIdToName[tarefa.clientId]}</td>
                                    <td>{motoboyIdToName[tarefa.motoboyId]}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TabPanel>

                <TabPanel>
                    <h3>Tarefas Em Andamento</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Motoboy</th>
                                <th>Status</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterTarefasByStatus('Motoboy designado').map((tarefa) => (
                                <tr key={tarefa.id}>
                                    <td>{clientIdToName[tarefa.clientId]}</td>
                                    <td>{motoboyIdToName[tarefa.motoboyId]}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.description}</td>
                                </tr>
                            ))}
                            {filterTarefasByStatus('Buscando volume').map((tarefa) => (
                                <tr key={tarefa.id}>
                                    <td>{clientIdToName[tarefa.clientId]}</td>
                                    <td>{motoboyIdToName[tarefa.motoboyId]}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.description}</td>
                                </tr>
                            ))}
                            {filterTarefasByStatus('Em rota de entrega').map((tarefa) => (
                                <tr key={tarefa.id}>
                                    <td>{clientIdToName[tarefa.clientId]}</td>
                                    <td>{motoboyIdToName[tarefa.motoboyId]}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.description}</td>
                                </tr>
                            ))}
                            {filterTarefasByStatus('Motoboy não atendido').map((tarefa) => (
                                <tr key={tarefa.id}>
                                    <td>{clientIdToName[tarefa.clientId]}</td>
                                    <td>{motoboyIdToName[tarefa.motoboyId]}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.description}</td>
                                </tr>
                            ))}
                            {/* Repita o mesmo padrão para outros status em andamento */}
                        </tbody>
                    </table>
                </TabPanel>

                <TabPanel>
                    <h3>Tarefas Encerradas</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Motoboy</th>
                                <th>Status</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterTarefasByStatus('Entregue').map((tarefa) => (
                                <tr key={tarefa.id}>
                                    <td>{clientIdToName[tarefa.clientId]}</td>
                                    <td>{motoboyIdToName[tarefa.motoboyId]}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.description}</td>
                                </tr>
                            ))}
                            {filterTarefasByStatus('Cancelado').map((tarefa) => (
                                <tr key={tarefa.id}>
                                    <td>{clientIdToName[tarefa.clientId]}</td>
                                    <td>{motoboyIdToName[tarefa.motoboyId]}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.description}</td>
                                </tr>
                            ))}
                            {/* Repita o mesmo padrão para outros status encerrados */}
                        </tbody>
                    </table>
                </TabPanel>
            </Tabs>

            <div className="d-flex my-5 justify-content-between">
                <button
                    className="btn btn-outline-secondary my-2 my-sm-0"
                    onClick={() => navigate('/')}
                >
                    Voltar
                </button>
            </div>

        </div>
    );
};
