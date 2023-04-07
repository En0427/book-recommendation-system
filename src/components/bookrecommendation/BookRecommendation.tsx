import React from "react";
import styles from "./BookRecommendation.module.css";
import { Row, Col, Divider } from "antd";
import { BookImage } from "./BookImage";
import { Quotes } from "../../components";


interface PropsType {
  title: JSX.Element;
  products: any[];
}

export const BookRecommendation: React.FC<PropsType> = ({ title, products }) => {
  return (
    <div className={styles.Content}>
      <Row>
        <Col span={8} offset={1}>
          <br/>
          <h1>Quotes</h1>
          <Quotes />
        </Col>
        <Col span={12} offset={2}>
          <Divider orientation='left'>{title}</Divider>
          <Row gutter={10}>
            <Col span={6}>
              <BookImage
                id={products[0].id}
                title={products[0].title}
                imageSrc={products[0].bookPictures[0].url}
                writer={products[0].writer}
              />
            </Col>
            <Col span={6}>
              <BookImage
                id={products[1].id}
                title={products[1].title}
                imageSrc={products[1].bookPictures[0].url}
                writer={products[1].writer}
              />
            </Col>
            <Col span={6}>
              <BookImage
                id={products[2].id}
                title={products[2].title}
                imageSrc={products[2].bookPictures[0].url}
                writer={products[2].writer}
              />
            </Col>
            <Col span={6}>
              <BookImage
                id={products[3].id}
                title={products[3].title}
                imageSrc={products[3].bookPictures[0].url}
                writer={products[3].writer}
              />
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={6}>
              <BookImage
                id={products[4].id}
                title={products[4].title}
                imageSrc={products[4].bookPictures[0].url}
                writer={products[4].writer}
              />
            </Col>
            <Col span={6}>
              <BookImage
                id={products[5].id}
                title={products[5].title}
                imageSrc={products[5].bookPictures[0].url}
                writer={products[5].writer}
              />
            </Col>
            <Col span={6}>
              <BookImage
                id={products[6].id}
                title={products[6].title}
                imageSrc={products[6].bookPictures[0].url}
                writer={products[6].writer}
              />
            </Col>
            <Col span={6}>
              <BookImage
                id={products[7].id}
                title={products[7].title}
                imageSrc={products[7].bookPictures[0].url}
                writer={products[7].writer}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};