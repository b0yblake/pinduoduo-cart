// import Swiper core and required modules
import SwiperCore, {
	Navigation,
	Pagination,
	A11y,
	Scrollbar,
} from "swiper/core";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
// Import style each functions, it's optional
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Scrollbar]);

/**
 * @description manually register the antd-vue component to achieve the purpose of on-demand loading
 * @description Automatically register components Swiper & SwiperSlide as global component
 * @param { ReturnType<typeof createApp> } app An instance of the entire application
 * @returns void
 */
export default function loadComponent(app: any) {
	app.component("Swiper", Swiper);
	app.component("SwiperSlide", SwiperSlide);
}
