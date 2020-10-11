import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <div>try_catch_finally</div>
      <div>Blog</div>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink>Blog Posts</OptionLink>
      <OptionLink>Technologies</OptionLink>
      <OptionLink>Our Team</OptionLink>
      <OptionLink>About us</OptionLink>
      <OptionLink>Join us!</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
