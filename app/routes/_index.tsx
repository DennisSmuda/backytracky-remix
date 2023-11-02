import { Link } from "@remix-run/react";
import BackgroundNotes from "../components/BackgroundNotes";
import Footer from "../components/Footer";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    {
      title: "Free Backing Tracks for Musicians! | BackyTracky Homepage",
    },
    {
      name: "description",
      content:
        "Create and play-along Lead-Sheets to level up your chops! Practice scales, licks or solos. Discover chord progressions others are using or make your own!",
    },
  ];
};

export default function Index() {
  return (
    <main className="main relative">
      <div className="overflow-hidden absolute w-full h-[360px] -top-32 pointer-events-none ">
        <div className="bg-white dark:bg-black absolute -top-16 left-0 right-0 h-full -z-10 rotate-1 border-b border-zinc-500 border-opacity-10" />
      </div>
      <section className="relative">
        <BackgroundNotes />
        <div className="container max-w-4xl mx-auto pt-8 relative z-10">
          <div className="bt-prose mx-auto my-12">
            <h1 className="mb-0 rounded-md relative -ml-2 inline-block px-1 font-black">
              Welcome to <br />
              <span className="md:text-6xl">BackyTracky</span>
            </h1>
            <p className="max-w-lg bg-zinc-50 dark:bg-zinc-900 bg-opacity-10 rounded-md">
              <span className="sr-only">Free </span>
              <strong>Backing Tracks</strong> for Musicians! Play-along some of
              my favorite lead-sheets to level up your chops... <i>or</i> go
              ahead and try making something of your own! Practice scales, licks
              or solos.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                className="button no-underline px-8 dark:text-white"
                to="/tracks"
              >
                <span>see some tracks</span>
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
              <Link
                className="button button--submit no-underline px-8 dark:text-white"
                to="/generator"
              >
                <span>make your own</span>
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
        </div>
      </section>
      <section>
        <div className="container max-w-4xl mx-auto">
          <div className="bt-prose mx-auto my-12">
            <h2 className="mt-2 font-black">Features</h2>
            <ul className="max-w-lg">
              <li>
                <strong>Lead-sheets</strong> for some of my favorite tracks,
                inspired by some of my favorite standards
              </li>
              <li>
                A full blown <strong>Sequencer</strong> that let's you try out
                some new wild chord progressions!
              </li>
              <li>
                <strong>Guitar Tuner</strong> to help practice tuning your
                guitar by ear
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-4xl mx-auto">
          <div className="bt-prose mx-auto my-12">
            <h2 className="mt-2 font-black">FAQ</h2>
            <h3 className="font-black">What is all this?</h3>
            <p className="max-w-lg">
              The <strong>Tracks</strong> are mainly some chord progressions
              that I throw together to jam around on. If you have any requests,
              feel free to{" "}
              <a
                href="https://dennissmuda.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                contact me
              </a>
              .
            </p>
            <h3 className="font-black">Code?</h3>
            <p>
              This project is <strong>open source</strong> and you can{" "}
              <a
                target="_blank"
                href="https://github.com/DennisSmuda/backytracky-remix/"
                rel="noopener noreferrer"
              >
                check it out on github
              </a>
              ! <br />
              It uses React (
              <a
                target="_blank"
                href="https://remix.run/"
                rel="noopener noreferrer"
              >
                remix.run
              </a>
              ), tailwindcss and prisma and is deployed to netlify. To play and
              generate music, there is{" "}
              <a
                href="https://tonejs.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tone.js
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/tonaljs/tonal"
                target="_blank"
                rel="noopener noreferrer"
              >
                tonal
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
