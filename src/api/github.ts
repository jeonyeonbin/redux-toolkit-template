import customAxios from '$Root/util/customAxios';

// api test
export const getGithubIssueEvents = () => {
	return customAxios.get('repos/jeonyeonbin/studying/events');
};
