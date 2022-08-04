import { Link } from "@remix-run/react";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <main className="main">
      <section>
        <div className="container max-w-4xl mx-auto pt-8">
          <div className="bt-prose">
            <h1 className="mb-0">Welcome to BackyTracky 👋</h1>
            <p className="max-w-lg">
              <strong>Backing Tracks</strong> for Musicians. <s>Create and</s>{" "}
              play-along Lead-Sheets to level up your chops! Practice scales,
              licks or solos. Discover chord progressions others are using or
              make your own!
            </p>
          </div>
          <div className="grid gap-4 my-8 grid-flow-col max-w-md">
            <Link className="button button--submit" to="/tracks">
              See all the Tracks
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-4xl mx-auto">
          <div className="bt-prose">
            <h2 className="mt-2">FAQ</h2>
            <h3>What is all this?</h3>
            <p className="max-w-lg">
              These <strong>Tracks</strong> are mainly some chord progressions
              that I throw together to jam around on. If you have any requests,
              feel free to{" "}
              <a href="https://dennissmuda.com/" className="underline">
                contact me
              </a>
              .
            </p>
            <h3>Does it cost anything?</h3>
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
