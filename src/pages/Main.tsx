import React from "react";
import { useColor } from "../hooks/Hooks";
import styled from "styled-components";
import Input from "../components/Input";
import { saveColor } from "../services/Api";

const Main: React.FC = () => {
  const { color, setColor } = useColor();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    colorType: keyof typeof color
  ) => {
    let value = Number(e.target.value);
    value = Math.min(Math.max(value, 0), 255); // Garante que o valor esteja entre 0 e 255
    setColor((prev) => ({ ...prev, [colorType]: value }));
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Tab") {
      await saveColor(color);
    }
  };

  return (
    <Container>
      <Box style={{ backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` }}>
        <InputWrapper>
          <Input
            label="Red"
            value={color.red}
            onChange={(e) => handleChange(e, 'red')}
            onKeyDown={handleKeyDown}
          />
          <Input
            label="Green"
            value={color.green}
            onChange={(e) => handleChange(e, 'green')}
            onKeyDown={handleKeyDown}
          />
          <Input
            label="Blue"
            value={color.blue}
            onChange={(e) => handleChange(e, 'blue')}
            onKeyDown={handleKeyDown}
          />
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
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 200px;
  background-color: magenta;
  color: white;
  border-radius: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

/* const Box = styled.div`
  width: 700px;
  height: 200px;
  margin: 20px 0;
  border-radius: 20px;
`; */
