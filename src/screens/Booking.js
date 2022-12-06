import React, { useState } from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import swal from "sweetalert";

const Container = styled.div`
  width: 100%;
  padding: 110px 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  gap: 50px;
  @media (max-width: 1000px) {
    padding: 110px 30px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 110px 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.black};
  padding: 50px 40px 70px 40px;
  border-radius: 7px;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    padding: 50px 20px 70px 20px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 40px;
  gap: 30px;
  @media (max-width: 600px) {
    padding: 0px 0px;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 45px;
  background-color: #f6f6f9;
  padding: 0px 20px;
  border-radius: 2px;
  font-family: "Open Sans", sans-serif;
`;
const TextArea = styled.textarea`
  border: none;
  outline: none;
  height: 100px;
  resize: vertical;
  background-color: #f6f6f9;
  padding: 15px 20px;
  border-radius: 2px;
  font-family: "Open Sans", sans-serif;
`;

const HeadingMain = styled.p`
  font-size: 48px;
  font-weight: 500;
  color: white;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const HeadingSecond = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #11202a;
  font-family: "Quicksand", sans-serif;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #1d394b;
  line-height: 30px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  width: auto;
  height: auto;
  text-decoration: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 500;
  padding: 18px 32px;
  color: white;
  background-color: ${({ theme }) => theme.orange};
  border: solid ${({ theme }) => theme.orange};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
  :hover {
    background-color: ${({ theme }) => theme.orangeHover};
    color: ${({ theme }) => theme.black};
  }
`;

const ButtonA = styled.a`
  width: auto;
  height: auto;
  text-decoration: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 500;
  padding: 18px 32px;
  color: white;
  background-color: ${({ theme }) => theme.orange};
  border: solid ${({ theme }) => theme.orange};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
  :hover {
    background-color: ${({ theme }) => theme.orangeHover};
    color: ${({ theme }) => theme.black};
  }
`;

const Span = styled.span`
  display: flex;
  gap: 10px;
`;

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitText, setSubmitText] = useState("Thanks for submited form");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    swal("Good job!", "", "success");
  };
  return (
    <Container id="booking">
      <Left>
        <HeadingMain>Ask Your Queries</HeadingMain>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name*"
            required
            pattern=".*\S+.*"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email*"
            required
          />
          <TextArea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Message"
          ></TextArea>
          <span>
            <Button>SEND</Button>
          </span>
        </Form>
      </Left>
      <Right>
        <HeadingSecond>Ask Your Queries</HeadingSecond>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Text>
        <Text>Or</Text>
        <ButtonA href="#home">
          <Span>
            MAKE AN BOOKING
            <FaLongArrowAltRight />
          </Span>
        </ButtonA>
      </Right>
    </Container>
  );
};

export default Booking;
