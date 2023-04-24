import styled from 'styled-components'


export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);

  justify-content: center;
  text-align: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;

    padding: 10px;
    color: white;
  }
`
export const Label = styled.p`
  text-align: start;
  margin: 10px 0 5px 9px;
  font-weight: 700;
`
export const Input = styled.input`
  background-color: rgb(20, 44, 68);

  width: 400px;
  height: 35px;
  align-items: center;
  padding: 10px;

  outline: none;
  border: none;
  border: ${(props) => (props.error ? '2px solid red' : 'none')};

  border-radius: 10px;
  font-size: 1.2rem;
  color: black;

  box-shadow: 0px 12px 35px black;

  &:focus {
    background-color: #d6d6ba;
  }
`
// export const Button = styled.button`
//   background-color: rgb(6, 100, 254);
//   height: 45px;

//   margin-top: 25px;
//   font-size: 1.5rem;
//   font-weight: 700;

//   outline: none;
//   border: none;
//   border-radius: 10px;
//   color: white;

//   cursor: pointer;
//   box-shadow: 0px 12px 35px black;

//   &:hover {
//     background-color: rgb(6, 159, 254);
//   }

//   &:active {
//     opacity: 0.6;
//   }
// `

