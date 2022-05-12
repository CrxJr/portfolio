<template>
  <div
      class="pt-10 dark:bg-gray-700 bg-green-300 left-0 right-0"
  >
    <div
        class="container mx-auto px-4"
    >
      <div class="flex flex-wrap items-center">
        <div class="xl:basis-1/2 lg:basis-1/2 md:basis-1/2 text-center">
          <div>
            <img class="mx-auto w-1/2" :src="picture" />
          </div>
        </div>
        <div class="w-full xl:basis-1/2 lg:basis-1/2 md:basis-1/2 pt-5">
          <span
              class="lg:text-3xl md:text-2xl sm:text-xl text-stone-900 font-bold dark:text-zinc-50"
          >Welcome to my portfolio!</span
          >
          <div>
            <p class="text-stone-900 font-medium lg:text-xl md:text-lg sm:text-base dark:text-zinc-50" v-html="description"></p>
          </div>
          <div class="text-center pb-4">
            <button
                class="text-2xl outline-none mx-2"
                @click="open('linkedin')"
                v-tooltip.bottom="'LinkedIn'"
            >
              <i class="dark:text-zinc-50 text-stone-900 fab fa-linkedin"></i>
            </button>
            <button
                class="text-2xl outline-none mx-2"
                @click="open('github')"
                v-tooltip.bottom="'GitHub'"
            >
              <i class="dark:text-zinc-50 text-stone-900 fab fa-github"></i>
            </button>
            <button
                class="text-2xl outline-none mx-2"
                @click="open('resume')"
                v-tooltip.bottom="'Resume'"
            >
              <i class="dark:text-zinc-50 text-slate-900 fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

import Wave from "./helpers/Wave";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Wave,
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>

  img {
    object-fit: cover;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }

/* LEAVES */
</style>
