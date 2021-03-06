import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { css, jsx } from '@emotion/core';


const Nav = ({ state }) => (
  <Container>
    {state.theme.menu.map(([name, link]) => (
      <Item key={name} isSelected={state.router.link === link}>
        <Link link={link}>{name}</Link>
      </Item>
    ))}
  </Container>
);

const underColor = "#fff";
export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
  margin-bottom:2.5rem;
`;

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
    

  & > a {
    display: inline-block;
    text-decoration:none;
    line-height: 2em;
    color: #fff;
    border-bottom: 2px solid
    ${({ isSelected }) => (isSelected ? `${underColor}` : "transparent")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
