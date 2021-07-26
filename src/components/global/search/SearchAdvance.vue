<template>
	<div class="search-advance">
		<div class="wrap">
			<TheSearchWrapper>
				<template #header-back-btn="{ onBackPage }">
					<div class="search__back">
						<a-button type="link" @click="onBackPage">
							<template #icon><LeftOutlined /></template>
						</a-button>
					</div>
				</template>
			</TheSearchWrapper>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";
import { LeftOutlined } from "@ant-design/icons-vue";

export default defineComponent({
	name: "SearchAdvance",
	components: {
		LayoutDefault,
		LeftOutlined,
	},
	setup() {
		return {};
	},
});
</script>

<style lang="scss" scoped></style>
