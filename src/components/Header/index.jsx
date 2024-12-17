import { useContext } from 'react'
import avatarImg from '../../assets/avatar2.png'
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'
import { FaRegChartBar } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";


import './header.css';

export default function Header(){
  

  return(
    <div className="sidebar">
      <div>
        <img src={avatarImg}/>
      </div>

      <Link to="/consultas">
        <FiHome color="#FFF" size={24} />
        Consulta Agendamentos
      </Link>

      <Link to="/new">
        <GrSchedule color="#FFF" size={24} />
        Agendamento de consulta
      </Link>

      <Link to="/dashboard">
        <FaRegChartBar color="#FFF" size={24} />
        Dados do consultório
      </Link>


      <Link to="/perfil">
        <FiUser color="#FFF" size={24} />
        Perfil
      </Link>
    </div>
  )
}