import { css } from 'styled-components'

/*------------------------------ fonts ------------------------------*/
export const fontFamily = css`
  font-family: 'Source Sans Pro', 'Segoe UI', sans-serif;
`

export const fontPrimary = css`
  font-weight: normal;
  font-size: 22px;
`

export const fontSecondary = css`
  font-weight: 300;
  font-size: 36px;
`

/*------------------------------ colors ------------------------------*/
export const colors = {
  grayPrimary: '#9e9e9e',
  graySecondary: '#e8e8e8',
  grayTertiary: '#c9c9c9',
  redPrimary: '#e02a2a',
  whitePrimary: '#fff',
}

/*------------------------------ mixins ------------------------------*/
export const boxSizing = value => css`
  -webkit-box-sizing: ${value};
  -moz-box-sizing: ${value};
  box-sizing: ${value};
`

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
