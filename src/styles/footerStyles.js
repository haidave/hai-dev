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
  margin-bottom: 50px;
`

export const FooterText = styled.p`
  font-family: var(--font-blender-pro);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);

  ${props =>
    props.gray &&
    css`
      color: var(--color-gray-light);
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
    `}

    @media screen and (min-width: 1920px) {
    font-size: 1.25rem;
  }
`
