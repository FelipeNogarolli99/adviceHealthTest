
import { Link } from 'react-router-dom';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import Title from '../../components/Title';
import Header from '../../components/Header';
import './scheduling.css'
import Modal from '../../components/Modal'

export default function Home() {
  const chamados = [
    {
      id: 1,
      cliente: 'Joao da Silva',
      assunto: 'Consulta medica geral',
      status: 'Aberto',
      createdFormat: '15 / 12 / 2024',
    },
    {
      id: 2,
      cliente: 'Felipe Macedo',
      assunto: 'Dermatologista',
      status: 'Fechado',
      createdFormat: '15 / 12 / 2024',
    },
    {
      id: 3,
      cliente: 'Helena DHO ',
      assunto: 'Consulta medica geral',
      status: 'Aberto',
      createdFormat: '15 / 12 / 2024',
    },
  ];

  return (
    <div>
        <Header/>
        <div className='content'>
        <Title name="Consulta Agendamentos">
        <FiMessageSquare size={25} />
      </Title>
      <div className="search-container">
        <input
            type="text"
            className="search-input"
            placeholder="Busca Avançada"
        />
        <button className="search-btn">
            <FiSearch size={20} />
        </button>
        </div>
          <>
            <Link to="/new" className="new">
              <FiPlus color="#FFF" size={25} />
              Novo agendamento
            </Link>

            <table>
              <thead>
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Assunto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cadastrando em</th>
                  <th scope="col">Opçoes</th>
                </tr>
              </thead>
              <tbody>
                {chamados.map((item, index) => (
                  <tr key={index}>
                    <td data-label="Cliente">{item.cliente}</td>
                    <td data-label="Assunto">{item.assunto}</td>
                    <td data-label="Status">
                      <span
                        className="badge"
                        style={{
                          backgroundColor:
                            item.status === 'Aberto' ? '#5cb85c' : '#999',
                        }}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td data-label="Cadastrado">{item.createdFormat}</td>
                    <td data-label="#">
                      <button
                        className="action"
                        style={{ backgroundColor: '#3583f6' }}
                        onClick={() => toggleModal(item)}
                      >
                        <FiSearch color="#FFF" size={17} />
                      </button>
                      <Link
                        to={`/new/${item.id}`}
                        className="action"
                        style={{ backgroundColor: '#f6a935' }}
                      >
                        <FiEdit2 color="#FFF" size={17} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>    
      </div>
    </div>
  );
}
