import styled from 'styled-components'

export const InputSlider: any = styled.input`
  &&& {
    all: revert;
    box-sizing: border-box;

    z-index: 1;

    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: ${({ sliderBorderRadius }: any) =>
      sliderBorderRadius || '0 0 5px 5px'};
    background: ${({ percentage, theme }: any) =>
      `linear-gradient(90deg, ${theme.color.gradient1} 0%, ${theme.color.gradient2} ${percentage}, ${theme.color.ui300} ${percentage} 100%)`};
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &:hover {
      background: ${({ percentage, theme }: any) =>
        `linear-gradient(90deg, ${theme.color.gradient1} 0%, ${theme.color.gradient2} ${percentage}, #b0b3b8 ${percentage} 100%)`};
    }

    &::-webkit-slider-thumb {
      all: revert;
      -webkit-appearance: none;
      border: none;
      outline: none;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }: any) => theme.color.inverse};
      border-radius: 50%;
      box-shadow: 0 0.5px 4px rgba(0, 0, 0, 0.12),
        0 6px 13px rgba(0, 0, 0, 0.12);

      &:hover {
        width: 24px;
        height: 24px;
      }
    }

    &::-moz-range-thumb {
      all: revert;
      -webkit-appearance: none;
      border: none;
      outline: none;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }: any) => theme.color.inverse};
      border-radius: 50%;
      box-shadow: 0 0.5px 4px rgba(0, 0, 0, 0.12),
        0 6px 13px rgba(0, 0, 0, 0.12);

      &:hover {
        width: 24px;
        height: 24px;
      }
    }

    &::-ms-thumb {
      all: revert;
      -webkit-appearance: none;
      border: none;
      outline: none;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }: any) => theme.color.inverse};
      border-radius: 50%;
      box-shadow: 0 0.5px 4px rgba(0, 0, 0, 0.12),
        0 6px 13px rgba(0, 0, 0, 0.12);

      &:hover {
        width: 24px;
        height: 24px;
      }
    }

    &::-webkit-slider-runnable-track {
      all: revert;
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }

    &::-moz-range-track {
      all: revert;
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }

    &::-ms-track {
      all: revert;
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }

    &:active {
      cursor: grabbing;
    }
  }
`
