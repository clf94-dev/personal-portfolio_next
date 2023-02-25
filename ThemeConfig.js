import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  projectText: '#33323D',
  iconColor:0,
  navbarText: '#203A4C',
  navbarTextHover: '#5fb4a2',
  fontWeight3: 300,
  fontWeight4: 400,
  fontWeight6: 600,
  fontWeight7: 700,
  fontHeading: 'Ibarra Real Nova',
  fontBody: 'Public Sans'
}

export const darkTheme = {
  body: '#000000',
  text: '#FFFFFF',
  toggleBorder: '#6B8096',
  background: '#999',
  projectText: '#FAFAFA',
  iconColor:1,
  navbarText: '#FFFFFF',
  navbarTextHover: '#5fb4a2', 
  fontWeight3: 300,
  fontWeight4: 400,
  fontWeight6: 600,
  fontWeight7: 700,
  fontHeading: 'Ibarra Real Nova',
  fontBody: 'Public Sans'
}

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`