import React from "react";
import { Layout, Typography } from "antd";

export const Footer : React.FC = () => {
  return (
    <Layout.Footer>
        <Typography.Title level={3} style={{textAlign: 'center'}}>
          Copyright @ 9900-F18A-dragonball
        </Typography.Title>
    </Layout.Footer>
  );
}