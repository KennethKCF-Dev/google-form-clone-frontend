import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RecButton } from './common/CommonStyledComponent';

const Nav = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 5;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
    background-color: white;
`

const NavLogoButton = styled(Link)`
    width: min-content;
    border-radius: 8px;
    padding: 0 6px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover{
      background-color: var(--button-gray);
    }

    @media (max-width: 640px) {
      padding: 0 0px;
    }
`

const NavLogo = styled.img`
    height: 3rem;
    width: 3rem;
    object-fit: cover;
`

const Span = styled.span`
    padding: 4px 4px;
    font-weight: 400;
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary};
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLogoButton to={'/'}>
        <NavLogo src='https://img.icons8.com/?size=100&id=E4VmOrv6BZqd&format=png&color=000000' />
        <Span>
          Form
        </Span>
      </NavLogoButton>
    </Nav>
  )
}

export default Navbar