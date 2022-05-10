<template>
  <div>
    <div class="mx-3 mt-3 mb-5">
      <div class="flex flex-wrap">
        <div class="basis-auto">
          <p
            class="text-2xl dark:text-orange-200 font-bold"
          >
            {{ data.title }}
          </p>
          <ul
            class="timeline m-0 pt-1"
            v-for="(e, idx) in data.data"
            :key="e.name"
            :style="{ 'transition-delay': idx / 4.2 + 's' }"
          >
            <li class="m-0 pb-2">
              <div>
                <div class="px-4 text-lg dark:text-orange-100 font-semibold">{{ e.name }}, {{ e.place }}</div>
                <div class="px-2 text-base dark:text-orange-200">
                  {{ e.degree || e.position }}
                </div>
                <div class="px-2 date dark:text-orange-200 font-medium">{{ e.date }}</div>
                <div class="px-2 py-2" style="text-align: justify;">
                  {{ e.description }}
                </div>
                <span
                  class="rounded mx-2 p-2 mb-2 inline-block dark:bg-red-400 bg-green-300 dark:text-stone-900"
                  v-for="s in e.skills"
                  :key="s"
                  >{{ s }}</span
                >
                <p class="m-2"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Timeline",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.date {
  font-size: 14px;
  font-weight: 300;
}

ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 12px;
  width: 2px;
  height: 93%;
  margin-top: 20px;
  z-index: 30;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: " ";
  background: #86efac;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #86efac;
  left: 0px;
  width: 25px;
  height: 25px;
  z-index: 30;
}
</style>
