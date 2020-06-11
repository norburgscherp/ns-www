<template>
    <div class="container">

        <section v-for="(slice, index) in slices" :key="'slice-' + index">
 
            <!-- Headers -->
            <template v-if="slice.slice_type === 'header'">
               <slice-headers :slice="slice"/>
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
              <slice-practise-areas :slice="slice" :persons="persons"/>
            </template>  

            <!-- About -->
            <template v-else-if="slice.slice_type === 'about'">
              <slice-about :slice="slice" />
            </template>  

        </section>
    </div>
</template>

<script>

const QuoteSlice = () => import("./slices/QuoteSlice.vue");
const FullWidthImage = () => import("./slices/FullWidthImage.vue");
const ImageGallery = () => import("./slices/ImageGallery.vue");
const ImageHighlight = () => import("./slices/ImageHighlight.vue");

const SliceHeaders = () => import("./slices/SliceHeaders.vue");
const SliceText = () => import("./slices/SliceText.vue");
const SliceImage = () => import("./slices/SliceImage.vue");
const SliceContact = () => import("./slices/SliceContact.vue");
const SliceUpdate = () => import("./slices/SliceUpdate.vue");
const SliceCareer = () => import("./slices/SliceCareer.vue");
const SlicePractiseAreas = () => import("./slices/SlicePractiseAreas.vue");
const SliceAbout = () => import("./slices/SliceAbout.vue");


export default {
  props: ['slices', 'persons'],
  name: 'slices-block',
  components: {
    SliceHeaders,
    SliceText,
    SliceImage,
    SliceContact,
    SliceUpdate,
    SliceCareer,
    SliceAbout,
    SlicePractiseAreas,


    QuoteSlice,
    FullWidthImage,
    ImageGallery,
    ImageHighlight
  },
}
</script>