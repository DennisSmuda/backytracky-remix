import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="main">
      <section>
        <div className="container max-w-4xl mx-auto pt-8">
          <div className="bt-prose">
            <h1 className="mb-0">Welcome to BackyTracky 👋</h1>

            <p>
              Practice scales, licks or solos. Create your own or discover other
              people's tracks!
            </p>
          </div>

          <div className="grid gap-4 my-8 grid-flow-col">
            <Link className="button" to="/tracks">
              All Tracks
            </Link>

            <Link className="button" to="/track/new">
              New Track
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
