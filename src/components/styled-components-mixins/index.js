import { css } from 'styled-components'

export const colors = {
  grayPrimary: '#9e9e9e',
  graySecondary: '#e8e8e8',
  redPrimary: '#e02a2a',
  whitePrimary: '#fff',
}

export const borderRadius = value => css`
  -webkit-border-radius: ${value};
  -moz-border-radius: ${value};
  border-radius: ${value};
`

export const placeholderColor = value => css`
  ::-webkit-input-placeholder {
    color: ${value};
  }

  ::-moz-placeholder {
    color: ${value};
  }

  :-moz-placeholder {
    color: ${value};
  }

  :-ms-input-placeholder {
    color: ${value};
  }
`
