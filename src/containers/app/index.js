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
import { colors } from '../../components/styled-components-mixins'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${colors.graySecondary};
`

const App = props => (
  <Wrapper>
    <SortingListContent {...props} />
  </Wrapper>
)

App.propTypes = {
  list: PropTypes.object,
  addValue: PropTypes.func,
}

export default withStateHandlers(() => ({ list: List() }), {
  addValue: ({ list }) => value => {
    const unSortingList = list.unshift(value)
    const sortingList = mergeSort(unSortingList)

    return { list: sortingList }
  },
})(App)
