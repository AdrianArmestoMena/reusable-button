import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../../styles/buttonsStyles";

interface ButtonProps {
  semantic: "primary" | "secondary";
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  padding: 0.75rem 1em;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;

  ${({ semantic }) => semantic === "primary" && PrimaryButton}
  ${({ semantic }) => semantic === "secondary" && SecondaryButton}
`;

export default StyledButton;
