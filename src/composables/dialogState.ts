import { ref, readonly } from "vue";

const stateDialog = ref(false); // global state (test set allway open)
const setStateDialog = (newState: boolean) => (stateDialog.value = newState);

const useDialogState = {
	stateDialog: readonly(stateDialog),
	setStateDialog,
};

export default useDialogState;
