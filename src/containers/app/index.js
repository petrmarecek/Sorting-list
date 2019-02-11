import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'
import { withStateHandlers } from 'recompose'

// component helper
import { mergeSort } from '../../utils/component-helper'

// contents
import SortingListContent from '../../contents/sorting-list-content'

// styles
import styled from 'styled-components'
import { fontFamily, colors } from '../../components/styled-components-mixins'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${colors.graySecondary};
  ${fontFamily}
`

const App = props => (
  <Wrapper>
    <SortingListContent {...props} />
  </Wrapper>
)

App.propTypes = {
  list: PropTypes.object,
  addValue: PropTypes.func,
  handleCheck: PropTypes.func,
}

export default withStateHandlers(() => ({ list: List() }), {
  handleCheck: ({ list }) => (index, isChecked) => {
    const updateList = list.update(index, item => ({
      value: item.value,
      isNumber: item.isNumber,
      isChecked,
    }))
    const sortingList = mergeSort(updateList)

    return { list: sortingList }
  },
  addValue: ({ list }) => value => {
    const data = { value, isNumber: !isNaN(value), isChecked: false }
    const unSortingList = list.unshift(data)
    const sortingList = mergeSort(unSortingList)

    return { list: sortingList }
  },
})(App)
