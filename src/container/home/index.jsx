
import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'
import People from '../../assets/people.svg'
import Seta from '../../assets/arrow.png'

import {
  Container,
  H1,
  Image,
  Input,
  InputLabel,
  Button,
  ContainerItens,
  InputNumber
} from './styles';


const Home = () => {
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })
    navigate('/usuarios');
  }
  useEffect(() => {
  }, [])
  return (

    <Container>
      < Image alt='logo-imagem' src={People} />

      <ContainerItens >
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' type='text' />

        <InputLabel>Idade</InputLabel>
        <InputNumber ref={inputAge} placeholder='Idade' type='number' />

        <Button type='button' onClick={addNewUser}>
          Cadastrar  <img alt='Seta' src={Seta} />
        </Button>

      </ContainerItens >
    </Container>

  );
}

export default Home