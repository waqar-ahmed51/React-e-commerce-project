import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Title = styled.h1`
  padding: 20px 0px 20px 0px;
  font-size: 20px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin: 20px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegistreForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputField = styled.input`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  width: 30vw;
`;
const SubmitButton = styled.button`
  border: none;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const ForgetPassword = styled.p`
  display: flex;
  font-size: 15px;
  color: #757575;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
    color: black;
  }
`;

const SignIn = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <RegistreForm>
          <Title>SIGN IN TO YOUR ACCOUNT</Title>
          <InputField placeholder="Email"></InputField>
          <InputField placeholder="Password" type="password"></InputField>
          <ForgetPassword>FORGET PASSWORD</ForgetPassword>
          <SubmitButton>SIGN IN</SubmitButton>
        </RegistreForm>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SignIn;
