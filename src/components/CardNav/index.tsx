import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

const Nav = ({ activeIndex = 0 }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link" to="/info" as={Link}>
        <TranslatedText translationId={800}>Info</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" to="/farms" as={Link}>
        <TranslatedText translationId={7400}>Farms</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-token-nav-link" to="/pools" as={Link}>
        Pools
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
