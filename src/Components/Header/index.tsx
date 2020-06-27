import React from 'react';

import Logo from '../../assets/Logo.svg';

import { Container } from './style';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="Logo Triunfo Ranking" />
      </header>
    </Container>
  );
};

export default Header;
