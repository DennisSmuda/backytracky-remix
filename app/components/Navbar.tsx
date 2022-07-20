import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <header className="flex justify-between p-4 border-b">
      <Link className="font-black tracking-tighter text-xl" to="/">
        Backytracky
      </Link>
      <nav className="grid gap-4 grid-flow-col">
        {/* <Link to="/tracks">Tracks</Link> */}
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
      </nav>
    </header>
  );
}
