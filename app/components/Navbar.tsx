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
    <header className="flex justify-between items-center px-1 sm:px-4 py-2">
      <nav className="grid gap-4 grid-flow-col items-baseline">
        <Link className="font-black tracking-tighter text-xl" to="/">
          BackyTracky
        </Link>
        <NavLink to="/tracks">Tracks</NavLink>
        <NavLink to="/tuner">Tuner</NavLink>
      </nav>
      <nav className="grid gap-4 grid-flow-col items-center">
        {user?.username && (
          <NavLink className="button--cta" to="/track/new">
            {/* New */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </NavLink>
        )}
        {user ? (
          <Form method="post" action="/auth/logout">
            <button onClick={notifyLogout} type="submit">
              Logout
            </button>
          </Form>
        ) : (
          <>
            <NavLink className="hidden sm:block" to="/auth/login">
              Login
            </NavLink>
            {/* <NavLink to="/auth/register">Register</NavLink> */}
          </>
        )}

        <button className="text-xl" onClick={toggleTheme}>
          {currentTheme === Theme.LIGHT ? "🌚" : "😎"}
        </button>
      </nav>
    </header>
  );
}
