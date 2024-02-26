import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const IMAGE_URL = 'https://pssbackend.vercel.app/api/';

export default new Vuex.Store({
	state: {},
	mutations: {
		saveImageLocally(state, payload) {
			const { file, filePath } = payload;
			state.localImages.push({ file, filePath });
		},
	},
	actions: {
		async postImage(context, payload) {
			try {
				const response = await axios.post(`${IMAGE_URL}/hello`, payload, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer 6d207e02198a847aa98d0a2a901485a5`,
					},
				});
				return response;
			} catch (error) {
				return error;
			}
		},	
	},
	modules: {},
});
