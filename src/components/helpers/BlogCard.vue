<template>
  <div class="m-3 p-3">
    <div
        class="card smcard bg-green-300 dark:bg-gray-700 rounded-lg"
    >
      <div style="height: 180px;">
        <img
            class="card-img-top"
            :src="blog.pictures[0].img"
            alt="Card image cap"
        />
      </div>
      <div class="grow shrink basis-auto p-5 pborder-top text-stone-900 dark:text-zinc-50">
        <h5 class="text-lg">{{ blog.name }}</h5>
        <div>
          <p
              class="text-sm m-0 pb-2 pheight pt-1"
              v-html="
              blog.desc.length > 100
                ? blog.desc.substring(0, 105) + '...'
                : blog.desc
            "
          >
          </p>
        </div>
        <div class="text-center mt-2">
          <button
              href=""
              class="inline-block dark:border-gray-900 hover:bg-green-500 border-green-500 border-2 dark:border-2 p-1 rounded-md dark:hover:bg-gray-500 dark:hover:border-gray-500 hover:font-bold"
              @click.prevent="showModal"
          >
            read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
    }
  },
  methods: {
    showModal() {
      this.$emit("show", this.blog);
    },
  }
}
</script>

<style scoped>
img {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.card-img-top{
  width: 50%;
  margin: auto;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
}

.img-div img {
  /* object-fit: cover;
    overflow: hidden; */
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* object-position: 50% 120%;
    max-width: 300px !important; */
}
</style>