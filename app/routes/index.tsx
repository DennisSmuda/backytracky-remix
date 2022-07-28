import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="main">
      <section>
        <div className="container max-w-4xl mx-auto pt-8">
          <div className="bt-prose">
            <h1 className="mb-0">Welcome to BackyTracky 👋</h1>
            <p>
              Backing Tracks for Musicians. Create and play Lead-Sheets to level
              up your chops! Practice scales, licks or solos. Discover chord
              progressions others are using or make your own!
            </p>
          </div>
          <div className="grid gap-4 my-8 grid-flow-col max-w-md">
            <Link className="button button--submit" to="/tracks">
              See all the Tracks
            </Link>

            {/* <Link className="button" to="/track/new">
              New Track
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
