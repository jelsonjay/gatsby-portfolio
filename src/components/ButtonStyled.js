import styled from "styled-components"

export const Button = styled.button`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? "#ff4040" : "#0867f8")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: "#fff";
  font-size: ${({ fontXl }) => (fontXl ? "20" : "16")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#ff4040" : "#0867f8")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
