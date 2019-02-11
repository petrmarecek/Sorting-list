import React from 'react'
import PropTypes from 'prop-types'
import { withHandlers } from 'recompose'

// styles
import styled from 'styled-components'
import {
  fontPrimary,
  colors,
  boxSizing,
  borderRadius,
} from '../styled-components-mixins'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${colors.whitePrimary};
  background-color: ${props =>
    props.isChecked ? colors.grayTertiary : colors.grayPrimary};
  margin: 10px 0;
  padding: 0 50px;
  list-style-type: none;
  ${boxSizing('border-box')}
  ${borderRadius('5px')}
  ${fontPrimary}
`

const Item = styled.li`
  list-style-type: none;
`

const CheckBox = styled.input`
  height: 25px;
  width: 25px;
`

const SortingListItem = ({ item, handleClickCheck }) => (
  <Wrapper isChecked={item.isChecked}>
    <Item>{item.value}</Item>
    <CheckBox
      type="checkbox"
      checked={item.isChecked}
      onChange={handleClickCheck}
    />
  </Wrapper>
)

SortingListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  handelClickCheck: PropTypes.func,
  onCheck: PropTypes.func,
}

export default withHandlers({
  handleClickCheck: props => event => {
    const { index } = props
    const { checked } = event.target

    props.onCheck(index, checked)
  },
})(SortingListItem)
