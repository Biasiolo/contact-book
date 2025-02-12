import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }


  button {
    font-family: inherit;
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .pagination {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  justify-content: center;
  margin-top: 1rem;
}

.page-num {
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background-color: #eee;
  border-radius: 4px;
}

.page-num:hover {
  background-color: #ddd;
}

.active .page-num {
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
}

`;
