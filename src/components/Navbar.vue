<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <nav class="border-gray-200 py-2.5 rounded-b-md dark:bg-gray-800 bg-green-200">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" class="flex" @click.prevent="$emit('scroll', 'home')">
          <Logo />
        </a>
        <div class="flex md:order-2">

          <!-- Dark mode switcher -->
          <button
              id="theme-toggle"
              type="button"
              class="text-stone-900 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
                id="theme-toggle-dark-icon"
                class="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
            <svg
                id="theme-toggle-light-icon"
                class="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <!-- Dark mode switcher end -->

          <button data-collapse-toggle="mobile-menu-4" type="button" class="md:hidden text-gray-500 hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2 inline-flex items-center dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-4">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/#about" class="active:bg-green-500 md:bg-transparent font-bold text-green block py-2 md:text-green-300 md:p-1 rounded hover:bg-green-200 dark:hover:bg-gray-400 hover:text-white dark:text-white"
                 @click.prevent="$emit('scroll', 'about')" v-bind:class="{'bg-green-300 dark:bg-gray-500': clicked1, '':!clicked1}"
                 v-on:click="clicked1=!clicked1,clicked2=false,clicked3=false,clicked4=false,clicked5=false">About</a>
            </li>
            <li>
              <a href="/#skills" class="active:bg-stone-50 md:bg-transparent font-bold text-green block py-2 md:text-green-300 md:p-1 rounded hover:bg-green-200 dark:hover:bg-gray-400 hover:text-white dark:text-white"
                 @click.prevent="$emit('scroll', 'skills')" v-bind:class="{'bg-green-300 dark:bg-gray-500': clicked2, '':!clicked2}"
                 v-on:click="clicked2=!clicked2,clicked1=false,clicked3=false,clicked4=false,clicked5=false">Skills</a>
            </li>
            <li>
              <a href="/#portfolio" class="active:bg-stone-50 md:bg-transparent font-bold text-green block py-2 md:text-green-300 md:p-1 rounded hover:bg-green-200 dark:hover:bg-gray-400 hover:text-white dark:text-white"
                 @click.prevent="$emit('scroll', 'portfolio')" v-bind:class="{'bg-green-300 dark:bg-gray-500': clicked3, '':!clicked3}"
                 v-on:click="clicked3=!clicked3,clicked1=false,clicked2=false,clicked4=false,clicked5=false">Portfolio</a>
            </li>
            <li>
              <a href="/#contact" class="active:bg-stone-50 md:bg-transparent font-bold text-green block py-2 md:text-green-300 md:p-1 rounded hover:bg-green-200 dark:hover:bg-gray-400 hover:text-white dark:text-white"
                 @click.prevent="$emit('scroll', 'contact')" v-bind:class="{'bg-green-300 dark:bg-gray-500': clicked4, '':!clicked4}"
                 v-on:click="clicked4=!clicked4,clicked1=false,clicked2=false,clicked3=false,clicked5=false">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "@/components/helpers/Logo";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      clicked1: false,
      clicked2: false,
      clicked3: false,
      clicked4: false,
      clicked5: false,
    };
  },
  components: {
    Logo,
  },
};
</script>