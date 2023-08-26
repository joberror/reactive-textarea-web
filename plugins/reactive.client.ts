/* eslint-disable @typescript-eslint/no-unused-vars */
import { reactiveTextArea } from "@iamjoberror/reactive-textarea";
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      reactiveTextArea,
    },
  };
});
