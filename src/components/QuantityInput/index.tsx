import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityButtonContainer } from "./styles";

export function QuantityInput() {
  return (
    <QuantityButtonContainer>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityButtonContainer>
  )
}