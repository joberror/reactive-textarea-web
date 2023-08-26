<template>
  <main class="flex flex-col">
    <header class="layout border-b-2 border-purple-600">
      <ul class="flex w-full items-center justify-between py-4">
        <li class="inline-flex">
          <a href="/" title="Reload this page" class="inline-flex h-9 w-9">
            <svg
              class="h-full w-full fill-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="32"
                height="32"
                rx="4"
                class="stroke-purple-600"
                stroke-width="4"
              />
              <path class="stroke-black" stroke-width="2" d="M10 21V9" />
            </svg>
          </a>
        </li>
        <li class="inline-flex">
          <a
            href="https://github.com/joberror/reactive-textarea"
            title="npm install -D @iamjoberror/reactive-textarea"
            class="group inline-flex w-28 justify-center rounded border border-purple-600 bg-purple-600 p-2 transition-all duration-300 hover:bg-white"
          >
            <ul class="flex items-center gap-4">
              <li class="inline-flex">
                <span class="inline-flex h-6 w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-full w-full fill-none stroke-white group-hover:stroke-purple-600"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M3 15h17M4 9h17m-6 12 2-18M7 21 9 3" />
                  </svg>
                </span>
              </li>
              <li
                class="text-sm font-semibold text-white group-hover:text-purple-600"
              >
                v2.1.1
              </li>
            </ul>
          </a>
        </li>
      </ul>
    </header>
    <section class="layout flex-col bg-bg-gradient pb-8">
      <h1
        class="inline w-fit bg-purple-600 px-4 py-2 md:px-6 md:py-4 font-heading text-lg md:text-xl lg:text-2xl font-semibold text-white"
      >
        reactive-textarea
      </h1>
      <div>
        <h2 class="py-4 font-heading text-2xl md:text-4xl text-black">
          Enhances HTML
          <span class="text-purple-600/80">&lt;textarea&gt;</span> element.
        </h2>
        <p
          class="w-full md:w-[75vw] lg:w-[60vw] xl:w-[35vw] text-base md:text-xl font-medium"
        >
          Unleash the full potential of the &lt;textarea&gt; element with this
          plugin, offering advanced functionalities like text and word counting,
          filtering and limiting.
        </p>
      </div>
      <div class="flex flex-col content-center items-center py-10">
        <h3
          class="font-heading text-2xl md:text-4xl font-semibold text-pink-400"
        >
          Explore all features
        </h3>
        <menu class="mt-8 flex items-center gap-4 md:gap-10">
          <li class="inline-flex">
            <button
              class="menu"
              :class="{ 'menu-active': isActive === 1 }"
              @click="toggleActive(1)"
            >
              Counter
            </button>
          </li>
          <li class="inline-flex">
            <button
              class="menu"
              :class="{ 'menu-active': isActive === 2 }"
              @click="toggleActive(2)"
            >
              Limiter
            </button>
          </li>
          <li class="inline-flex">
            <button
              class="menu"
              :class="{ 'menu-active': isActive === 3 }"
              @click="toggleActive(3)"
            >
              Filter
            </button>
          </li>
          <li class="inline-flex">
            <button
              class="menu"
              :class="{ 'menu-active': isActive === 4 }"
              @click="toggleActive(4)"
            >
              Callback
            </button>
          </li>
        </menu>
      </div>
      <div
        class="grid md:grid-cols-2 divide-y md:divide-x md:divide-y-0 divide-pink-300"
      >
        <div class="md:pr-6 pb-6 md:pb-0">
          <h4
            class="inline-flex border-l border-violet-600 pl-6 pt-4 md:pt-6 text-2xl md:text-3xl font-medium text-black/80 before:absolute before:ml-[-20px] before:md:mt-[4px] before:text-4xl before:text-pink-300 before:content-['.']"
          >
            <span class="hidden" :class="{ '!inline': isActive === 1 }"
              >Counter</span
            >
            <span class="hidden" :class="{ '!inline': isActive === 2 }"
              >Limiter</span
            >
            <span class="hidden" :class="{ '!inline': isActive === 3 }"
              >Filter</span
            >
            <span class="hidden" :class="{ '!inline': isActive === 4 }"
              >Callback</span
            >
          </h4>
          <p
            class="mt-2 pl-6 text-base md:text-lg xl:text-xl font-normal text-slate-700"
          >
            <span class="hidden" :class="{ '!inline': isActive === 1 }"
              >Texts or words get counted as user types.</span
            >
            <span class="hidden" :class="{ '!inline': isActive === 2 }"
              >Restricts the textarea to a set value of texts or words.</span
            >
            <span class="hidden" :class="{ '!inline': isActive === 3 }"
              >Automatically removes unwanted texts or words.</span
            >
            <span class="hidden" :class="{ '!inline': isActive === 4 }"
              >Runs an attached function as user types.</span
            >
          </p>
          <ul
            class="mt-4 w-full xl:w-3/4 rounded-lg bg-fuchsia-100/75 py-6 pl-6 font-mono text-sm md:text-base leading-loose shadow"
          >
            <li>
              <code>
                <span class="text-violet-600">reactiveTextarea</span>
                <span class="italic text-black">.config</span>
                <span class="text-pink-600">(</span>
                <span class="text-violet-400">{</span>
              </code>
            </li>
            <li class="ml-4">
              <code>
                <span class="text-slate-400">el</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-teal-600">textarea</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li class="ml-4">
              <code>
                <span class="text-slate-400">enableCounter</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-teal-400">true</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li class="ml-4 hidden" :class="{ '!flex': activateWord }">
              <code>
                <span class="text-slate-400">countOrLimitType</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-teal-600">"word"</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li
              class="ml-4 hidden"
              :class="{ '!flex': isActive === 2 || isActive === 4 }"
            >
              <code>
                <span class="text-slate-400">enableLimiter</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-teal-400">true</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li
              class="ml-4 hidden"
              :class="{ '!flex': isActive === 2 || isActive === 4 }"
            >
              <code>
                <span class="text-slate-400">maxAllowed</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-teal-600">100</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li class="ml-4 hidden" :class="{ '!flex': isActive === 3 }">
              <code>
                <span class="text-slate-400">enableFilter</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-teal-400">true</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li class="ml-4 hidden" :class="{ '!flex': isActive === 3 }">
              <code>
                <span class="text-slate-400">wordsToFilter</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-teal-600">["dumb", "stupid"]</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li class="ml-4 hidden" :class="{ '!flex': isActive === 3 }">
              <code>
                <span class="text-slate-400">enableStrictFiltering</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-pink-400">false</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li class="ml-4 hidden" :class="{ '!flex': isActive === 4 }">
              <code>
                <span class="text-slate-400">callbackFunc</span>
                <span class="text-black">:</span>
                <span class="ml-2 text-pink-800">logAll</span>
                <span class="text-black">,</span>
              </code>
            </li>
            <li>
              <code>
                <span class="text-violet-400">}</span>
                <span class="text-pink-600">)</span>
              </code>
            </li>
            <li class="mt-6">
              <code>
                <span class="text-violet-600">reactiveTextarea</span>
                <span class="italic text-black">.init</span>
                <span class="text-pink-600">()</span>
              </code>
            </li>
          </ul>
        </div>
        <div class="flex w-full justify-end">
          <div class="flex w-full xl:w-3/4 md:pl-6 flex-col">
            <div
              class="z-0 flex w-full flex-col rounded-lg bg-fuchsia-100 px-4 pt-4 pb-10 shadow"
            >
              <ul class="flex justify-between pb-10 font-mono">
                <li>
                  <dl
                    class="hidden flex-col items-center gap-3"
                    :class="{
                      '!flex': isActive === 3 || isActive === 4,
                    }"
                  >
                    <dd
                      class="inline-flex rounded border border-pink-400/70 bg-white/50 px-2 py-0.5 text-sm md:text-base font-medium text-black/60 shadow"
                    >
                      FILTER
                    </dd>
                    <dt
                      ref="textareaFilterRef"
                      class="text-2xl font-medium text-pink-400"
                    >
                      0
                    </dt>
                  </dl>
                </li>
                <li>
                  <dl class="flex flex-col items-center gap-3">
                    <dd
                      class="inline-flex text-sm md:text-base font-medium text-black"
                    >
                      COUNTER
                    </dd>
                    <dt
                      ref="textareaCounterRef"
                      class="inline-flex rounded-md border border-slate-400/70 bg-white/40 px-4 py-2 text-3xl lg:text-6xl font-medium text-slate-500 shadow"
                    >
                      0
                    </dt>
                  </dl>
                </li>
                <li>
                  <dl
                    class="hidden flex-col items-center gap-3"
                    :class="{
                      '!flex': isActive === 2 || isActive === 4,
                    }"
                  >
                    <dd
                      class="inline-flex rounded border border-teal-400/70 bg-white/50 px-2 py-0.5 text-sm md:text-base font-medium text-black/60 shadow"
                    >
                      REM
                    </dd>
                    <dt
                      ref="textareaReminderRef"
                      class="text-lg lg:text-2xl font-medium text-slate-600"
                    >
                      0
                    </dt>
                  </dl>
                </li>
              </ul>
              <ul
                class="flex w-full justify-between rounded-lg bg-white/50 p-4 text-slate-600"
              >
                <li>
                  <span
                    data-before="En"
                    data-after="Dis"
                    :class="{
                      'before:content-[attr(data-before)]': !activateWord,
                      'before:content-[attr(data-after)]': activateWord,
                    }"
                    >able
                  </span>
                  <b>word</b> count or limit
                </li>
                <li>
                  <label
                    for="wordActivator"
                    class="relative inline-flex cursor-pointer select-none items-center"
                  >
                    <input
                      id="wordActivator"
                      type="checkbox"
                      name="wordActivator"
                      class="sr-only"
                      @click="activateWord = !activateWord"
                    />
                    <span
                      class="flex h-[24px] w-[42px] items-center rounded-full bg-pink-200 p-1 duration-200"
                      :class="{ 'bg-pink-400': activateWord }"
                      ><span
                        class="h-4 w-4 rounded-full bg-white duration-200"
                        :class="{ 'ml-auto': activateWord }"
                      ></span
                    ></span>
                  </label>
                </li>
              </ul>
            </div>
            <div
              class="z-10 mt-[-40px] flex w-full rounded-lg border-2 border-pink-400 bg-white p-6 shadow"
            >
              <textarea
                ref="textareaRef"
                class="w-full lg:text-xl text-black/70 outline-0 placeholder:text-pink-200"
                placeholder="Type here to experiment"
                name="reactiveTextarea"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="flex justify-center py-4">
      <ul class="flex flex-row">
        <li>made with</li>
        <li class="inline-flex">
          <span class="mx-2 inline-flex h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              xml:space="preserve"
              class="h-full w-full fill-pink-600"
            >
              <path
                d="M9 10c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1zm21 2c0 6.11-6.453 11.299-10.597 14a42.416 42.416 0 0 1-2.928 1.75.997.997 0 0 1-.951 0A41.965 41.965 0 0 1 12.595 26C8.452 23.298 2 18.11 2 12a8 8 0 0 1 8-8 7.972 7.972 0 0 1 6 2.721A7.972 7.972 0 0 1 22 4a8 8 0 0 1 8 8zm-20-2a2 2 0 1 0-3.999-.001A2 2 0 0 0 10 10z"
              />
            </svg>
          </span>
        </li>
        <li>
          by
          <a
            class="hover:underline"
            href="https://iamjoberror.com"
            title="Olakunle Bolarinwa's website"
            >Olakunle Bolarinwa</a
          >
        </li>
      </ul>
    </footer>
  </main>
</template>
<script setup>
import { ref, onMounted, onUpdated } from "vue";

const isActive = ref(1); // 1 = Counter, 2 = Limiter, 3 = Filter, 4 = Callback
const activateWord = ref(false);
const textareaRef = ref(null);
const textareaCounterRef = ref(0);
const textareaReminderRef = ref(0);
const textareaFilterRef = ref(0);
const { $reactiveTextArea } = useNuxtApp();

function toggleActive(buttonIndex) {
  isActive.value = buttonIndex;
}

onUpdated(() => {
  callReactive();
  $reactiveTextArea.reset();
});

onMounted(() => {
  callReactive();
});

function callReactive() {
  $reactiveTextArea.config({
    element: textareaRef.value,
    enableCounter: true,
    countOrLimitType: !activateWord.value ? "text" : "word",
    enableLimiter: !!(isActive.value === 2 || isActive.value === 4),
    maxAllowed: 100,
    enableFilter: !!(isActive.value === 3 || isActive.value === 4),
    wordsToFilter: ["dumb", "stupid"],
    enableStrictFiltering: false,
    callbackFunc: logAll,
  });

  $reactiveTextArea.init();
  function logAll(args) {
    textareaReminderRef.value.innerText = 100 - args.inputsCount;
    textareaCounterRef.value.innerText = args.inputsCount;
    textareaFilterRef.value.innerText = args.numOfWordsFiltered;
  }
}
</script>
