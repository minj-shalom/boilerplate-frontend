import { Spin } from "antd";
import { Block } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";

export function Spinner() {
  return (
    <Block>
      <Spin size="large" indicator={<LoadingOutlined />} />
    </Block>
  );
}
