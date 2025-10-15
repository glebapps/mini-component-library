/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
}

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size]

  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }

  return (
    <Wrapper
      role="meter"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-labelledby="progressbar"
      style={{
        '--padding': style.padding + 'px',
        '--radius': style.radius + 'px',
      }}
    >
      <BarWrapper>
        <Bar
          style={{
            '--height': style.height + 'px',
            '--width': value + '%',
          }}
        />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
  transition: width 0.3s ease-in-out;
`

export default ProgressBar
