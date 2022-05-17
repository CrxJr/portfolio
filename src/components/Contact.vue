<template>
  <div
      class="py-4 p-st dark:bg-gray-700 bg-green-300 text-stone-900 dark:text-gray-400"
  >
    <div class="container mx-auto px-4">
      <div
          class="text-center"
      >
        <span
            class="title text-center dark:text-zinc-50 text-stone-900"
        >Contact.</span
        >
      </div>
      <hr
          class="mx-auto w-1/2 border-black dark:border-inherit"
      />
      <br />
      <div class="text-center">
        <div
            class="mb-3"
        >
          <input
              type="text"
              name="user_name"
              v-model="name"
              placeholder="Name"
              class="pinput dark:bg-zinc-400 dark:text-zinc-50"
              style="transition-delay: 0.2s"
          />
        </div>

        <div
            class="my-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
        >
          <input
              type="email"
              name="user_email"
              v-model="email"
              placeholder="Email"
              class="pinput dark:bg-zinc-400 dark:text-zinc-50"
              style="transition-delay: 0.4s"
          />
        </div>

        <div
            class="my-3"
        >
          <textarea
              name="message"
              v-model="text"
              placeholder="Message"
              class="pinput dark:bg-zinc-400 dark:text-zinc-50"
              rows="4"
              style="transition-delay: 0.6s"
          ></textarea>
        </div>

        <button
            @click.prevent="sendEmail"
            class="mt-1 mb-3 mx-auto w-1/6 rounded dark:text-zinc-50 hover:font-bold hover:bg-green-500 border-2 border-green-500 dark:border-gray-800 dark:hover:bg-gray-800"
        >
          Send
        </button>
      </div>

      <Snackbar
          :showSnackbar="showSnackbar"
          @close="closeSnackbar"
          :snackbarMessage="snackbarMessage"
          :snackbarColor="snackbarColor"
      />
    </div>
  </div>
</template>

<script>
import config from "../../config";
import emailjs from "emailjs-com";

import Snackbar from "./helpers/Snackbar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  components: {
    Snackbar,
  },
  data() {
    return {
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    sendEmail() {
      if (!this.email || !this.name || !this.text) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please fill all the fields";
        this.snackbarColor = "#64808E";
      } else {
        var obj = {
          user_email: this.email,
          from_name: this.name,
          message: this.text,
          to_name: "Cristian Cantillo",
        };

        emailjs
            .send(
                config.emailjs.serviceID,
                config.emailjs.templateID,
                obj,
                config.emailjs.userID
            )
            .then(
                // eslint-disable-next-line no-unused-vars
                (result) => {
                  this.showSnackbar = true;
                  this.snackbarMessage = "Thanks! Message recieved.";
                  this.snackbarColor = "#1aa260";

                  this.email = "";
                  this.text = "";
                  this.name = "";
                },
                // eslint-disable-next-line no-unused-vars
                (error) => {
                  this.showSnackbar = true;
                  this.snackbarMessage = "Oops! Something went wrong.";
                  this.snackbarColor = "#64808E";
                }
            );
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

.pinput {
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
}

/*.btn {
  border-color: #759CC9;
  color: #759CC9;
  width: 50%;
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
}*/

.pgray-dark {
  background-color: #3c4148 !important;
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }
  .pinput {
    width: 90%;
  }

  .btn {
    width: 90%;
  }
}
</style>
