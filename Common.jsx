import styled from "styled-components";


export const Picture= styled.div`
  display:flex;
  width:50%;
  flex-direction:"column"
  height:100px;
  border:1px solid black;
`


export const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
 
`;

export const FormContainer = styled.form`
  width: 500px;
  margin-left: 7px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  margin-left: 30px;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: #00d4ff;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  display:flex;
  justify-content:center
  width:100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #00d4ff;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%);
  );
  &:hover {
    filter: brightness(1.03);
  }
`;
