# Welcome to BackyTracky!


[![Cypress Tests](https://github.com/DennisSmuda/backytracky-remix/actions/workflows/main.yaml/badge.svg)](https://github.com/DennisSmuda/backytracky-remix/actions/workflows/main.yaml)


![OG Image](public/og-image.png)
<!-- [See](https://backytracky.com) -->


## Development 🛠

After you've cloned/forked the repo, you can do this:

```bash
npm run install
npm run dev
# or start the server and open the app in a new browser tab
npm run dev
```

You'll need a `.env` file with the following variables:

```env
DATABASE_URL="MYSQL_DB_URL"
SESSION_SECRET="WHATEVER_YOU_WANT"
```

You should be able to supply a DB that's hosted somewhere. I use PlanetScale but you can check the [Prisma Docs](https://www.prisma.io/docs/) for alternatives.


## Tests 🧪

Tests run on [github actions](https://github.com/DennisSmuda/backytracky-remix/actions), everytime a PR gets opened.

There are component-level tests with jest, which also collects the coverage data. You can find them in `./__tests__`.

You'll also find Cypress e2e tests in `./cypress`.

## Contributions 🥁

Feel free to submit PRs or [issues](https://github.com/DennisSmuda/dennissmuda-website/issues) 👋