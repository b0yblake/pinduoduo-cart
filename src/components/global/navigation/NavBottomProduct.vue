<template>
	<NavigationBottomWrapper :suffix-class="'nav-product'">
		<template #body>
			<div class="nav__content">
				<ul class="nav__content-list">
					<li class="nav__content-item">
						<a-button>
							<ShopOutlined />
							Home
						</a-button>
					</li>
					<li class="nav__content-item">
						<a-button>
							<HeartOutlined />
							Whistlist
						</a-button>
					</li>
					<li class="nav__content-item">
						<a-button>
							<MessageOutlined />
							Contact
						</a-button>
					</li>
					<li class="nav__content-item regular-btn">
						<a-button class="btn__buy">
							<strong class="regular-price">$11.88</strong>
							<span class="">Regular price</span>
						</a-button>
					</li>
					<li class="nav__content-item special-btn">
						<a-button class="btn__buy">
							<strong class="special-price">$10.8</strong>
							<span class="">Special price</span>
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
	ShopOutlined,
	HeartOutlined,
	MessageOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
	name: "NavBottomProduct",
	components: {
		ShopOutlined,
		HeartOutlined,
		MessageOutlined,
	},
});
</script>

<style lang="scss" scoped></style>
