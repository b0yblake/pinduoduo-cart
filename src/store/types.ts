import { AuthTypes } from "./modules/auth/types";

export default interface RootStateTypes {
	text: string;
}

export interface AllStateTypes extends RootStateTypes {
	authModule: AuthTypes;
}
