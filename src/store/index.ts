import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import RootStateTypes, { AllStateTypes } from "./types";

import auth from "./modules/auth";

export const store = createStore({
	strict: true,
	modules: {
		auth,
	},
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol("vue-store");

export function useStore<T = AllStateTypes>() {
	return baseUseStore<T>(key);
}
