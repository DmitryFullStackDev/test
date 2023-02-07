import styled from 'styled-components'

export const InputWrapper: any = styled.div`
  &&& {
    all: revert;
    width: 100%;
    background: ${({ theme, disabled }: any) =>
      disabled ? theme.color.inverse : theme.color.ui50};
    position: relative;
    border-radius: ${({ focusBorder }: any) => focusBorder || '6px'};
    border: 1px solid
      ${({ theme, isError }: any) => (isError ? 'red' : theme.color.ui300)};
    box-shadow: ${({ theme }) => theme.shadows.low};
    border-right: ${({ theme, isBorderRightActive }: any) =>
      isBorderRightActive && `1px solid ${theme.color.accent}`};
    border-left: ${({ borderLeft }: any) => borderLeft};

    &:hover {
      box-shadow: ${({ theme, disabled }: any) =>
        disabled ? theme.shadows.low : theme.shadows.medium};
      background: ${({ theme }: any) => theme.color.inverse};
    }

    &:focus-within {
      border-radius: ${({ focusBorder }: any) => focusBorder || '6px'};
      border: 1px solid
        ${({ theme, isError }: any) => (isError ? 'red' : theme.color.accent)};
      border-left: ${({ borderLeft }: any) => borderLeft};
    }
  }
`
