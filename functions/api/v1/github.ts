export async function onRequestGet({ env }: { env: { GITHUB_TOKEN: string } }) {
  const query = `
{
  viewer {
    repoCount: repositories(privacy: PUBLIC) {
      totalCount
    }
    pullRequests {
      totalCount
    }
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
    latestRepo: repositories(first: 1, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        name
        updatedAt
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
        refs(refPrefix: "refs/heads/") {
          totalCount
        }
      }
    }
  }
}
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-app", // 👈 required
  },
  body: JSON.stringify({ query }),
});

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `GitHub API error ${res.status}` }),
        { status: res.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
