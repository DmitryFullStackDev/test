/* eslint-disable react/display-name */

import React, { forwardRef } from 'react'
import styled from 'styled-components'

const SpanStyled: any = styled.span`
  &&& {
    all: revert;

    color: ${({ color, theme }) => theme.color[color] || 'currentColor'};
    margin: ${({ margin }: any) => margin};
    cursor: ${({ pointer }: any) => (pointer ? 'pointer' : '')};
  }
`

interface Props {
  children?: any
  onClick?: (e: any) => void
  margin?: string
  pointer?: boolean
  color?:
    | 'primary'
    | 'disabled'
    | 'accent'
    | 'accent2'
    | 'inverse'
    | 'secondary'
}

export const Span = forwardRef<HTMLDivElement, Props>(
  ({ margin, color, children, onClick, pointer }, ref) => (
    <SpanStyled
      onClick={onClick}
      ref={ref}
      color={color}
      margin={margin}
      pointer={pointer}
    >
      {children}
    </SpanStyled>
  ),
)
