import React from "react";
import { List } from "antd"
import { productList1 } from "./mockup";

export const RankingList: React.FC = () => {
  return (
    <div>
      <h1>Ranking List</h1>
      <List
        itemLayout="horizontal"
        dataSource={productList1}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={`${item.id}.${item.title}`}
              description={item.writer}
            />
          </List.Item>
        )}
      />
    </div>
  );
};