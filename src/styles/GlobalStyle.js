import styled, { createGlobalStyle, css } from "styled-components"
import { normalize } from "styled-normalize"
import fonts from "./fonts"
import variables from "./variables"

import { Link } from "gatsby"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}
  ${variables}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    text-decoration: none;
    scroll-behavior: smooth;
  }

  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow: hidden;
    font-family: var(--font-arame);
    background-color: var(--color-background);
    font-size: 16px;
  }

  a {
    color: currentColor;
  }
`

export default GlobalStyle

export const Section = styled.section`
  position: relative;
  padding-right: 100px;
  padding-left: 100px;
  width: calc(100% - 270px);
  height: 100%;
  z-index: 2;
`

export const SectionTitleWrapper = styled.div`
  position: absolute;
  top: 55px;
  display: flex;
  align-items: center;
  color: var(--color-white);
  font-size: 16px;
  overflow: hidden;
`

export const SectionTitleIndex = styled.div`
  position: relative;
  margin-right: 30px;
  padding-left: 20px;
  padding-right: 20px;
  transform-origin: bottom;
  transition: transform 0.9s cubic-bezier(0.4, 0.25, 0, 1);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc(100% - 3px);
    left: 0;
    height: 2px;
  }

  &::before {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
  }

  &::after {
    width: calc(100% - 10px);
    border-left: 5px solid var(--color-white);
    border-right: 5px solid var(--color-white);
  }
`

export const SectionTitleText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  ${props =>
    props.column &&
    css`
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `}
`
export const StyledLink = styled(Link)`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 15px 30px;
  background-color: var(--color-white);
  color: var(--color-dark-blue);
  border: 1px solid transparent;
  transition: background-color 0.25s ease-out, color 0.25s ease-out,
    border-color 0.25s ease-out;
  will-change: background-color, color, border-color;

  &:hover {
    background-color: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
  }
`

export const Button = styled.a`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 15px 30px;
  background-color: var(--color-white);
  color: var(--color-dark-blue);
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  z-index: 50;
  transition: background-color 0.25s ease-out, color 0.25s ease-out,
    border-color 0.25s ease-out;
  will-change: background-color, color, border-color;

  &:hover {
    background-color: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
  }

  &:first-child {
    margin-right: 1.5rem;
  }

  ${props =>
    props.secondary &&
    css`
      border: 1px solid var(--color-white);
      background-color: transparent;
      color: var(--color-white);

      &:hover {
        background-color: var(--color-red);
        border-color: var(--color-red);
      }
    `}
`

export const Divider = styled.div`
  margin-top: 1rem;
  width: 10%;
  height: 6px;
  background-color: var(--color-red);
`
