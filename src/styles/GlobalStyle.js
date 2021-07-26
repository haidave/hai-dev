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

export const Wrapper = styled.div`
  height: 100vh;
  max-height: -webkit-fill-available; // https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser
  background-color: var(--color-background);

  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
  }
`

export const Section = styled.section`
  position: relative;
  padding-top: 7rem;
  padding-right: 25px;
  padding-left: 25px;
  width: calc(100% - 100px);
  height: calc(100% - 7rem - 40px);
  background-color: var(--color-background);
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: calc(100% - 320px);
    padding-right: 100px;
    padding-left: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: calc(100% - 270px);
  }

  @media screen and (min-width: 1920px) {
    margin: 0 auto;
    width: 1550px;
  }

  ${props =>
    props.scrollable &&
    css`
      @media screen and (min-width: 320px) {
        width: calc(100% - 50px);
        height: auto;
        padding-bottom: 7rem;
      }

      @media screen and (min-width: 768px) {
        width: calc(100% - 150px);
      }

      @media screen and (min-width: 1440px) {
        width: calc(100% - 250px);
      }
    `}
`

export const SectionTitleWrapper = styled.div`
  position: absolute;
  top: 5.5rem;
  display: flex;
  align-items: center;
  color: var(--color-white);
  font-size: 1rem;
  overflow: hidden;

  @media screen and (max-width: 370px) {
    font-size: 0.75rem;
  }

  @media screen and (min-width: 768px) {
    top: 3rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.25rem;
  }
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

  @media screen and (min-width: 768px) {
    margin: 0;
    height: 100%;
  }

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
  margin-top: 1.5rem;
  padding: 15px 20px;
  width: calc(100% - 50px);
  background-color: var(--color-white);
  color: var(--color-dark-blue);
  font-size: 0.75rem;
  border: 1px solid transparent;
  transition: background-color 0.25s ease-out, color 0.25s ease-out,
    border-color 0.25s ease-out;
  will-change: background-color, color, border-color;

  &:hover {
    background-color: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
  }

  @media screen and (min-width: 600px) {
    margin-top: 2rem;
    padding: 15px 30px;
    width: auto;
    font-size: 1rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.25rem;
  }
`

export const Button = styled.a`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 15px 20px;
  width: calc(100% - 50px);
  background-color: var(--color-white);
  color: var(--color-dark-blue);
  font-size: 0.75rem;
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

  @media screen and (min-width: 600px) {
    margin-top: 2rem;
    padding: 15px 30px;
    width: auto;
    font-size: 1rem;

    &:first-child {
      margin-right: 1.5rem;
    }
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.25rem;
  }
`

export const Divider = styled.div`
  margin-top: 1rem;
  width: 15%;
  height: 0.3rem;
  background-color: var(--color-red);

  @media screen and (min-width: 600px) {
    width: 10%;
    height: 0.4rem;
  }

  @media screen and (min-width: 1440px) {
    height: 0.5rem;
  }

  @media screen and (min-width: 1920px) {
    height: 0.75rem;
  }
`
