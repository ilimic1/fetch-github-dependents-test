declare class Repo {
    readonly user: string;
    readonly repo: string;
    readonly stars: number;
    constructor(user: string, repo: string, stars: number);
    getUrl(): string;
}
declare const githubUserSlugRegex: RegExp;
declare const githubRepoSlugRegex: RegExp;
declare function getRepos(url: string, reposToScan: number, sort: undefined | "asc" | "desc"): Promise<{
    repos: Repo[];
    count: number;
}>;

export { getRepos, githubRepoSlugRegex, githubUserSlugRegex };
