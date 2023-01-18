import Cookies from "js-cookie";
import Menu from "./Menu";
import { Redirect } from "@reach/router";
export default function Layout({ children }) {
  if (Cookies.get("auth_token") === undefined) {
    return <Redirect to="/login" noThrow></Redirect>;
  } else {
    return (
      <div className="flex min-h-screen">
        <div className="w-1/6">
          <div className="sticky top-0 h-screen">
            <Menu />
          </div>
        </div>
        <div className="w-5/6">{children}</div>
      </div>
    );
  }
}
