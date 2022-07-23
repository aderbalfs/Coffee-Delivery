import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RegultarText } from "../../../../components/Typography";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodContainer } from "./styles";

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOption() {
  const { register, formState: {errors} } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

  return (
    <PaymentMethodContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          icon={icon}
          id={key}
          label={label}
          value={key}
          key={label}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodError && <RegultarText>{paymentMethodError}</RegultarText>}
    </PaymentMethodContainer>
  );
}
