import React from 'react'
import PropTypes from 'prop-types'

// components
import SortingListItem from './sorting-list-item'

// styles
import styled from 'styled-components'

const List = styled.ul`
  width: 500px;
  max-height: calc(100vh - 275px);
  padding: 0;
  margin: 0;
  overflow: auto;
`

const SortingList = ({ list }) => (
  <List>
    {list.map((value, i) => (
      <SortingListItem key={i} value={value} />
    ))}
  </List>
)

SortingList.propTypes = {
  list: PropTypes.object,
}

export default SortingList
