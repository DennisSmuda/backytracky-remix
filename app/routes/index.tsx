import { Link } from "@remix-run/react";
// import TrackListing from "../components/track/TrackListing";
// import { jazzBlues, OneTwoFive } from "../music/featuredTracks";
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
              See all the Tracks
            </Link>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container max-w-4xl mx-auto">
          <div className="bt-prose mx-auto">
            <h2 className="font-black mt-0">Featured Tracks</h2>
            <div className="grid gap-12 my-6">
              <TrackListing
                track={OneTwoFive}
                showDescription={false}
                currentUserId={null}
              />
              <TrackListing
                track={jazzBlues}
                showDescription={false}
                currentUserId={null}
              />
            </div>
          </div>
        </div>
      </section> */}

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
