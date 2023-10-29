import React from "react";
import NavProfiles from "../Components/NavProfiles";

export default function Layout({ children }) {
  return (
    <>
      <NavProfiles />
      <div>{children}</div>
    </>
  );
}
