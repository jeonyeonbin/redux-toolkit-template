import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getGithubIssueEvents } from '$Root/api/github';

export type GithubState = {
	id: string;
	type: string;
	payload: GitHubPayload;
};
type GitHubPayload = {
	action: string;
	issue: GithubIssue;
};

type GithubIssue = {
	title: string;
	body: string;
	updated_at: string;
	created_at: string;
};

export const fetchGithubIssueEvents = createAsyncThunk(
	'github/fetchGithubIssueEvents',
	async (userId: string, { getState }) => {
		const result = await getGithubIssueEvents();
		return result.data;
	}
);

const initialState: GithubState[] = [];

const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchGithubIssueEvents.fulfilled.type]: (state, action: PayloadAction<GithubState>) => {
			state.push(action.payload);
		},
	},
});

export default githubSlice.reducer;
