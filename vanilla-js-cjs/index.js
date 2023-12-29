import("@ilimic/fetch-github-dependents").then((fetchGithubDependents) => {
  (async () => {
    const repo = "https://github.com/cheeriojs/cheerio";
    const reposToScan = 150;
    const sort = "desc";

    console.log(`Fetching dependents for ${repo} ...`);

    const { repos, count } = await fetchGithubDependents.getRepos(
      `${repo}/network/dependents`,
      reposToScan,
      sort
    );

    console.log(`Found ${repos.length}/${count} dependents for ${repo} ...`);
  })();
});
