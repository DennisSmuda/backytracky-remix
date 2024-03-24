import { Form, Link, NavLink } from "@remix-run/react";
import toast from "react-hot-toast";
import { Theme, useTheme } from "../utils/ThemeProvider";

interface NavbarProps {
  user?: {
    username: string;
  };
}

const notifyLogout = () => {
  toast.success("Logged out", { id: "auth-toast" });
};

export default function Navbar({ user }: NavbarProps) {
  const [currentTheme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };
  return (
    <header className="flex justify-between items-center px-1 sm:px-4 pb-2 pt-3">
      <nav className="grid gap-4 grid-flow-col items-baseline">
        <Link className="font-black tracking-tighter text-xl" to="/">
          <span className="hidden sm:inline">BackyTracky</span>
          <span className="sm:hidden">BT</span>
        </Link>
        <NavLink to="/tracks">Tracks</NavLink>
        <NavLink to="/generator">Generate</NavLink>
        <a href="https://tuner.backytracky.com" className="flex items-center">
          <span>Tuner</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            ></path>
          </svg>
        </a>
      </nav>
      <nav className="grid gap-4 grid-flow-col items-center">
        {user?.username && (
          <NavLink className="button--cta" to="/track/new">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        )}
        {user ? (
          <Form className="hidden sm:block" method="post" action="/logout">
            <button onClick={notifyLogout} type="submit">
              Logout
            </button>
          </Form>
        ) : (
          <>
            <NavLink className="hidden sm:block" to="/login">
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
