<template>
  <div class="p-st py-4 dark:bg-gray-700 bg-green-300 left-0 right-0 text-stone-900 dark:text-gray-400">
    <div class="container mx-auto px-4">
      <div
        class="text-center py-3"
      >
        <span
          class="dark:text-zinc-50 text-stone-900 font-medium text-3xl text-center"
          >Skills.</span
        >
      </div>
      <hr
        class="w-1/2 mx-auto border-black dark:border-inherit"
      />
      <br />
      <div class="text-center pb-5 flex flex-wrap px-4">
        <div
          class="w-full basis-1/3 pb-10"
          v-for="(skill, idx) in skills"
          :key="skill.title"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
        >
          <div class="text-lg"><i :class="skill.icon"></i></div>
          <hr
              class="mx-auto w-1/2 border-black dark:border-inherit"
          />
          <div class="text-lg pt-2 dark:text-stone-50 text-stone-900">{{ skill.title }}</div>
          <span class="text-base dark:text-stone-50 text-stone-900">{{ skill.info.join(", ") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Skills",
  data() {
    return {
      skills: [],
      temp: [],
    };
  },
  methods:{
    setInfo(){
      this.skills = this.temp;
    }
  },
  async created() {
    let i = 0;
    const querySnapshot = await getDocs(collection(db, "portfolio", 'PgQMkGL6hLNa802ngYMN', 'skills'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.temp[i] = doc.data();
      i++;
    });

    this.setInfo();
  },
};
</script>

<style scoped>
.fa {
  color: #f8fafc;
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: #f8fafc;
  font-size: 40px;
  /* font-weight: bold; */
  transition: all 0.5s;
}
</style>
