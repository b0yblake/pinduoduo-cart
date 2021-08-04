<template>
	<NavigationBottomWrapper :suffix-class="'nav-common'">
		<template #body>
			<div class="nav__content">
				<ul class="nav__content-list">
					<li class="nav__content-item">
						<a-button>
							<HeartOutlined />
							For you
						</a-button>
					</li>
					<li class="nav__content-item">
						<a-button>
							<MessageOutlined />
							Message
							<a-badge count="5">
								<a href="#" class="head-example" />
							</a-badge>
						</a-button>
					</li>
					<li class="nav__content-item">
						<a-button>
							<FireOutlined />
							Trend
						</a-button>
					</li>
					<li class="nav__content-item">
						<a-button>
							<UserOutlined />
							User
						</a-button>
					</li>
					<li class="nav__content-item">
						<a-button>
							<ShoppingOutlined />
							Cart
						</a-button>
					</li>
				</ul>
			</div>
		</template>
	</NavigationBottomWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
	HeartOutlined,
	FireOutlined,
	ShoppingOutlined,
	MessageOutlined,
	UserOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
	name: "NavBottomCommonUser",
	components: {
		HeartOutlined,
		FireOutlined,
		ShoppingOutlined,
		MessageOutlined,
		UserOutlined,
	},
});
</script>

<style lang="scss" scoped></style>
