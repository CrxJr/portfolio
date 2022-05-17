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
          <Timeline :data="education"/>
        </div>
        <div class="w-full xl:basis-1/2 lg:basis-1/2 md:basis-1/2">
          <Timeline :data="experience"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import info from "../../info";
import Timeline from "./helpers/Timeline";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase";

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
        data: [],
      },
      experience: {
        title: "Experiences",
        data: [],
      },
      tempEdu: [],
      tempExp: [],
    };
  },
  methods: {
    setInfo(){
      this.education.data = this.tempEdu;
      this.experience.data = this.tempExp;
    }
  },
  async created() {
    let i = 0;
    const querySnapshot = await getDocs(collection(db, "portfolio", 'PgQMkGL6hLNa802ngYMN', 'education'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.tempEdu[i] = doc.data();
      i++;
    });

    let x = 0;
    const querySnapshot2 = await getDocs(collection(db, "portfolio", 'PgQMkGL6hLNa802ngYMN', 'experiences'));
    querySnapshot2.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.tempExp[x] = doc.data();
      x++;
    });

    this.setInfo();
  }
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>
