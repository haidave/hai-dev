import styled, { css } from "styled-components"

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 100px;
  padding-right: 100px;
  padding-left: 100px;
  width: calc(100% - 370px);
  background-color: var(--color-background);
  color: var(--color-white);
  z-index: 199;
  outline: 1px solid red;

  @media screen and (min-width: 768px) {
    padding-right: 0;
    padding-left: 50px;
    width: calc(100% - 270px);
  }

  @media screen and (min-width: 1440px) {
    margin-left: 100px;
    padding-right: 100px;
    padding-left: 100px;
    width: calc(100% - 370px);
  }

  @media screen and (min-width: 1920px) {
    left: 50%;
    transform: translateX(-50%);
    margin-left: 50px;
    width: 1550px;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`

export const FooterText = styled.p`
  font-family: var(--font-blender-pro);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);

  ${props =>
    props.gray &&
    css`
      display: none;
      color: var(--color-gray-light);

      @media screen and (min-width: 900px) {
        display: block;
      }
    `}

  ${props =>
    props.divider &&
    css`
      position: relative;
      margin-left: 80px;
      padding-left: 30px;

      &::before,
      &::after {
        content: "";
        display: none;

        position: absolute;
        right: 100%;
        top: calc(50% - 1px);
        height: 1px;
      }

      &::before {
        width: 50px;
        background-color: var(--color-gray-light);
      }

      &::after {
        width: 40px;
        border-left: 5px solid var(--color-white);
        border-right: 5px solid var(--color-white);
      }

      @media screen and (min-width: 900px) {
        &::before,
        &::after {
          display: block;
        }
      }
    `}

    @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.25rem;
  }
`
