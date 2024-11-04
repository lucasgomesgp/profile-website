import { Projects } from "../types/projects";

export async function getProjectsFromCms() {
    const data = await fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        body: JSON.stringify({
            query: `
            query Projects {
                projects {
                    tagsTechnologies
                    title
                    createdAt
                    deployUrl
                    description
                    githubUrl
                    id
                    publishedAt
                    updatedAt
                    photo {
                    url
                    }
                }
            }
            `,
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
        },
    });
    const result = await data.json();
    return result.data.projects as Projects[];
}
