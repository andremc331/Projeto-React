import React, { useState } from "react";
import Input from "../components/Input";
import styled from "styled-components";

const Main: React.FC = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleRedChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRed(Number(e.target.value));
  const handleGreenChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGreen(Number(e.target.value));
  const handleBlueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBlue(Number(e.target.value));

  return (
    <Container>
      <Box style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
        {" "}
        <InputWrapper>
          <Input label="Red" value={red} onChange={handleRedChange} />
          <Input label="Green" value={green} onChange={handleGreenChange} />
          <Input label="Blue" value={blue} onChange={handleBlueChange} />
        </InputWrapper>
      </Box>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  box-align: center
`;

const Box = styled.div`
  width: 700px;
  height: 200px;
  margin: 20px 0;
  border-radius: 20px;
`;

const InputWrapper = styled.div`
  margin-top: 70px;
  margin-left: 210px;
  display: flex;
  align-items: center;
  width: 300px;
  color: aliceblue;
`;