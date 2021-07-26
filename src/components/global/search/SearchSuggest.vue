<template>
	<div class="search__panel">
		<div
			v-for="(category, index) in Object.keys(searchSuggest)"
			:key="`${category}_${index}`"
		>
			<div
				class="search__panel-wrapper"
				v-for="(feature, index) in searchSuggest[category]"
				:key="`${feature}_${index}`"
			>
				<div class="panel__header">
					<div class="panel__header-title">
						<template v-if="category === 'recentSearch'"
							><HistoryOutlined
						/></template>
						<template v-if="category === 'influenceSearch'">
							<CompassOutlined />
						</template>

						<strong class="title">{{ feature.title }}</strong>
					</div>
					<button type="button" class="btn" @click="onClearCategory">
						<template v-if="category === 'recentSearch'">
							<DeleteOutlined />
						</template>
						<template v-if="category === 'influenceSearch'">
							<EyeOutlined />
						</template>
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
									{{ item.title }}
									<span :class="{ hot: item?.label }">{{ item?.label }}</span>
								</router-link></a-tag
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
import {
	DeleteOutlined,
	HistoryOutlined,
	EyeOutlined,
	CompassOutlined,
} from "@ant-design/icons-vue";

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
		EyeOutlined,
		CompassOutlined,
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
