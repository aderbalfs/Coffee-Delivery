import { Button } from "../../../../components/Button";
import { RegultarText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegultarText size="s">Total de itens</RegultarText>
        <RegultarText>R$ {formattedItemsTotal}</RegultarText>
      </div>
      <div>
        <RegultarText size="s">Entrega</RegultarText>
        <RegultarText>R$ {formatDeliveryPrice}</RegultarText>
      </div>
      <div>
        <RegultarText weight="700" color="subtitle" size="l">Total</RegultarText>
        <RegultarText weight="700" color="subtitle" size="l">R$ {formattedCartTotal}</RegultarText>
      </div>
      
      <Button text="Confirmar Pedido"disabled={cartQuantity <= 0} type="submit"/>
    </ConfirmationSectionContainer>
  );
}
