import { AuthTypes, ResponseLogin, ResponseRegister } from "./types";
import { AUTH_SIGNIN, AUTH_REGISTER } from "./mutation-types";

export default {
	[AUTH_SIGNIN](state: AuthTypes, response: ResponseLogin) {
		state.auth = response.user;
	},
	[AUTH_REGISTER](state: AuthTypes, response: ResponseRegister) {
		state.auth = response.user;
	},
};
