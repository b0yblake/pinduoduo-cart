import { ref, reactive, readonly } from "vue";

const stateDialogPage = ref(false); //global state
const isToggleDialog = (newState: boolean) =>
	(stateDialogPage.value = newState ? newState : false);
const stateRawPokedex = reactive({ data: {} });

const useDialogState = {
	stateDialogPage: readonly(stateDialogPage),
	isToggleDialog,
	stateRawPokedex,
};

export default useDialogState;
