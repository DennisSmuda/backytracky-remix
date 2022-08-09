import { Link } from "@remix-run/react";
import BackgroundNotes from "../components/BackgroundNotes";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <main className="main">
      <section className="relative">
        <BackgroundNotes />

        <div className="container max-w-4xl mx-auto pt-8 relative z-10">
          <div className="bt-prose mx-auto my-12">
            <h1 className="mb-0 font-black">Welcome to BackyTracky 👋</h1>
            <p className="max-w-lg">
              <strong>Backing Tracks</strong> for Musicians. <s>Create and</s>{" "}
              play-along Lead-Sheets to level up your chops! Practice scales,
              licks or solos. Discover chord progressions others are using or
              make your own!
            </p>
            <Link
              className="button button--submit no-underline px-12 dark:text-white"
              to="/tracks"
            >
              <span>See all the Tracks</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-4xl mx-auto">
          <div className="bt-prose mx-auto my-12">
            <h2 className="mt-2 font-black">FAQ</h2>
            <h3 className="font-black">What is all this?</h3>
            <p className="max-w-lg">
              These <strong>Tracks</strong> are mainly some chord progressions
              that I throw together to jam around on. If you have any requests,
              feel free to{" "}
              <a href="https://dennissmuda.com/" className="underline">
                contact me
              </a>
              .
            </p>
            <h3 className="font-black">Does it cost anything?</h3>
            <p className="max-w-lg">
              <strong>No!</strong> As long as I don't just let anyone create
              accounts and tracks I can maintain BackyTracky for free.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
