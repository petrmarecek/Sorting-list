import React from 'react'
import PropTypes from 'prop-types'

// styles
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  height: 100%;
`

const CenterPanel = ({ children }) => <Wrapper>{children}</Wrapper>

CenterPanel.propTypes = {
  children: PropTypes.object,
}

export default CenterPanel
