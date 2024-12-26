import styled from "@emotion/styled";

export const HeroesList = styled.ul`
  width: 100%;
  background-color: #00000061;
  border: 1px solid #057603;
  border-radius: 16px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media (min-width: 420px) {
    padding: 10px 16px;
    gap: 20px;
  }

  @media (min-width: 768px) {
    width: 700px;
    padding: 12px 24px;
    gap: 28px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;

  @media (min-width: 420px) {
    padding: 16px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 0;
  }
`;
