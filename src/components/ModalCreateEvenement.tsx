import axios from "axios";
import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";

export default function ModalCreateEvenement(props: any) {
  const submit = () => {
    axios
      .post("http://localhost:8000/evenements", {
        date: props.date,
        heure: props.heure,
        details: props.details,
        type_incident: props.type_incident,
        _token: localStorage.getItem("_token"),
      })
      .then((response) => {
        console.log(response);
        props.isOk();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal
      onClose={() => props.setOpen(false)}
      onOpen={() => props.setOpen(true)}
      open={props.open}
    >
      <Modal.Header>Enregistrement d'un Evenement</Modal.Header>
      <Modal.Content>
        <Form onSubmit={submit}>
          <Form.Select
            fluid
            label="Type d'Incident"
            name="type_incident"
            options={props.optionIncidents}
            onChange={props.handleChange}
            placeholder="Type d'Incident"
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-prenom"
              label="Date"
              name="date"
              type="date"
              placeholder="Date"
              value={props.date}
              onChange={props.handleChange}
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-nom"
              label="Heure"
              name="heure"
              type="time"
              placeholder="Heure"
              value={props.heure}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label="Détails"
            name="details"
            placeholder="Description de l'evenement"
            value={props.details}
            onChange={props.handleChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => props.setOpen(false)}>
          Annuler
        </Button>
        <Button
          content="Enregistrer"
          labelPosition="right"
          icon="checkmark"
          positive
          type="submit"
          onClick={() => submit()}
        />
      </Modal.Actions>
    </Modal>
  );
}
