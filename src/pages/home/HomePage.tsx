import React from "react";
import styles from "./HomePage.module.css"
import { Header, Footer, Carousel, BookRecommendation, BusinessPartners, RankingList } from "../../components";
import { Row, Col, Typography } from 'antd'
import { productList1 } from './mockups';


export class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles['Page-content']}>
          <Row style={{ marginTop: 20 }} gutter={16}>
            <Col span={6} offset={2}>
              <RankingList />
            </Col>
            <Col span={12} offset={2}>
                <Carousel />
              <Row style={{ marginTop: 60 }}>
                <h1>Still wondering what book to read?</h1>
                <br />
                <h2>Choose DragonBall read, we have a rich book
                  list and different types of books for you to
                  choose from, allowing you to find the book
                  that suits you.</h2>
              </Row>
              <Row style={{ marginTop: 60 }}>
                <h1>Want to reference other people's wishlists?</h1>
                <br />
                <h2>Register and join the community to find users with 
                  the same reading preferences as you. Maybe their 
                  book list is very suitable for you.</h2>
              </Row>
            </Col>
          </Row>
          <BookRecommendation
            title={<Typography.Title level={3} type="warning">Recommendation Book</Typography.Title>}
            products={productList1}
          />
          <BusinessPartners />
        </div>
        <Footer />
      </>
    )
  }
}