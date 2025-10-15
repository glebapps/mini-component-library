import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ id, label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <NativeSelect
        id={id}
        value={value}
        onChange={onChange}
        aria-label={label}
      >
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={2} />
      </CustomSelect>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`

const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

export default Select
