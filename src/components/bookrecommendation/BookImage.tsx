import React from "react";
import { Image, Typography } from "antd"

interface PropsType {
  id: string | number;
  imageSrc: string;
  writer: string;
  title: string;
}

export const BookImage: React.FC<PropsType> = ({id, imageSrc, writer, title}) => {
  return (
    <>
        <Image src={imageSrc} height={180} width={120} />
      <div>
        <Typography.Text type="secondary" strong>{title.slice(0, 25)}</Typography.Text>
        <br/>
        <Typography.Text type="secondary">-{writer}</Typography.Text>
      </div>
    </>
  );
}