<template>
  <div class="h-screen py-4 p-st bg-green-200 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div
          class="text-center py-3"
      >
        <span
            class="title text-center text-stone-900 dark:text-zinc-50"
        >Blog.</span
        >
      </div>
      <hr
          class="mx-auto w-1/2 border-black dark:border-inherit"
      />
      <div class="flex flex-wrap">
        <div
          class="w-full"
          v-for="(blog, idx) in blog_info"
          :key="blog.name">
          <BlogCard
              :style="{'transition-delay': (idx % 3) / 4.2 + 's'}"
              :blog="blog"
              class="rounded"
              @show="showModalFn"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
          />
        </div>
      </div>
      <div class="text-center py-3" v-if="showBtn !== 'show less'">
        <button class="inline-block text-stone-900 dark:text-zinc-50 border-2 border-green-500 hover:bg-green-500 dark:border-gray-900 dark:border-2 p-1 rounded-md dark:hover:bg-gray-500 dark:hover:border-gray-500 hover:font-bold" @click.prevent="showMore">{{ showBtn }}</button>
      </div>
    </div>
    <transition name="modal">
      <BlogModal
          :showModal="showModal"
          @close="closeModal"
          v-if="showModal"
          :blog="modal_info"
      />
    </transition>
  </div>
</template>

<script>
import BlogModal from "../../components/helpers/BlogModal.vue";
import BlogCard from "@/components/helpers/BlogCard";

import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Blog",
  components: {
    BlogCard,
    BlogModal,
  },
  data() {
    return{
      all_info: [],
      blog_info: [],
      showModal: false,
      modal_info: {},
      number: 2,
      showBtn: "show more",
      shower: 0,
    }
  },
  async created() {
    let x = 0;
    const querySnapshot = await getDocs(collection(db, "portfolio", 'PgQMkGL6hLNa802ngYMN', 'blog'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.all_info[x] = doc.data();
      x++;
    });

    for (var i = 0; i < this.number; i++) {
      this.blog_info.push(this.all_info[i]);
    }
  },
  watch: {
    number() {
      this.blog_info = [];
      for (var i = 0; i < this.number; i++) {
        this.blog_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(blog) {
      this.modal_info = blog;
      this.showModal = true;
    },
    showMore() {
      if (this.number != this.all_info.length) {
        this.number += 3;

        window.scrollBy({
          top: document.getElementsByClassName("smcard")[0].clientHeight,
          behavior: "smooth",
        });

        if (this.number > this.all_info.length)
          this.number = this.all_info.length;
      }

      if (this.number == this.all_info.length && this.shower == 0) {
        this.shower = 1;
        this.showBtn = "show less";
      } else if (this.number == this.all_info.length && this.shower == 1) {
        var elementPosition = document.getElementById("blog").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "show more";
      }
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>