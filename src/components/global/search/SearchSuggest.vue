<template>
	<div class="search__panel">
		<div
			v-for="(category, index) in searchSuggest"
			:key="`${category}_${index}`"
		>
			<div
				class="search__panel-wrapper"
				v-for="(feature, index) in category"
				:key="`${feature}_${index}`"
			>
				<div class="panel__header">
					<div class="panel__header-title">
						<HistoryOutlined />
						<strong class="title">{{ feature.title }}</strong>
					</div>
					<button type="button" class="btn" @click="onClearCategory">
						<DeleteOutlined />
					</button>
				</div>
				<div class="panel__content">
					<ul>
						<li
							class="item"
							v-for="(item, index) in feature.key"
							:key="`${item}_${index}`"
						>
							<a-tag
								><router-link :to="item.url">
									{{ item.title }}</router-link
								></a-tag
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from "vue";
import { DeleteOutlined, HistoryOutlined } from "@ant-design/icons-vue";

export default defineComponent({
	name: "SearchSuggest",
	props: {
		searchSuggest: {
			type: Object,
			required: false,
		},
	},
	components: {
		DeleteOutlined,
		HistoryOutlined,
	},
	setup(props, { emit }) {
		const onClearCategory = () => {};
		return {
			onClearCategory,
		};
	},
});
</script>

<style lang="scss" scoped></style>
