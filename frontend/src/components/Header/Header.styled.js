import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #333; /* Background color for the header */
  color: #fff; /* Text color */
  padding: 20px; /* Padding around the header content */
`;

export const Logo = styled.div`
  font-size: 24px; /* Font size for the logo */
  font-weight: bold; /* Font weight */
`;

export const Nav = styled.nav`
  display: flex; /* Display navigation items in a row */
`;

export const NavItem = styled.div`
  margin-right: 20px; /* Spacing between navigation items */
  cursor: pointer; /* Change cursor to pointer on hover */
  transition: color 0.3s ease; /* Smooth transition for color change */

  &:last-child {
    margin-right: 0; /* Remove margin from the last navigation item */
  }

  &:hover {
    color: #ffa500; /* Change text color on hover */
  }
`;