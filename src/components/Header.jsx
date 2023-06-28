import { NavLink } from "react-router-dom";

export function Header() {
  const getActiveStyle = ({ isActive }) => ({
    margin: "5px",
    color: isActive ? "red" : "",
  });

  return (
    <>
      <h1>Welcome User</h1>
      <nav>
        <NavLink to={"/"} style={getActiveStyle}>
          Home
        </NavLink>
        <NavLink to={"/questions"} style={getActiveStyle}>
          Show Questions List
        </NavLink>
      </nav>
    </>
  );
}
