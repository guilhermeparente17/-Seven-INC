import React from 'react'

import {
  HeaderContainer,
  HeaderLogo
} from './Header.elements'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="employee"><HeaderLogo>Seven INC</HeaderLogo></Link>
    </HeaderContainer>
  )
}

export default Header