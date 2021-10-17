import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SideBarMenu from "../components/SideBarMenu";

export default class UserHomePage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeItem: "",
      visible: "",
    };
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <SideBarMenu />
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid.Row></Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
