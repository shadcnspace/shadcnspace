import { Eye, GitFork, Star } from "lucide-react";
import { format } from "date-fns/format";
import { isValid } from "date-fns/isValid";

export default async function GithubStarsAndForks({ repo }: { repo: string }) {
  const response = await fetch(`https://api.github.com/repos/${repo}`, {
    next: { revalidate: 60 * 120 }, // 2 hours
  });
  const data = await response.json();
  const viewsResponse = await fetch(
    `https://api.github.com/repos/${repo}/traffic/views`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 60 * 120 }, // 2 hours
    }
  );
  const views = await viewsResponse.json();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5 text-muted-foreground text-sm">
        <div className="flex items-center gap-2">
          <Eye className="text-foreground h-5 w-5" />
          <span className="whitespace-nowrap">
            {views?.count} {views?.count > 1 ? "views" : "view"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="text-foreground h-5 w-5" />
          <span className="whitespace-nowrap">
            {data?.stargazers_count}{" "}
            {data?.stargazers_count > 1 ? "stars" : "star"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <GitFork className="text-foreground h-5 w-5" />
          <span className="whitespace-nowrap">
            {data?.forks_count} {data?.forks_count > 1 ? "forks" : "fork"}
          </span>
        </div>
      </div>
      {isValid(new Date(data?.updated_at)) && (
        <span className="text-muted-foreground text-sm">
          Last updated:{" "}
          <span className="whitespace-nowrap">
            {format(new Date(data?.pushed_at), "MMM d, yyyy")}
          </span>
        </span>
      )}
    </div>
  );
}
