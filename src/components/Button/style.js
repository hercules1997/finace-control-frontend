import styled from 'styled-components'

export const ComponentButton = styled.button`
  background-color: rgb(6, 100, 254);
  height: 45px;

  margin-top: 40px;
  font-size: 1.5rem;
  font-weight: 700;

  outline: none;
  border: none;
  border-radius: 10px;
  color: white;

  cursor: pointer;
  box-shadow: 0px 12px 35px black;

  &:hover {
    background-color: rgb(6, 159, 254);
  }

  &:active {
    opacity: 0.6;
  }
`
