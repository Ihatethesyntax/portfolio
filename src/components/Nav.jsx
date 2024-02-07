import styled from "styled-components";

const StyledNav = styled.nav`
  height: 5rem;
  background-color: black;
  padding: 2.5rem 8rem;

  display: flex;
  justify-content: space-between;

  h1 {
    color: white;
  }

  div ul {
    pointer: cursor;
    display: flex;
    gap: 3rem;
    list-style: none;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <h1>Andrew</h1>
      <div>
        <ul>
          <li>
            <a href="github.com">
              <img src="/images/icon-github.svg" alt="Github Icon" />
            </a>
          </li>
          <li>
            <a href="linkedin.com">
              <img src="/images/icon-linkedin.svg" alt="LinkedIn Icon" />
            </a>
          </li>
          <li>
            <a href="twitter.com">
              <img src="/images/icon-twitter.svg" alt="Twitter Icon" />
            </a>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
}

export default Nav;
