import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
    font-size: 25px;
    padding: 10px;
    color:#000000;
    text-align: center;
    &:hover,
    &:focus {
        font-weight: 700;
  }
`;