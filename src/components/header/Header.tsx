import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown, Space, Avatar } from "antd";
//import type { MenuProps } from 'antd';
import { GlobalOutlined, UserOutlined } from "@ant-design/icons"
import { Readplan } from "../drawer";
import { useNavigate } from "react-router-dom";

// const onMenuClick: MenuProps['onClick'] = (e) => {
//   console.log('click', e);
// };

// const items = [
//   {
//     key: '1',
//     label: 'English',
//   },
//   {
//     key: '2',
//     label: '中文',
//   },
// ];

export const Header: React.FC = () => {
  let navigate = useNavigate();
  return (
    <div className={styles['App-header']}>
      <div className={styles['Top-header']}>
        <div className={styles.inner}>
          <Typography.Text strong>Easily retrieve your reading</Typography.Text>
          <Space>
          <Dropdown.Button 
            style={{ marginLeft: 15 }} 
            icon={<GlobalOutlined />}
            // menu={{ items, onClick: onMenuClick }}
            overlay={
              <Menu>
                <Menu.Item>English</Menu.Item>
                <Menu.Item>中文</Menu.Item>
              </Menu>
            }
          >Language</Dropdown.Button>
          </Space>
          <Avatar icon={<UserOutlined />} />
          <Button.Group className={styles['Button-group']}>
          <Button onClick={() => navigate("register")}>register</Button>
          <Button onClick={() => navigate("signIn")}>signin</Button>
        </Button.Group>
      </div>
    </div>
    <Layout.Header className={styles['Main-header']}>
      <img src={logo} alt="logo" className={styles['App-logo']} />
      <Typography.Title level={3} className={styles.Title}>DragonBall </Typography.Title>
      <Typography.Title level={3} className={styles.Title2}>Read</Typography.Title>
      <Input.Search 
        placeholder='please enter the destination, theme or keyword'
        className={styles['Search-Input']}
        onSearch={(keyword) => navigate("/search/" + keyword)}
         />
    </Layout.Header>
    <Menu mode={"horizontal"} className={styles['Main-menu']}>
      <Menu.Item key={1}>Home</Menu.Item>
      <Menu.Item key={2}>Books</Menu.Item>
      <Menu.Item key={3}>Ranking List</Menu.Item>
      <Menu.Item key={4}>My Wishlist</Menu.Item>
      <Menu.Item key={5}><Readplan /></Menu.Item>
    </Menu>
  </div>);
};