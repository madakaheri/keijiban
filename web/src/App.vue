<script setup>
	import {ref, computed} from 'vue';
	import {feeds, topics, trendingCommunities} from './data/categories.js';

	const drawer = ref(true);
	const menu = ref(false);
	const search = ref('');
	const current = ref(feeds[0]);

	const filteredTopics = computed(() => {
		const q = search.value.trim().toLowerCase();
		if (!q) return topics;
		return topics.filter(t => t.label.toLowerCase().includes(q));
	});

	function selectCategory(item) {
		current.value = item;
		menu.value = false;
	}
</script>

<template>
	<v-app>
		<v-app-bar
			flat
			class="border-b"
		>
			<v-avatar
				@click="drawer = !drawer"
				size="32"
				class="ml-4"
				color="grey-darken-3"
				image="https://2.gravatar.com/avatar/d492b444772bdc1b50fa24aa3bea2bb8018514702aa8fb4ae1cd6bebe99fad14?size=256&d=initials"
			/>
			<!-- <v-app-bar-nav-icon @click="drawer = !drawer" /> -->
			<h1 class="text-h6 ml-4">Keijiban</h1>
			<!-- <v-menu
				v-model="menu"
				:close-on-content-click="false"
				location="bottom"
				max-width="720"
			>
				<template #activator="{props}">
					<v-btn
						v-bind="props"
						variant="text"
						class="px-2"
					>
						<v-icon class="mr-2">{{ current.icon }}</v-icon>
						<span class="font-weight-medium">{{ current.label }}</span>
						<v-icon class="ml-1">mdi-chevron-down</v-icon>
					</v-btn>
				</template>

				<v-card
					class="pa-2"
					elevation="8"
				>
					<v-row no-gutters>
						<v-col
							cols="4"
							class="pr-2"
						>
							<div class="text-overline mb-2">FEEDS</div>
							<v-list density="compact">
								<v-list-item
									v-for="f in feeds"
									:key="f.key"
									:value="f.key"
									@click="selectCategory(f)"
								>
									<template #prepend>
										<v-icon>{{ f.icon }}</v-icon>
									</template>
									<v-list-item-title>{{ f.label }}</v-list-item-title>
								</v-list-item>
							</v-list>
							<v-divider class="my-2" />
							<div class="text-overline mb-2">TRENDING COMMUNITIES</div>
							<v-list density="compact">
								<v-list-item
									v-for="c in trendingCommunities"
									:key="c.key"
									@click="selectCategory(c)"
								>
									<template #prepend>
										<v-icon>{{ c.icon }}</v-icon>
									</template>
									<v-list-item-title>{{ c.label }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-col>
						<v-col
							cols="8"
							class="pl-2"
						>
							<div class="text-overline mb-2">TOPICS</div>
							<v-row>
								<v-col
									v-for="t in filteredTopics"
									:key="t.key"
									cols="12"
									sm="6"
								>
									<v-chip
										class="ma-1"
										variant="tonal"
										@click="selectCategory(t)"
									>
										<v-icon
											class="mr-1"
											size="18"
											>{{ t.icon }}</v-icon
										>
										{{ t.label }}
									</v-chip>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-card>
			</v-menu> -->

			<v-spacer />

			<v-text-field
				v-model="search"
				prepend-inner-icon="mdi-magnify"
				variant="outlined"
				density="comfortable"
				hide-details
				rounded
				placeholder="Search topics"
				class="mx-4"
				style="max-width: 420px"
			/>

			<v-btn
				icon="mdi-bell-outline"
				variant="text"
			/>
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			width="280"
			location="left"
		>
			<v-list
				nav
				density="comfortable"
			>
				<v-list-subheader>Feeds</v-list-subheader>
				<v-list-item
					v-for="f in feeds"
					:key="f.key"
					:prepend-icon="f.icon"
					:title="f.label"
					:active="current.key === f.key"
					@click="selectCategory(f)"
				/>
				<v-divider class="my-2" />
				<v-list-subheader>Topics</v-list-subheader>
				<v-list-item
					v-for="t in topics"
					:key="t.key"
					:prepend-icon="t.icon"
					:title="t.label"
					:active="current.key === t.key"
					@click="selectCategory(t)"
				/>
				<v-divider class="my-2" />
				<v-list-subheader>Trending Communities</v-list-subheader>
				<v-list-item
					v-for="c in trendingCommunities"
					:key="c.key"
					:prepend-icon="c.icon"
					:title="c.label"
					:active="current.key === c.key"
					@click="selectCategory(c)"
				/>
			</v-list>
		</v-navigation-drawer>

		<v-navigation-drawer
			width="280"
			location="right"
			permanent
		>
			<v-list
				nav
				density="comfortable"
			>
				<v-list-subheader>Stocks</v-list-subheader>
				<div class="mt-n4">
					<v-card
						v-for="n in 5"
						:key="n"
						class="mt-4"
					>
						<v-img
							src="https://picsum.photos/800/300?random={{ n }}"
							aspect-ratio="16/9"
							eager
						/>
						<v-card-title>Sample post {{ n }} in {{ current.label }}</v-card-title>
						<v-card-text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae turpis.
						</v-card-text>
					</v-card>
				</div>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<v-container
				class="mt-n4"
				style="max-width: 600px"
			>
				<v-card
					v-for="n in 15"
					:key="n"
					class="mt-4"
				>
					<v-img
						src="https://picsum.photos/800/300?random={{ n }}"
						aspect-ratio="16/9"
						eager
					/>
					<v-card-title>Sample post {{ n }} in {{ current.label }}</v-card-title>
					<v-card-text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae turpis.
					</v-card-text>
					<v-card-actions>
						<v-btn
							variant="text"
							prepend-icon="mdi-bookmark"
							>Bookmark</v-btn
						>
						<v-btn
							variant="text"
							prepend-icon="mdi-bag-personal"
							>Stock</v-btn
						>
						<v-spacer />
						<v-btn
							variant="text"
							icon="mdi-dots-horizontal"
						/>
					</v-card-actions>
				</v-card>
			</v-container>
		</v-main>
	</v-app>
</template>

<style scoped>
	.v-application {
		background: rgb(16, 16, 18);
	}
</style>
