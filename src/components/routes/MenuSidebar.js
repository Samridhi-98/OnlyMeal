import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// Route
import Dashboard from "./Dashboard";
import CreateAvail from "./CreateAvail";
import Main from "./Main";
//CSS
import "../../css/master.css";

// images

// Semantic ui
import { Grid, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

const MenuSidebar = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      {/* -------------------------------- ALWAYS SHOWN ON SCREEN------------------------------ */}
      <BrowserRouter>
        
        <Grid columns={1} className="menusidebar">
          <Grid.Column className="gridSidebar1">
            {/* ------------------------------------M E N U ------------------------------------ */}

            <Menu className="inverted navbar fixed">
              <Menu.Item>
                <i
                  className="large content icon "
                  onClick={(e, visible) => setVisible(visible ? false : true)}
                ></i>
              </Menu.Item>
            </Menu>

            {/* ------------------------------------M E N U- End------------------------------------ */}
          </Grid.Column>

          <Grid.Column className="gridSidebar2">
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                className="sidebar-item menu"
                as={Menu}
                animation="slide along"
                icon="labeled"
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width="thin"
              >
                <Link to="/MenuSidebar/">
                  <Menu.Item>
                    <Icon name="globe" />
                    Browse
                  </Menu.Item>
                </Link>

                <Link to="/MenuSidebar/create">
                  <Menu.Item>
                    <Icon name="edit" />
                    Create
                  </Menu.Item>
                </Link>

                <Link to="/">
                  <Menu.Item>
                    <Icon name="sign-out alternate" />
                    Signout
                  </Menu.Item>
                </Link>
              </Sidebar>

              {/* -------------------------------- ALWAYS SHOWN ON SCREEN -ENDS ------------ */}
              <Sidebar.Pusher dimmed={visible}>
                <Segment basic>
                  {/* -------------------------- All Routes ---------------------------- */}

                  <div>
                    <Route path="/MenuSidebar/" exact component={Dashboard} />
                  </div>

                  <div>
                    <Route
                      path="/MenuSidebar/create/"
                      exact
                      component={CreateAvail}
                    />
                  </div>

                  {/* -------------------------- All Routes End ---------------------------- */}
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid>
      </BrowserRouter>
    </div>
  );
};
export default MenuSidebar;
