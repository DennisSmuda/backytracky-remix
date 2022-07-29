import { Form, Link, NavLink } from "@remix-run/react";
import toast from "react-hot-toast";
import { Theme, useTheme } from "../utils/ThemeProvider";

interface NavbarProps {
  user?: {
    username: string;
  };
}

const notifyLogout = () => {
  toast.success("Logged out");
};

export default function Navbar({ user }: NavbarProps) {
  const [currentTheme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };
  return (
    <header className="flex justify-between items-baseline px-1 sm:px-4 py-2">
      <nav className="grid gap-4 grid-flow-col items-baseline">
        <Link className="font-black tracking-tighter text-xl" to="/">
          Backytracky
        </Link>
        <NavLink to="/tracks">Tracks</NavLink>
      </nav>
      <nav className="grid gap-4 grid-flow-col items-center">
        {/* {user?.username} */}
        {!user ? (
          <>
            <NavLink to="/auth/login">Login</NavLink>
            {/* <NavLink to="/auth/register">Register</NavLink> */}
          </>
        ) : (
          <Form method="post" action="/auth/logout">
            <button onClick={notifyLogout} type="submit">
              Logout
            </button>
          </Form>
        )}

        <button className="text-xl" onClick={toggleTheme}>
          {currentTheme === Theme.LIGHT ? "🌚" : "😎"}
        </button>
      </nav>
    </header>
  );
}
