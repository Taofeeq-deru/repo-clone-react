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

const arr1 = [
  "e",
  "7",
  "0",
  "3",
  "7",
  "6",
  "4",
  "e",
  "d",
  "d",
  "9",
  "0",
  "6",
  "c",
  "a",
  "0",
  "6",
];

const arr2 = [
  "c",
  "2",
  "6",
  "a",
  "b",
  "0",
  "a",
  "0",
  "9",
  "f",
  "b",
  "c",
  "9",
  "e",
  "1",
  "4",
  "8",
  "a",
  "3",
  "3",
  "4",
  "7",
  "e",
];

export const arr = [...arr1, ...arr2];
