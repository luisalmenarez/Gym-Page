import Link from "next/link";
import React from "react";
import MenuItem from "../ui/menu-item";
import ButtonPrimary from "../ui/button-primary";

const MainMenu = () => {
  return (
    <ul className="flex">
      <MenuItem
        href="#Home"
        text="Inicio"
        className="border-b-2 border-primary"
      />
      <MenuItem href="#About" text="Sobre mí" />
      <MenuItem href="#Services" text="Servicios" />
      <MenuItem href="#Contact" text="Contacto" />
      <ButtonPrimary type="button" text="Solicita tu asesoría" />
    </ul>
  );
};

export default MainMenu;
