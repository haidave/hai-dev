import styled, { css } from "styled-components"

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  padding-left: 25px;
  width: 100%;
  background-color: var(--color-background);
  color: var(--color-white);
  z-index: 150;

  @media screen and (min-width: 768px) {
    margin-left: 100px;
    padding-right: 0;
    padding-left: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
  }

  @media screen and (min-width: 1920px) {
    margin-left: 50px;
    padding-left: 0;
  }
`

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 100px);

  @media screen and (min-width: 768px) {
    width: calc(100% - 270px);
  }

  @media screen and (min-width: 1440px) {
    width: calc(100% - 370px);
  }

  @media screen and (min-width: 1920px) {
    margin: 0 auto;
    width: 1550px;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
  }
`

export const FooterText = styled.p`
  font-family: var(--font-blender-pro);
  font-size: 0.75rem;
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
        margin-left: 80px;
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
