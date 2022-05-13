<template>
  <div class="bottom-0 dark:bg-gray-800 bg-white text-stone-900 dark:text-white">
    <div class="container mx-auto py-3">
      <div class="flex flex-wrap pt-1 align-items-center">
        <div
            class="xl:basis-1/2 lg:basis-1/2 md:basis-1/2 sm:basis-1/2 sm:pb-5 sm:text-center"
        >
          <span class="font-bold">© 2021 Cristian Cantillo</span>
        </div>

        <div class="xl:basis-1/2 lg:basis-1/2 md:basis-1/2 sm:basis-1/2">
          <div class="text-center">
            <button
                class="text-2xl outline-none mx-2"
                @click="open('linkedin')"
            >
              <i class="dark:text-zinc-50 text-slate-900 fab fa-linkedin"></i>
            </button>
            <button
                class="text-2xl outline-none mx-2"
                @click="open('github')"
            >
              <i class="dark:text-zinc-50 text-slate-900 fab fa-github"></i>
            </button>
            <button
                class="text-2xl outline-none mx-2"
                @click="open('resume')"
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

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
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