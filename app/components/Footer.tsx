import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="p-3 sm:p-6 mt-24">
      <div className="container max-w-4xl mx-auto pt-8">
        <div className="flex flex-col">
          <Link
            className="font-black tracking-tighter text-xl opacity-50"
            to="/"
          >
            BackyTracky™
          </Link>
          <div className="mt-2 opacity-50 text-xs">
            <span>
              {new Date().getFullYear()} created by{" "}
              <a
                href="https://dennissmuda.com/"
                target="blank"
                rel="nofollower"
              >
                dennis smuda
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
