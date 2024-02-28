import { createApp } from "vue";
import { defineRule, configure } from "vee-validate";
import { confirmed, min, required } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";

defineRule("min", min);
defineRule("comfirm", confirmed);
defineRule("required", required);

configure({
  validateOnInput: true,
  validateOnBlur: true,
  generateMessage: localize("en", {
    messages: {
      // use a function
      required: () => `Can't be empty`,
      confirmed: (context: any) => `The ${context.field} does not match.`,
      // or use the special syntax offered by the library
      min: "The {field} must be at least 0:{min} characters.",
    },
  }),
});
createApp(App).use(router).mount("#app");
