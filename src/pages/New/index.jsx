import React, { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiCalendar, FiUser, FiCreditCard } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import './new.css';

export default function Agendamento() {
    const [medico, setMedico] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [paciente, setPaciente] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        endereco: "",
    });
    const [pagamento, setPagamento] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Validação básica dos campos
        if (!medico || !data || !hora || !paciente.nome || !paciente.cpf) {
            toast.error("⚠️ Preencha todos os campos obrigatórios!");
            return;
        }

        toast.success(" Agendamento confirmado com sucesso!");

        // Simulação de envio dos dados
        console.log({
            medico,
            data,
            hora,
            paciente,
            pagamento,
        });
    };

    return (
        <div >
            <Header />
            <div className="content">
                <Title name="Agendamento de Consultas">
                    <FiCalendar size={25} />
                </Title>
                <ToastContainer position="top-right" autoClose={3000} />
                <form onSubmit={handleFormSubmit}>
              
                    <div className="input-group">
                        <label htmlFor="medico">Médico:</label>
                        <select
                            id="medico"
                            value={medico}
                            onChange={(e) => setMedico(e.target.value)}
                            required
                        >
                            <option value="">Selecione o Médico</option>
                            <option value="drJoao">Dr. João</option>
                            <option value="drMaria">Dr. Maria</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="data">Data:</label>
                        <input
                            type="date"
                            id="data"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="hora">Hora:</label>
                        <input
                            type="time"
                            id="hora"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="nome">Nome Completo:</label>
                        <input
                            type="text"
                            id="nome"
                            value={paciente.nome}
                            onChange={(e) =>
                                setPaciente({ ...paciente, nome: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            value={paciente.cpf}
                            onChange={(e) =>
                                setPaciente({ ...paciente, cpf: e.target.value })
                            }
                            required
                            maxLength="11"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="dataNascimento">Data de Nascimento:</label>
                        <input
                            type="date"
                            id="dataNascimento"
                            value={paciente.dataNascimento}
                            onChange={(e) =>
                                setPaciente({ ...paciente, dataNascimento: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            type="text"
                            id="endereco"
                            value={paciente.endereco}
                            onChange={(e) =>
                                setPaciente({ ...paciente, endereco: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="pagamento">Forma de Pagamento:</label>
                        <select
                            id="pagamento"
                            value={pagamento}
                            onChange={(e) => setPagamento(e.target.value)}
                            required
                        >
                            <option value="">Selecione uma Forma de Pagamento</option>
                            <option value="cartao">Cartão de Crédito</option>
                            <option value="boleto">Boleto</option>
                            <option value="dinheiro">Dinheiro</option>
                        </select>
                    </div>
                    <div className="actions">
                        <button type="submit" className="btn-confirmar">
                            Confirmar Agendamento
                        </button>
                        <button type="button" className="btn-cancelar">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
