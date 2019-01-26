import React from 'react'
import PropTypes from 'prop-types'

// styles
import styled from 'styled-components'
import { fontPrimary, colors, borderRadius } from '../styled-components-mixins'

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${colors.whitePrimary};
  background-color: ${colors.grayPrimary};
  margin: 10px 0;
  list-style-type: none;
  ${borderRadius('5px')}
  ${fontPrimary}
`

const SortingListItem = ({ value }) => <Item>{value}</Item>

SortingListItem.propTypes = {
  value: PropTypes.string,
}

export default SortingListItem
