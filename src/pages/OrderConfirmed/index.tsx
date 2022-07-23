import { RegultarText, TitleText } from "../../components/Typography";
import { OrderConfirmedPageContainer, OrderDetailsContainer } from "./styles";
import OrderConfirmed from "../../assets/Coffee-delivery-Confirmed.svg";
import { InfoWithIcon } from "./../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrderPage";
import { paymentMethods } from "../CompleteOrderPage/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from 'react';
import { useCart } from "../../hooks/useCart";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const { colors } = useTheme();
  
  const { state } = useLocation() as unknown as LocationType;
  const { cleanCart } = useCart()

  const navigate = useNavigate()

  useEffect(() => {
    if(!state) {
      navigate("/")
    }
    cleanCart()
  }, [])

  if(!state) return <></>
  return (
    <OrderConfirmedPageContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegultarText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegultarText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegultarText>
                Entrega em <strong>{state.street}, {state.number}</strong> 
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegultarText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegultarText>
                Previsão de entrega 
                <br />
                <strong>20 min - 30 min</strong>
              </RegultarText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegultarText>
                Pagamento na entrega 
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegultarText>
            }
          />
        </OrderDetailsContainer>
        <img src={OrderConfirmed} />
      </section>
    </OrderConfirmedPageContainer>
  );
}
