import styled from "styled-components";
const Wrapper = styled.div`
  max-width: 1366px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 0;
  margin: auto;
  .logoName {
    font: 400 35px "Clicker Script";
    color: #ffffff;
  }
  .menu {
    width: 273px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font: 500 14px "Playfair Display";
    color: #ffffff;
  }
  .sign {
    width: 183px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sign_in {
    font: 500 14px "Playfair Display";
    color: #ffffff;
  }
  .sign_up {
    font: 500 14px "Playfair Display";
    width: 103px;
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
  }
`;
const Header = () => {
  const nav: String[] = ["Home", "Menu", "About Us", "Contact Us"];
  return (
    <Wrapper>
      <p className="logoName">Caffeine</p>
      <div className="menu">
        {nav.map((el) => (
          <p>{el}</p>
        ))}
      </div>
      <div className="sign">
        <div className="sign_in">Sign in</div>
        <div className="sign_up">Sign Up</div>
      </div>
    </Wrapper>
  );
};

export default Header;
