import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

export default function PublicRoute(rest) {
  const cookies = new Cookies();
  const user = cookies.get("coki");
  //  console.log(user.rol_usuario === "admin");
  console.log(user);

  if (user && user?.rol_usuario !== "cliente") return <Redirect to="/admin" />;
  if (user) return <Redirect to="/" />;
  return <Route {...rest} />;
}
