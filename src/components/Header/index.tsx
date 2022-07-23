import coffeeLogo from "../../assets/CoffeeLogo.svg";
import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogo} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            João Pessoa, PB
          </HeaderButton>
          <NavLink to="/completeOrder ">
          <HeaderButton variant="yellow">
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
