import styled from "styled-components";

export const ButtonContainer = styled.button`
background: transparent;
border-radius: 5px;
font-size: 1.4rem;
border: 2px solid var(--mainBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
color: ${props => props.cart ?"var(--mainYellow)":"var(--mainBlue)"};
margin: 0.5em 1em;
padding: 0.25em 1em;
cursor: pointer;
text-transform: capitalize;
transition: all 0.5s ease-in-out;
&:hover{
  background: ${prop => prop.cart ? "var(--mainYellow)":"var(--mainBlue)"};;
  color: var(--mainGrey);
}
&:focus{
  outline:none;
}
`