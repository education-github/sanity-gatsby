export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615771eb67eea93f8906231f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-studio-dea834wu",
                  apiId: "12040ab0-7b56-4603-afff-3b45cb8e7006",
                },
                {
                  buildHookId: "615771ebaad334359db91869",
                  title: "Blog Website",
                  name: "sanity-gatsby-web-xfmndvtw",
                  apiId: "b572b37e-761d-409c-b170-b18e3b54c5de",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/education-github/sanity-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-web-xfmndvtw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
