import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Button, ErrorMessage, ButtonLink } from '../../components'
// import { useUser } from '../../hooks/UserContext'
// import apiTopBurger from '../../services/api'
import {
  Container,
  ContainerItens,
  Label,
  Input,
} from './style'
import { Background } from '../../components/Background'

export function Login () {
  // const history = useHistory()
  // const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor digite um e-mail válido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(8, 'Senha deve ter no mínimo 8 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  // const onSubmit = async (clientData) => {
  //   const { data } = await toast.promise(
  //     apiTopBurger.post('sessions', {
  //       email: clientData.email,
  //       password: clientData.password
  //     }),
  //     {
  //       pending: 'Verificando seus dados...',
  //       success: 'Seja bem-vindo(a)!',
  //       error: 'Dados incorretos'
  //     }
  //   )

  //   putUserData(data)
  //   setTimeout(() => {
  //     if (data.admin) {
  //       history.push('/pedidos')
  //     } else {
  //       history.push('/')
  //     }
  //   }, 1000)
  // }

  return (
    <Container>  
         <Background/>  
      <ContainerItens>


        <form noValidate onSubmit={handleSubmit()}>
          <h1>Login</h1>
          <Label>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Entrar</Button>
          <ButtonLink>
            Não tem cadastro ainda?
            <Link to="/cadastro">Cadastre-se agora!</Link>
          </ButtonLink>
        </form>
      </ContainerItens>
    </Container>
  )
}
