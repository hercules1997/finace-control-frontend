import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  text-align: center;
  align-items: center;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
border-radius: 22px;
  justify-content: center;
  text-align: center;
 
  align-items: center;

  form {
    display: flex;
    flex-direction: column;

    padding: 40px;
    color: white;
  }
`

export const Label = styled.p`
  text-align: start;
  margin: 10px 0 10px 9px;
  font-weight: 700;
`
export const Input = styled.input`
  background-color: rgb(20, 44, 68);

  width: 400px;
  height: 35px;
  align-items: center;
  padding: 10px;

  outline: none;
  border: ${(props) => (props.error ? '2px solid red' : 'none')};
  border-radius: 10px;
  font-size: 1.2rem;
  color: #d6d6ba;

  box-shadow: 0px 12px 35px black;

  &:focus {
    background-color: #d6d6ba;
    color: blue;
  }
`


