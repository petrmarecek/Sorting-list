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

const SortingList = ({ list, onCheck }) => (
  <List>
    {list.map((item, i) => (
      <SortingListItem key={i} index={i} item={item} onCheck={onCheck} />
    ))}
  </List>
)

SortingList.propTypes = {
  list: PropTypes.object,
  onCheck: PropTypes.func,
}

export default SortingList
