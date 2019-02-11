import React from 'react'
import PropTypes from 'prop-types'

// components
import TopPanel from '../components/panels/top-panel'
import InputPrimary from '../components/forms/input-primary'
import CenterPanel from '../components/panels/center-panel'
import SortingList from '../components/sorting-list'

// styles
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const SortingListContent = ({ list, addValue, handleCheck }) => (
  <Wrapper>
    <TopPanel>
      <InputPrimary addValue={addValue} />
    </TopPanel>
    <CenterPanel>
      <SortingList list={list} onCheck={handleCheck} />
    </CenterPanel>
  </Wrapper>
)

SortingListContent.propTypes = {
  list: PropTypes.object,
  addValue: PropTypes.func,
  handleCheck: PropTypes.func,
}

export default SortingListContent
