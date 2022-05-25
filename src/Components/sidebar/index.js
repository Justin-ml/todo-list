import React, { useState } from "react";
import { Sidebar, Menu, Icon, Grid } from "semantic-ui-react";
import "./sideBar.css";
import { Link, Outlet } from "react-router-dom";

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  const showSidebar = () => setVisible(!visible);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Icon
          size="large"
          name="sidebar"
          className="sideBarButton"
          onClick={showSidebar}
        />
      </Grid.Column>

      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item>
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item>
          <Link to="/add">
            <Icon name="add" />
            Add
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/list">
          <Icon name="list" />
          List
          </Link>
        </Menu.Item>
      </Sidebar>
      <Outlet />
    </Grid>
  );
};

export default SideBar;
