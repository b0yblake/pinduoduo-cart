import { ref, watchEffect } from "vue";

const useViewport = () => {
	const width = ref<Number>(window.innerWidth);
	const height = ref<Number>(window.innerHeight);

	watchEffect(() => {
		const handleWindowResize = (): void => {
			width.value = window.innerWidth;
			height.value = window.innerHeight;
		};

		window.addEventListener("resize", handleWindowResize);

		return () => window.removeEventListener("resize", handleWindowResize);
	});

	return { width, height };
};

export default useViewport;
