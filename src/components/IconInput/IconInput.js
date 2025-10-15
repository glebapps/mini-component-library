import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    borderWeight: 1,
    fontSize: 14,
    height: 24,
    iconSize: 16,
  },
  large: {
    borderWeight: 2,
    fontSize: 18,
    height: 36,
    iconSize: 24,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--height': styles.iconSize + 'px' }}>
        <Icon id={icon} strokeWidth={2} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        placeholder={placeholder}
        aria-label={label}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-weight': styles.borderWeight + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  height: var(--size);
`

const TextInput = styled.input.attrs({
  type: 'text',
})`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-weight) solid ${COLORS.black};
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

export default IconInput
