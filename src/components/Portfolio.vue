<template>
  <div
      class="py-4 p-st bg-green-200 dark:bg-gray-800"
  >
    <div class="container mx-auto px-4">
      <div
          class="text-center py-3"
      >
        <span
            class="title text-center text-stone-900 dark:text-zinc-50"
        >Portfolio.</span
        >
      </div>
      <hr
          class="mx-auto w-1/2 border-black dark:border-inherit"
      />

      <vue-tabs active-text-color="text-zinc-50">
<!--        <v-tab title="development">-->
          <br />
          <div class="flex flex-wrap">
            <div
                class="xl:basis-1/3 lg:basis-1/3 md:basis-1/2 w-full"
                v-for="(portfolio, idx) in portfolio_info"
                :key="portfolio.name"
            >
              <Card
                  :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }"
                  :portfolio="portfolio"
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
            <button class="animate-bounce inline-block text-stone-900 dark:text-zinc-50 border-2 border-green-500 hover:bg-green-500 dark:border-gray-900 dark:border-2 p-1 rounded-md dark:hover:bg-gray-500 dark:hover:border-gray-500 hover:font-bold" @click.prevent="showMore">{{ showBtn }}</button>
          </div>
<!--        </v-tab>-->
      </vue-tabs>
    </div>
    <transition name="modal">
      <Modal
          :showModal="showModal"
          @close="closeModal"
          v-if="showModal"
          :portfolio="modal_info"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";
// eslint-disable-next-line no-unused-vars
import Carousel from "./helpers/Carousel";


import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Portfolio",
  components: {
    Card,
    Modal,
    VueTabs,
    // eslint-disable-next-line vue/no-unused-components
    VTab,
    // eslint-disable-next-line vue/no-unused-components
    VueperSlides,
    // eslint-disable-next-line vue/no-unused-components
    VueperSlide,
  },
  data() {
    return {
      all_info: [],
      portfolio_info: [],
      showModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 2,
      showBtn: "show more",
      shower: 0,
    };
  },
  async created() {
    let x = 0;
    const querySnapshot = await getDocs(collection(db, "portfolio", 'PgQMkGL6hLNa802ngYMN', 'portfolio_info'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.all_info[x] = doc.data();
      x++;
    });

    for (var i = 0; i < this.number; i++) {
      this.portfolio_info.push(this.all_info[i]);
    }
  },
  watch: {
    number() {
      this.portfolio_info = [];
      for (var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
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
        var elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "show more";
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
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

.btn {
  border-color: #8585ad;
  color: #8585ad;
}

.btn:hover {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

.btn:focus {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

/deep/ .vue-tabs .nav-tabs {
  border: none;
  font-size: 20px;
  font-weight: 500;
  display: flex;

  justify-content: center;
}

/deep/ .vue-tabs .tabs__link {
  color: #a0a0a0;
}

/deep/ .vue-tabs .nav-tabs > li.active > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

/deep/ .vue-tabs .nav-tabs > li > a:hover {
  background: transparent;
  color: #cbcbcb;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li.active > a:after {
  width: 100%;
  transition: all 0.5s;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

/deep/.vueperslide {
  border-radius: 10px !important;
}
/deep/.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
}

.btn:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}
/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: grey;
}

.badge {
  background-color: #bbd4dd;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75
}
</style>
