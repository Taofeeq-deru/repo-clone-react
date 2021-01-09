export const content = {
  query: `{
    viewer {
      login
      bio
      avatarUrl
      name
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories( last: 41, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
        totalCount
        nodes {
          forkCount
          isFork
          isMirror
          isArchived
          name
          stargazerCount
          url
          updatedAt
          primaryLanguage {
            color
            name
          }
          description
          parent {
            forkCount
            name
            nameWithOwner
            stargazerCount
            updatedAt
            url
            licenseInfo {
              name
            }
          }
        }
      }
      location
      email
      twitterUsername
      websiteUrl
      starredRepositories {
        totalCount
      }
    }
  }`,
};
