import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegultarText, TitleText } from "../../../../components/Typography";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  AddCardWrapper,
  CardFooter,
  CoffeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeCardContainer>
      <img src={`/coffee/${coffee.photo}`}/>

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${coffee.tags}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegultarText size="s">R$</RegultarText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCardWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCardWrapper>
      </CardFooter>
    </CoffeCardContainer>
  );
}
