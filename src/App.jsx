import { useState } from "react";
import { Button, Row, Col, Typography, Flex } from "antd";
import LineTemplate from "./Components/Line/LineTemplate";
import RoseTemplate from "./Components/Rose/RoseTemplate";
import PieTemplate from "./Components/Pie/PieTemplate";
import LineDos from "./Components/LineDos/LineDos";

const { Title } = Typography;

function App() {
  const [activeComponent, setActiveComponent] = useState("LineTemplate");

  const components = {
    LineTemplate: <LineTemplate />,
    LineDos: <LineDos />,
    RoseTemplate: <RoseTemplate />,
    PieTemplate: <PieTemplate />,
  };

  const buttonStyle = { margin: 10 };

  return (
    <>
      <Row justify={"center"}>
        <Title level={2}>Ant Design & Ant Design Chart Implementation</Title>
      </Row>

      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={'center'}>
            <Flex wrap>
              <Button
                type="primary"
                onClick={() => setActiveComponent("LineTemplate")}
                style={buttonStyle}
              >
                Mostrar Graph Lineal simple
              </Button>
              <Button
                type="primary"
                onClick={() => setActiveComponent("LineDos")}
                style={buttonStyle}
              >
                Mostrar Graph Lineal
              </Button>
              <Button
                type="primary"
                onClick={() => setActiveComponent("RoseTemplate")}
                style={buttonStyle}
              >
                Mostrar Graph Roseta
              </Button>
              <Button
                type="primary"
                onClick={() => setActiveComponent("PieTemplate")}
                style={buttonStyle}
              >
                Mostrar Graph Pie
              </Button>
            </Flex>
          </Row>
          <Row justify={"center"}>{components[activeComponent]}</Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
