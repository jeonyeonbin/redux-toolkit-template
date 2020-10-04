import customAxios from "$Root/util/customAxios";
export const getGithubIssueEvents = () => {
  return customAxios.get("repos/jeonyeonbin/studying/events");
};
