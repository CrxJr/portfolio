<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container xl:w-3/6 lg:w-4/6 md:w-10/12 sm:w-10/12 bg-white dark:bg-gray-600"
        >
          <div class="title1 px-4 pt-3">
            <span
              ><a
                href="#"
                @click.prevent="open(portfolio.visit)"
                class="dark:text-white"
                >{{ portfolio.name }}</a
              ></span
            >
            <a
              class="float-right dark:text-white text-stone-900"
              style="font-size: 18px;"
              @click="$emit('close')"
              ><i class="fas fa-times"></i
            ></a>
            <hr
              class="my-1"
            />
          </div>
          <div class="modal-body my-0 pb-0 px-4 pt-0">
            <div
              class="mb-2 date text-stone-900 dark:text-zinc-50"
            >
              <span>{{ portfolio.date }} • {{ portfolio.category }}</span>
            </div>
            <div class="pb-1 bheight text-stone-900 dark:text-zinc-50">
              <span
                class="badge mr-2 mb-2 bg-green-500 dark:bg-gray-900 p-1 rounded"
                v-for="tech in portfolio.technologies"
                :key="tech"
                >{{ tech }}</span
              >
            </div>

            <div class="justify-center text-stone-900 dark:text-zinc-50">
              <span v-html="portfolio.desc"></span>
            </div>
            <hr />
            <div>
              <Gallery :images="portfolio.pictures" />
            </div>
          </div>

          <div class="text-center pb-3">
            <hr
              class="mt-1 mb-3"
            />
            <button class="inline-block text-stone-900 dark:text-zinc-50 border-2 border-green-500 hover:bg-green-500 dark:border-gray-900 dark:border-2 p-1 rounded-md dark:hover:bg-gray-500 dark:hover:border-gray-500 hover:font-bold mr-5" @click="open(portfolio.github)">
              github
            </button>
            <button class="inline-block text-stone-900 dark:text-zinc-50 border-2 border-green-500 hover:bg-green-500 dark:border-gray-900 dark:border-2 p-1 rounded-md dark:hover:bg-gray-500 dark:hover:border-gray-500 hover:font-bold" @click="$emit('close')">close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Gallery from "./Gallery";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Carousel,
    Gallery,
  },
  props: {
    showModal: {
      type: Boolean,
    },
    portfolio: {
      type: Object,
    },
  },
  created() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
body.modal-open {
  overflow: hidden;
}

a {
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

a:hover {
  transition: all 0.2s;
  color: gray;
}

.date {
  font-size: 14px;
  font-weight: 400;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.modal-container {
  max-height: 70%;
  margin: 0px auto;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
}


.modal-body {
  margin: 20px 0;
  overflow-y: scroll;
  max-height: inherit;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.badge {
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
  display: inline-block;
}

.badge:hover {
  transition: all 0.5s;
  box-shadow: 2px 2px 5px rgb(179, 179, 179);
}

</style>
