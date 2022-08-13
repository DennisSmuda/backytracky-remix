import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="p-3 sm:p-6 mt-24">
      <div className="container max-w-4xl mx-auto pt-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-baseline">
            <Link className="font-black tracking-tighter text-xl" to="/">
              BackyTracky™
            </Link>
            <Link className="ml-8 text-xs opacity-50" to="/tracks">
              Tracks
            </Link>
            <Link className="ml-8 text-xs opacity-50" to="/generator">
              Sequencer
            </Link>
            <Link className="ml-8 text-xs opacity-50" to="/tuner">
              Guitar Tuner
            </Link>
          </div>
          <div className="mt-2 opacity-50 text-xs">
            <span>
              {new Date().getFullYear()} created by{" "}
              <a
                href="https://dennissmuda.com/"
                target="blank"
                rel="nofollower"
                className="underline hover:no-underline"
              >
                dennissmuda
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
