import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid #fff;
  background-color: #21233c75;
  border-radius: 8px;

  outline: none;
  transition: border-color 250ms cubic-bezier(0.6, 0.18, 0.32, 0.7);
  color: #fff;
  font-size: 18px;

  :hover,
  :focus {
    border-color: #00ff16;
  }

  @media (min-width: 768px) {
    padding: 12px 24px;
    width: 700px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;
