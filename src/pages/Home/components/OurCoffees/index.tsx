import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../target/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeeContainer } from "./styles";

export function OurCoffee() {
  return (
    <OurCoffeeContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map(coffee => (
        <CoffeeCard key={coffee.id} coffee={coffee}/>
        ) )} 
      </CoffeeList>

    </OurCoffeeContainer>
  )
}