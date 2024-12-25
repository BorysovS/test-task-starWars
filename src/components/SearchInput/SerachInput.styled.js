import styled from "@emotion/styled";

export const Input = styled.input`
  min-width: 400px;
  padding: 4px 8px;
  border: 1px solid #fff;
  background-color: #21233c75;
  border-radius: 8px;

  margin-right: 16px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.6, 0.18, 0.32, 0.7);
  color: #fff;
  font-size: 18px;

  :hover,
  :focus {
    border-color: #00ff16;
  }
`;
