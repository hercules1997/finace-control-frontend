import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { Container, ContainerItens } from '../Login/style'
import { Button, ErrorMessage, ButtonLink } from '../../components'
// import apiTopBurger from '../../services/api'
import {
  Label,
  Input,
} from './style'
import { Background } from '../../components/Background'

export function Cadastro () {
  const schema = Yup.object().shape({
    name: Yup.string().required('Seu nome é obrigatório'),
    email: Yup.string()
      .email('Por favor digite um e-mail válido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(8, 'Senha deve ter no mínimo 8 digitos'),
    confirmPassword: Yup.string()
      .required('Comfime sua senha')
      .oneOf([Yup.ref('password')], 'Senha diferente')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  //const onSubmit = async (clientData) => {
  //   try {
  //     const { status } = await apiTopBurger.post(
  //       'users',
  //       {
  //         name: clientData.name,
  //         email: clientData.email,
  //         password: clientData.password
  //       },
  //       { validateStatus: () => true }
  //     )

  //     if (status === 200 || status === 201) {
  //       toast.success('Cadasro criado com sucesso!')
  //     } else if (status === 409) {
  //       toast.warning('E-mail já cadastrado! Faça login para continuar')
  //     } else {
  //       throw new Error()
  //     }
  //   } catch (err) {
  //     toast.error('Sistema fora do ar, tente novamente mais tarde')
  //   }
  // }

  return (
    <Container>
      <Background/>
      <ContainerItens>
        <form onSubmit={handleSubmit()}>
          <h1>Cadastre-se</h1>

          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

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

          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit">Cadastrar</Button>
          <ButtonLink>
            Já possui conta? <Link to="/login">Acesse!</Link>
          </ButtonLink>
        </form>
      </ContainerItens>
    </Container>
  )
}
