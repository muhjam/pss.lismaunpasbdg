import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const SHEET_URL = 'https://api.sheetmonkey.io/form/pPqJcRhNBLJiZewx5zc6K4';

export default new Vuex.Store({
	state: {
		localImages: [],
	},
	mutations: {
		saveImageLocally(state, payload) {
			const { file, filePath } = payload;
			state.localImages.push({ file, filePath });
		},
	},
	actions: {
		async postData(context, payload) {
			try {
			const response = await axios.post(SHEET_URL, payload);
			return response.data;
			} catch (error) {
			console.error('Error posting data:', error);
			throw error;
			}
		},
	},
	modules: {},
});
