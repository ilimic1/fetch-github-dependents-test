# @ilimic/fetch-github-dependents

Fetches dependents of a GitHub repository from the dependency graph page, eg. https://github.com/cheeriojs/cheerio/network/dependents, and sorts them by the number of stars.

Run `npx @ilimic/fetch-github-dependents cheeriojs/cheerio -m 100`

or

run `npx @ilimic/fetch-github-dependents https://github.com/cheeriojs/cheerio -m 100`.

The above command will fetch the first 100 dependents of the `cheeriojs/cheerio` repository and sort them by the number of stars.

Use `npx @ilimic/fetch-github-dependents help`

and `npx @ilimic/fetch-github-dependents help fetch` for more information.
