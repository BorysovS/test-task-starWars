import styled from "@emotion/styled";

export const PopupWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: #3b3b3b9e;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 100;
  width: 220px;
  top: 0;
  right: 0;

  @media (min-width: 480px) {
    width: 260px;
  }

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1200px) {
    top: 13%;
    right: -38%;
  }
`;

export const PopupText = styled.p`
  margin: 0 0 10px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;

  @media (min-width: 480px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const PopupBtn = styled.button`
  position: absolute;
  padding: 0;
  width: 28px;
  height: 28px;
  top: 10px;
  right: 10px;
  background-color: #3641f4e0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :hover,
  :focus {
    background-color: red;
  }

  @media (min-width: 480px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 8px;
  border-bottom: 1px solid #ccc;

  @media (min-width: 480px) {
    padding: 6px 12px;
    gap: 12px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 8px 16px;
    gap: 16px;
  }
`;

export const ItemText = styled.p`
  flex: 1;
  text-align: center;
  font-size: 12px;

  :last-child {
    flex: 0;
  }

  @media (min-width: 480px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const MoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  height: 38px;
  padding: 8px;
  font-size: 14px;
  border: 3px solid transparent;
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  background-color: #333336c2;
  color: rgb(255 255 255 / 60%);
  font-weight: bold;
  outline: none;
  overflow: hidden;

  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover {
    color: #fff;
  }

  @media (min-width: 480px) {
    width: 130px;
    height: 44px;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 50px;
    font-size: 18px;
  }
`;

export const TextWrap = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
