import axios from "axios";
import React, { Component } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import ModalCreateEvenement from "../components/ModalCreateEvenement";
import SideBarMenu from "../components/SideBarMenu";

export default class EvenementPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
      date: "",
      heure: "",
      details: "",
      type_incident: "",
      optionIncidents: [],
    };
  }

  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = (e: any, data: any) => {
    this.setState({ [data.name]: data.value });
  };

  fetchTypeIncidents = () => {
    axios
      .get("http://localhost:8000/type-incidents")
      .then((response) => {
        this.setState({ optionIncidents: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  fetchEvenements = () => {
    const _token = localStorage.getItem("_token");
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .get("http://localhost:8000/evenements/" + _token)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  isOk = () => {
    this.setOpen();
  };

  showModal = () => {
    let listOptions: { key: any; text: any; value: any }[] = [];

    this.state.optionIncidents.forEach((element: any) => {
      listOptions.push({
        key: element.id,
        text: element.libelle,
        value: element.id,
      });
    });

    this.setState({ optionIncidents: listOptions });

    this.setOpen();
  };

  componentDidMount() {
    this.fetchEvenements();
    this.fetchTypeIncidents();
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <SideBarMenu />
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid.Row>
              <br />
              <Header as="h3">
                Déclaration des Evenements{" "}
                <Icon
                  name="add circle"
                  color="blue"
                  size="big"
                  link
                  onClick={() => this.showModal()}
                />
              </Header>
              <br />
            </Grid.Row>
            {this.state.open ? (
              <ModalCreateEvenement
                handleChange={this.handleChange}
                date={this.state.date}
                heure={this.state.heure}
                details={this.state.details}
                optionIncidents={this.state.optionIncidents}
                open={this.state.open}
                setOpen={this.setOpen}
                type_incident={this.state.type_incident}
                isOk={this.isOk}
              />
            ) : (
              ""
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
