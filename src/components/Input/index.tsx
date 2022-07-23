import { forwardRef, InputHTMLAttributes } from "react";
import { RegultarText } from "../Typography";
import { InputStyled, InputStylesContainer, InputWrapper, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStylesContainer hasError={!!error}>
          <InputStyled {...props} ref={ref}/> 
          {rightText && <RightText>{rightText}</RightText>}
        </InputStylesContainer>
        {error && <RegultarText size="s">{error}</RegultarText>}
      </InputWrapper>
    );
  }
);
