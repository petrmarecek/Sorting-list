import React from 'react'
import PropTypes from 'prop-types'
import { withStateHandlers } from 'recompose'
import { stringValidation } from '../../utils/form-validation'

// styles
import styled from 'styled-components'
import {
  fontSecondary,
  colors,
  placeholderColor,
} from '../styled-components-mixins'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 500px;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 0 25px;
`

const Input = styled.input`
  height: 32px;
  padding: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  background: none;
  color: ${props => (props.error ? colors.redPrimary : colors.grayPrimary)};
  border-bottom: 2px solid
    ${props => (props.error ? colors.redPrimary : colors.grayPrimary)};
  ${placeholderColor(props =>
    props.error ? colors.redPrimary : colors.grayPrimary
  )}
  ${fontSecondary}
`

const InputPrimary = ({ value, error, handleChange, handleSubmit }) => (
  <Wrapper>
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add value"
        name="text"
        value={value}
        onChange={handleChange}
        error={error}
      />
    </Form>
  </Wrapper>
)

InputPrimary.propTypes = {
  value: PropTypes.string,
  error: PropTypes.bool,
  addValue: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export default withStateHandlers(() => ({ value: '', error: false }), {
  handleChange: ({ value }) => event => {
    const inputValue = event.target.value
    const error = !stringValidation(inputValue)

    if (inputValue.length >= 25) {
      return { value, error }
    }

    return { value: inputValue, error }
  },
  handleSubmit: ({ value }, props) => event => {
    event.preventDefault()

    if (!stringValidation(value)) {
      return { error: true }
    }

    value.trim()
    props.addValue(value)
    return { value: '' }
  },
})(InputPrimary)
