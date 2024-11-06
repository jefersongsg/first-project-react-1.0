
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import Avatar from '../../assets/avatar.svg';
import Seta from '../../assets/arrow.png';
import Clear from '../../assets/18297 4.svg';

import {
  Container,
  H1,
  Image,
  Button,
  ContainerItens,
  CardUsers,
  Ul
} from './styles'

const Users = () => {

  const [usuarios, setUsuarios] = useState([])

  const getUsers = async () => {
    const newUsers = await api.get('/usuarios');
    setUsuarios(newUsers.data);
  }

  const deleteUser = async (id) => {
    await api.delete(`/usuarios/${id}`)
    const updateUsers = usuarios.filter(user => user.id !== id)
    setUsuarios(updateUsers)

  }
  useEffect(() => {
    getUsers();
  }, [])

  const navigate = useNavigate()

  return (

    <Container>
      < Image alt='logo-imagem' src={Avatar} />

      <ContainerItens >
        <H1> Usuários </H1>
        <Ul>
          {usuarios.map((user) => (
            <CardUsers key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Clear} alt='clear-user' />
              </button>
            </CardUsers>
          ))}
        </Ul>

        <Button onClick={() => navigate('/')}>
          <img alt='Seta' src={Seta} /> Voltar
        </Button>

      </ContainerItens >
    </Container>

  );
}

export default Users