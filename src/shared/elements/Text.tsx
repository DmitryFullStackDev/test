/* eslint-disable react/display-name */

import React, { forwardRef } from 'react'
import styled from 'styled-components'

const TextStyled: any = styled.div`
  &&& {
    all: revert;

    white-space: ${({ whiteSpace }: any) => whiteSpace || 'nowrap'};
    overflow: ${({ overflow }: any) => overflow || 'initial'};
    text-overflow: ellipsis;

    width: ${({ width }: any) => width};
    min-width: ${({ minWidth }: any) => minWidth};
    max-width: ${({ maxWidth }: any) => maxWidth};

    color: ${({ color, theme }) => theme.color[color] || 'black'};
    margin: ${({ margin }: any) => margin};
    text-align: ${({ textAlign }: any) => textAlign};
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    text-size-adjust: none;
    user-select: ${({ userSelect }: any) => userSelect};

    &.h50 {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 50px;
      line-height: 50px;
      letter-spacing: -0.6px;
    }
    &.h40 {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.6px;
    }
    &.h32 {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -0.6px;
    }
    &.h24 {
      font-size: 24px;
    }
    &.h18 {
      font-size: 18px;
    }
    &.h16 {
      font-size: 16px;
    }
    &.h15 {
      font-size: 15px;
    }
    &.buttonText {
      font-weight: 600;
      font-size: 16px;
    }
    &.body1 {
      font-weight: normal;
      font-size: 16px;
    }
    &.body2 {
      font-weight: normal;
      font-size: 14px;
    }
    &.body2Emp {
      font-weight: 600;
      font-size: 14px;
    }
    &.link {
      font-weight: 500;
      font-size: 14px;
    }
    &.caption {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    }
    &.micro {
      font-size: 11px;
      line-height: 16px;
      letter-spacing: 0.64px;
      text-transform: uppercase;
    }
    &.underline {
      font-size: 16px;
      border-bottom: 1px solid currentColor;
      line-height: 16px;
      color: currentColor;
    }
    &.bubble {
      font-size: 11px;
      line-height: 16px;
      letter-spacing: 0.64px;
      text-transform: uppercase;
      border: 1px solid ${({ theme }) => theme.color.accent};
      padding: 2px 4px;
      width: fit-content;
      border-radius: 6px;
    }
    &.subtitle1 {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: -0.24px;
    }
  }
`

interface Props {
  type?:
    | 'h50'
    | 'h40'
    | 'h32'
    | 'h24'
    | 'h18'
    | 'h16'
    | 'h15'
    | 'buttonText'
    | 'body1'
    | 'body2'
    | 'body2Emp'
    | 'link'
    | 'caption'
    | 'micro'
    | 'underline'
    | 'bubble'
    | 'subtitle1'
  children?: any
  margin?: string
  width?: string
  whiteSpace?: string
  textAlign?: string
  maxWidth?: string
  minWidth?: string
  userSelect?: string
  color?:
    | 'primary'
    | 'disabled'
    | 'accent'
    | 'accent2'
    | 'inverse'
    | 'secondary'
    | 'warning'
    | 'green'
}

export const Text = forwardRef<HTMLDivElement, Props>(
  (
    {
      textAlign,
      margin,
      color,
      children,
      maxWidth,
      width,
      whiteSpace,
      type = 'body2',
      minWidth,
      userSelect,
    },
    ref,
  ) => (
    <TextStyled
      ref={ref}
      minWidth={minWidth}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      width={width}
      color={color}
      userSelect={userSelect}
      className={type}
      margin={margin}
      maxWidth={maxWidth}
    >
      {children}
    </TextStyled>
  ),
)
