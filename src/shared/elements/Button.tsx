/* eslint-disable react/display-name */

import React, {
  forwardRef,
  MouseEvent,
  PropsWithChildren,
  TouchEvent,
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'
import { Text } from '.'

const ButtonElem: any = styled.button`
  &&& {
    all: revert;
    position: relative;
    font-family: Inter, sans-serif;
    width: ${({ width }: any) => width};
    margin: ${({ margin }: any) => margin || '0'};
    cursor: ${({ disabled }: any) => (disabled ? 'default' : 'pointer')};
    align-self: ${({ alignSelf }: any) => alignSelf};
    white-space: ${({ whiteSpace }: any) => whiteSpace};

    min-width: inherit;
    border-radius: ${({ borderRadius }: any) => borderRadius || '6px'};
    font-style: normal;
    font-weight: ${({ fontWeight }: any) => fontWeight || 600};
    font-size: ${({ fontSize }: any) => fontSize || '16px'};
    line-height: 24px;
    text-align: center;
    border: 2px solid transparent;
    box-shadow: none;
    -webkit-tap-highlight-color: transparent;
    position: ${({ position }: any) => position};
    top: ${({ top }: any) => top};
    right: ${({ right }: any) => right};
    outline: none;

    text-transform: ${({ textTransform }: any) => textTransform};

    &:focus {
      border-color: ${({ theme, mouseDown }: any) =>
        mouseDown ? 'transparent' : theme.color.semMain};
      outline: ${({ isOutline, theme }: any) =>
        isOutline ? '1px solid ' + theme.color.accent : 'none'};
    }

    &.primary {
      height: 45px;
      background: ${({ theme, disabled }) => {
        const color = theme.color.actionColor
          ? theme.color.actionColor
          : theme.color.accentSecondary
        return disabled ? theme.color.ui50 : color
      }};
      color: ${({ theme, disabled }) =>
        disabled ? theme.color.disabled : theme.color.inverse};
      box-shadow: ${({ theme, shadow }: any) => shadow || theme.shadows.low};
      transition: all 0.25s ease;

      &:hover {
        background: ${({ theme, disabled }) =>
          theme.color.actionColor2
            ? disabled || theme.color.actionColor2
            : disabled || theme.color.accentSecondary2};
      }

      &:focus {
        background: ${({ theme }) =>
          theme.color.actionColor
            ? theme.color.actionColor
            : theme.color.accentSecondary};
      }

      &:active {
        background: ${({ theme }) =>
          theme.color.actionColor2
            ? theme.color.actionColor2
            : theme.color.accentSecondary2};
      }
    }

    &.secondary {
      height: 45px;
      background: ${({ theme, disabled }) =>
        disabled ? theme.color.ui50 : theme.color.inverse};
      color: ${({ theme, disabled }) =>
        disabled ? theme.color.disabled : theme.color.primary};
      box-shadow: ${({ theme }) => theme.shadows.low};
      transition: all 0.25s ease;

      &:hover {
        background: ${({ theme, disabled }) => disabled || theme.color.ui50};
      }

      &:focus {
        background: ${({ theme }) => theme.color.inverse};
      }

      &:active {
        background: ${({ theme }) => theme.color.ui50};
      }
    }

    &.bubble {
      padding: 4px 8px;
      border-radius: 100px;
      background: ${({ background, theme }: any) => theme.color[background]};
    }

    &.icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${({ iconSize }: any) => iconSize || '48px'};
      width: ${({ iconSize }: any) => iconSize || '48px'};
      padding: 0;
      background: none;
      color: ${({ theme, colorIcon }: any) =>
        theme.color[colorIcon] || theme.color.primaryIcon};
      transition: all 0.25s ease;

      &:hover {
        color: ${({ theme, disabled, colorIconHover }: any) =>
          disabled || theme.color[colorIconHover] || theme.color.secondaryIcon};
      }

      &:focus {
        color: ${({ theme, colorIcon }: any) =>
          theme.color[colorIcon] || theme.color.primaryIcon};
      }

      &:active {
        color: ${({ theme }) => theme.color.secondaryIcon};
      }
    }

    &.tertiary {
      padding: 0;
      display: flex;
      align-items: center;
      height: 27px;
      background: none;
      color: ${({ theme, disabled }) =>
        disabled ? theme.color.disabled : theme.color.accent};
      transition: all 0.25s ease;

      &:hover {
        color: ${({ theme, disabled }) => disabled || theme.color.accent2};
      }

      &:focus {
        color: ${({ theme }) => theme.color.accent};
      }

      &:active {
        color: ${({ theme }) => theme.color.accent2};
      }
    }

    &.link {
      display: flex;
      align-items: center;
      height: 27px;
      background: none;
      color: ${({ theme, disabled, colorLink }: any) =>
        disabled
          ? theme.color.disabled
          : theme.color[colorLink] || theme.color.accent};
      transition: all 0.25s ease;
      padding: 0;
      border: none;

      &:hover {
        color: ${({ theme, disabled, colorLinkHover }: any) =>
          disabled || theme.color[colorLinkHover] || theme.color.accent2};
      }

      &:focus {
        color: ${({ theme, colorLink }: any) =>
          theme.color[colorLink] || theme.color.accent};
      }

      &:active {
        color: ${({ theme }) => theme.color.accent2};
      }
    }

    &.tabs {
      position: relative;
      bottom: -1px;
      padding: 12px 20px;
      background: ${({ background, theme }: any) =>
        theme.color[background] || background || theme.color.ui50};
      color: ${({ theme, disabled }) =>
        disabled ? theme.color.disabled : theme.color.primary};
      border: 1px solid transparent;
      border-bottom: ${({ theme }) => `1px solid ${theme.color.ui200}`};

      ${({ active, theme, mobile }: any) =>
        active &&
        `
    background: ${mobile ? theme.color.accent3 : theme.color.inverse};
    border-radius: 6px 6px 0 0;
    border: 1px solid ${theme.color.ui200};
    border-bottom-color: ${mobile ? theme.color.accent3 : theme.color.inverse};
  `}
    }
  }
`

interface Props {
  type?:
    | 'primary'
    | 'secondary'
    | 'icon'
    | 'tertiary'
    | 'link'
    | 'tabs'
    | 'bubble'
  margin?: string
  width?: string
  iconSize?: string
  disabled?: boolean
  position?: string
  underlineIcon?: any
  alignSelf?: string
  fontWeight?: number
  active?: boolean
  textTransform?: string
  background?: string
  right?: string
  top?: string
  colorIcon?: string
  borderRadius?: string
  colorIconHover?: string
  whiteSpace?: string
  shadow?: string
  mobile?: boolean
  tabIndex?: string
  colorLink?: string
  fontSize?: string
  colorLinkHover?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLButtonElement>) => void
  onTouchStart?: (e: TouchEvent<HTMLButtonElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLButtonElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void
  onTouchEnd?: (e: TouchEvent<HTMLButtonElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLButtonElement>) => void
  onMouseOut?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      tabIndex,
      onClick,
      fontSize,
      fontWeight,
      colorLink,
      iconSize,
      shadow,
      onMouseOut,
      onMouseOver,
      alignSelf,
      width,
      colorLinkHover,
      children,
      disabled,
      margin,
      position,
      type = 'link',
      active,
      underlineIcon,
      textTransform,
      background,
      top,
      right,
      borderRadius,
      colorIconHover,
      colorIcon,
      onMouseDown,
      onTouchStart,
      onMouseUp,
      onMouseLeave,
      onTouchEnd,
      mobile,
      whiteSpace,
    },
    ref,
  ) => {
    const [mouseDown, setMouseDown] = useState(false)
    const [isOutline, setIsOutline] = useState(false)

    const setState = () => {
      setMouseDown(true)
    }

    const handleFirstTab = event => {
      if (event.keyCode === 9) {
        setIsOutline(true)
        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
      }
    }

    const handleMouseDownOnce = () => {
      setIsOutline(false)
      window.removeEventListener('mousedown', handleMouseDownOnce)
      window.addEventListener('keydown', handleFirstTab)
    }

    useEffect(() => {
      window.addEventListener('keydown', handleFirstTab)
      return () => {
        window.removeEventListener('keydown', handleFirstTab)
      }
    }, [])

    useEffect(() => {
      document.addEventListener('mousedown', setState)
      document.addEventListener('keydown', setState)

      return () => {
        document.removeEventListener('mousedown', setState)
        document.removeEventListener('keydown', setState)
      }
    }, [])

    return (
      <ButtonElem
        fontWeight={fontWeight}
        fontSize={fontSize}
        colorLinkHover={colorLinkHover}
        colorLink={colorLink}
        tabIndex={tabIndex}
        isOutline={isOutline}
        whiteSpace={whiteSpace}
        shadow={shadow}
        iconSize={iconSize}
        mobile={mobile}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        colorIconHover={colorIconHover}
        colorIcon={colorIcon}
        borderRadius={borderRadius}
        right={right}
        top={top}
        alignSelf={alignSelf}
        background={background}
        className={type}
        disabled={disabled}
        width={width}
        margin={margin}
        position={position}
        active={active}
        textTransform={textTransform}
        mouseDown={mouseDown}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchEnd={onTouchEnd}
        ref={ref}
      >
        {type === 'tertiary' ? (
          <>
            {underlineIcon}
            <Text margin="0 0 0 5px" type="underline">
              {children}
            </Text>
          </>
        ) : (
          children
        )}
      </ButtonElem>
    )
  },
)
