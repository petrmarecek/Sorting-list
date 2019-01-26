import React from 'react'
import PropTypes from 'prop-types'

// styles
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  height: 250px;
`

const TopPanel = ({ children }) => <Wrapper>{children}</Wrapper>

TopPanel.propTypes = {
  children: PropTypes.object,
}

export default TopPanel
