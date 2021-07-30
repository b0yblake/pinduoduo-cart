import { ref, readonly } from "vue";

const dialogPageState = ref(false); // global state
const setdialogPageState = (newState: boolean) =>
	(dialogPageState.value = newState);

const useDialogPageState = {
	dialogPageState: readonly(dialogPageState),
	setdialogPageState,
};

export default useDialogPageState;
