import { Redirect } from "@reach/router";
import Cookies from "js-cookie";
import React from "react";

export default function logout() {
  Cookies.remove("auth_token");

  return <Redirect to="/login" noThrow></Redirect>;
}
