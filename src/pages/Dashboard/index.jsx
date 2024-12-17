import React, { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiMessageSquare, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dashboard.css";

// Dados fictícios
const dataAgendamentos = 15;
const pacientesAtendidos = 12;
const faturamentoDiario = 5000;
const faturamentoMensal = 120000;

const agenda = [
  { hora: "08:00", paciente: "João Silva" },
  { hora: "09:00", paciente: "Maria Souza" },
  { hora: "10:00", paciente: "Carlos Pereira" },
  { hora: "11:00", paciente: "Felipe Macedo" },
  { hora: "12:00", paciente: "Davi Pedroso" },
  { hora: "14:00", paciente: "Lucia Oliviera" },
  { hora: "15:00", paciente: "Maria Luiza" },
];

const lembretes = [
  "Reunião com a equipe de enfermeiros às 14h.",
  "Aguardar resultados de exames de 3 pacientes.",
];

// Dados dos gráficos
const chartDataDiario = {
  labels: ["08:00", "09:00", "10:00", "11:00", "12:00"],
  datasets: [
    {
      label: "Faturamento Diário",
      data: [1000, 1500, 2000, 1200, 1500],
      borderColor: "#4BC0C0",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const chartDataMensal = {
  labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
  datasets: [
    {
      label: "Faturamento Mensal",
      data: [30000, 40000, 25000, 25000],
      borderColor: "#36A2EB",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export default function Consultorio() {
  const [agendaVisivel, setAgendaVisivel] = useState(true);
  const [graficoAtual, setGraficoAtual] = useState("diario");

  const toggleAgenda = () => setAgendaVisivel(!agendaVisivel);

  const notify = () => toast.success("Agenda carregada com sucesso!");

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Dashboard">
          <FiMessageSquare size={25} />
        </Title>

        {/* Estatísticas */}
        <div className="stats">
          <div className="stat-card">
            <h3>Agendamentos do Dia</h3>
            <p>{dataAgendamentos}</p>
          </div>
          <div className="stat-card">
            <h3>Pacientes Atendidos</h3>
            <p>{pacientesAtendidos}</p>
          </div>
          <div className="stat-card">
            <h3>Faturamento do Dia</h3>
            <p>R${faturamentoDiario}</p>
          </div>
          <div className="stat-card">
            <h3>Faturamento Mensal</h3>
            <p>R${faturamentoMensal}</p>
          </div>
        </div>

        {/* Agenda */}
        <div className="agenda">
          <h3 onClick={toggleAgenda} style={{ cursor: "pointer" }}>
            Agenda do Dia{" "}
            {agendaVisivel ? <FiChevronUp /> : <FiChevronDown />}
          </h3>
          {agendaVisivel && (
            <div className="agenda-list">
              {agenda.map((item, index) => (
                <div className="agenda-item" key={index}>
                  <span className="agenda-time">{item.hora}</span>
                  <span className="agenda-paciente">{item.paciente}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lembretes */}
        <div className="lembretes">
          <h3>Lembretes/Avisos</h3>
          <ul>
            {lembretes.map((lembrete, index) => (
              <li key={index}>{lembrete}</li>
            ))}
          </ul>
        </div>

        {/* Gráficos */}
        <div className="charts">
  <div className="chart-header">
    <h3>Faturamento</h3>
    <div className="chart-toggle">
      <button
        className={`toggle-button ${graficoAtual === "diario" ? "active" : ""}`}
        onClick={() => setGraficoAtual("diario")}
      >
        Diário
      </button>
      <button
        className={`toggle-button ${graficoAtual === "mensal" ? "active" : ""}`}
        onClick={() => setGraficoAtual("mensal")}
      >
        Mensal
      </button>
    </div>
  </div>
  <Line data={graficoAtual === "diario" ? chartDataDiario : chartDataMensal} />
</div>
      </div>
    </div>
  );
}
