<template>
  <div
    class="py-4 p-st bg-green-200 dark:bg-gray-800 text-stone-900 dark:text-gray-400"
  >
    <div class="container mx-auto px-4">
      <div
        class="text-center py-3"
      >
        <span
          class="dark:text-zinc-50 text-stone-900 font-medium text-center text-3xl text-center"
          >About Me.</span
        >
      </div>
      <hr
        class="mx-auto w-1/2 border-black dark:border-inherit"
      />
      <div class="flex flex-wrap">
        <div class="w-full xl:basis-1/2 lg:basis-1/2 md:basis-1/2">
          <Timeline :data="education" />
        </div>
        <div class="w-full xl:basis-1/2 lg:basis-1/2 md:basis-1/2">
          <Timeline :data="experience"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {
    Timeline,
  },
  data() {
    return {
      education: {
        title: "Education",
        data: info.education,
      },
      experience: {
        title: "Experiences",
        data: info.experience,
      },
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>
