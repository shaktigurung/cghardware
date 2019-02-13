import styled from "styled-components";

export const ButtonContainer = styled.button`
background: transparent;
border-radius: 5px;
font-size: 1.4rem;
border: 2px solid var(--mainBlue);
color: var(--mainBlue);
margin: 0 1em;
padding: 0.25em 1em;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover{
  background: var(--mainBlue);
  color: var(--mainGrey);
}
&:focus{
  outline:none;
}
`