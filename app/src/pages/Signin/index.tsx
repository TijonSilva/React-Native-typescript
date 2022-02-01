import React from 'react';
import Input from '../../Components/input';

import{Container, Title} from './styles'

const SignIn = () => {
  return (
    <Container>
      <Title>Faça o Login e seja Bem-vindo</Title>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
    </Container>
  )
}
export default SignIn;
