<template>
  <div class="bg-orange-400 w-full flex-wrap h-screen flex justify-center">
    <div class="sticky w-full text-center top-0 h-10 flex items-center justify-center bg-orange-600">
      <strong class="font-mono text-1xl text-orange-200 font-light">
        <slot>Biểu diễn số trong máy tính</slot>
      </strong>
    </div>
    <div class="w-full self-start flex justify-center">
      <div class="self-center sm:max-w-lg w-full sm:h-2/5">
        <slot name="program"></slot>
      </div>
    </div>

    <div
      class="
        bg-white
        shadow-lg
        self-end
        sm:max-w-lg
        w-full
        py-10
        h-3/5
        sm:h-1/2
        rounded-t-2xl
        px-6
      "
    >
      <h2
        class="
          text-3xl
          font-semibold
          text-coolGray-500
          font-sans
          border-l-4 border-orange-400
          pl-3
          inline
        "
      >
        <slot name="title"></slot>
      </h2>
      <section class="mt-6">
        <p class="font-mono text-coolGray-700 text-justify">
          <slot name="description"></slot>
        </p>
        <ul class="ml-4 list-disc font-mono mt-2 text-coolGray-500">
          <li>
            <p><slot name="direction"></slot></p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>
