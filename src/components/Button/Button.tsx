import StyledButton from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action: () => void;
  semantic: "primary" | "secondary";
}

const Button = ({ text, semantic, action }: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={action} semantic={semantic}>
      {text}
    </StyledButton>
  );
};

export default Button;
