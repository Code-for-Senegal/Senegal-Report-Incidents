import React from "react";
import { Menu } from "semantic-ui-react";

export default function SideBarMenu() {
  let activeItem: string = "";

  return (
    <Menu vertical size="huge">
      <Menu.Item>
        <Menu.Header>Tableau de Bord</Menu.Header>
        <Menu.Menu>
          <Menu.Item name="accueil" active={activeItem === "accueil"} />
          <Menu.Item
            href="/evenements"
            name="evenements"
            active={activeItem === "evenements"}
          />
          <Menu.Item name="incidents" active={activeItem === "incidents"} />
          <Menu.Item name="Mon compte" active={activeItem === "Mon Compte"} />
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
}
