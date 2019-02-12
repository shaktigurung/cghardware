import styled from "styled-components";

export const ButtonContainer = styled.button`
background: transparent;
border-radius: 5px;
font-size: 1.4rem;
border: 2px solid var(--lightBlue);
color: var(--lightBlue);
margin: 0 1em;
padding: 0.25em 1em;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover{
  background: var(--lightBlue);
  color: var(--mainBlue);
}
&:focus{
  outline:none;
}
`