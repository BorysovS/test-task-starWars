import styled from "@emotion/styled";

export const PopupWrap = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 100;
  width: 300px;
  top: 100%;
  right: 0;
`;

export const PopupText = styled.p`
  margin: 0 0 10px;
  color: #000;
`;

export const PopupBtn = styled.button`
  margin-top: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 16px;
  border-bottom: 1px solid #ccc;
`;

export const ItemText = styled.p`
  flex: 1;
  text-align: center;
  :last-child {
    flex: 0;
  }
`;
