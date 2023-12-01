<template>
	<div class="container">
		<section v-for="(slice, index) in slices" :key="'slice-' + index"> 

			<!-- Headers -->
			<template v-if="slice.slice_type === 'header'">
				<slice-headers :slice="slice"/>
			</template>

			<!-- Practise Area Headers -->
			<template v-if="slice.slice_type === 'practise_area_header'">
				<slice-practise-area-header :slice="slice"/>
			</template>

			<!-- Text -->
			<template v-else-if="slice.slice_type === 'text'">
				<slice-text :slice="slice"/>
			</template>

			<!-- Image -->
			<template v-else-if="slice.slice_type === 'image'">
				<slice-image :slice="slice"/>
			</template>

			<!-- Contact -->
			<template v-else-if="slice.slice_type === 'contact'">
				<slice-contact :slice="slice"/>
			</template>

			<!-- Update -->
			<template v-else-if="slice.slice_type === 'update'">
				<slice-update :slice="slice"/>
			</template>

			<!-- Career -->
			<template v-else-if="slice.slice_type === 'career_general_text'">
				<slice-career :slice="slice"/>
			</template>

			<!-- Practise areas -->
			<template v-else-if="slice.slice_type === 'practice_areas'">
				<slice-practise-areas :slice="slice"/>
			</template>  

			<!-- Open Positions -->
			<template v-else-if="slice.slice_type === 'open_positions'">
				<slice-open-positions :slice="slice"/>
			</template>  

			<!-- About -->
			<template v-else-if="slice.slice_type === 'about'">
				<slice-about :slice="slice" />
			</template>

			<!-- Services -->
			<template v-else-if="slice.slice_type === 'services'">
				<slice-services :slice="slice" />
			</template>

			<!-- Quotes -->
			<template v-else-if="slice.slice_type === 'quotes'">
				<slice-quotes :slice="slice" />
			</template>

		</section>
	</div>
</template>

<script>

const SliceHeaders = () => import("./slices/SliceHeaders.vue");
const SlicePractiseAreaHeader = () => import("./slices/SlicePractiseAreaHeader.vue");
const SliceText = () => import("./slices/SliceText.vue");
const SliceImage = () => import("./slices/SliceImage.vue");
const SliceContact = () => import("./slices/SliceContact.vue");
const SliceUpdate = () => import("./slices/SliceUpdate.vue");
const SliceCareer = () => import("./slices/SliceCareer.vue");
const SlicePractiseAreas = () => import("./slices/SlicePractiseAreas.vue");
const SliceOpenPositions = () => import("./slices/SliceOpenPositions.vue");
const SliceAbout = () => import("./slices/SliceAbout.vue");
const SliceServices = () => import("./slices/SliceServices.vue");
const SliceQuotes = () => import("./slices/SliceQuotes.vue");


export default {
	props: ['slices', 'persons'],
	name: 'slices-block',
	components: {
		SliceHeaders,
		SlicePractiseAreaHeader,
		SliceText,
		SliceImage,
		SliceContact,
		SliceUpdate,
		SliceCareer,
		SliceAbout,
		SliceServices,
		SliceQuotes,
		SliceOpenPositions,
		SlicePractiseAreas
	},
}
</script>