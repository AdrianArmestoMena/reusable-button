import { css } from "styled-components";

export const PrimaryButton = css`
  background-color: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.light};
  border: 1px solid ${({ theme }) => theme.normal};
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

export const SecondaryButton = css`
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.primaryText};
  border: 1px solid black;
  &:hover {
    background-color: ${({ theme }) => theme.lightHover};
  }
`;
