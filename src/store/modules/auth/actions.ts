import { Commit } from "vuex"; // https://stackoverflow.com/questions/50375281/what-are-the-types-for-dispatch-commit-in-vuex
import { ResponseLogin, ResponseRegister } from "./types";
import { AUTH_SIGNIN, AUTH_REGISTER } from "./mutation-types";

export const login = async (
	{ commit }: { commit: Commit },
	data: ResponseLogin
) => {
	commit(AUTH_SIGNIN, data);
};

export const register = async (
	{ commit }: { commit: Commit },
	data: ResponseRegister
) => {
	commit(AUTH_REGISTER, data);
};

export default {
	login,
	register,
};
