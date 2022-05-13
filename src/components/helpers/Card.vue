<template>
  <div class="m-3 p-3">
    <div
      class="card smcard bg-green-300 dark:bg-gray-700 rounded-lg"
    >
      <div style="height: 180px;">
        <img
          class="card-img-top"
          :src="portfolio.pictures[0].img"
          alt="Card image cap"
        />
      </div>
      <div class="grow shrink basis-auto p-5 pborder-top text-stone-900 dark:text-zinc-50">
        <h5 class="text-lg">{{ portfolio.name }}</h5>
        <div>
          <div class="pb-1 bheight">
            <span
              class="badge bg-green-500 dark:bg-gray-900 dark:bg-gray-800 p-1 rounded mr-2 mb-2 "
              v-for="tech in portfolio.technologies"
              :key="tech"
              >{{ tech }}</span
            >
          </div>
          <p
            class="text-sm m-0 pb-2 pheight pt-1"
            v-html="
              portfolio.description.length > 100
                ? portfolio.description.substring(0, 105) + '...'
                : portfolio.description
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
          <button
            href="#"
            class="ml-4 inline-block hover:bg-green-500 border-green-500 border-2 dark:border-gray-900 dark:border-2 p-1 rounded-md dark:hover:bg-gray-500 dark:hover:border-gray-500 hover:font-bold"
            v-if="portfolio.visit"
            @click.prevent="open(portfolio.visit)"
          >
            visit website
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    portfolio: {
      type: Object,
    }
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
    showModal() {
      this.$emit("show", this.portfolio);
    },
  }
};
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
  width: 100%;
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

.bheight {
  height: 65px;
  overflow: auto;
}

.pheight {
  height: 110px;
  max-height: 130px;
  overflow: auto;
  text-align: justify;
}

div.img-div {
  position: absolute;
  width: 100%;
  height: 100%;
}
.pborder-top {
  border-top: 1px solid rgb(193, 193, 193);
}

.badge {
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
  display: inline-block;
}
</style>
