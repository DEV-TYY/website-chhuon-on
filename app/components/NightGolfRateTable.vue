<script setup lang="ts">

/* =======================
   Types
======================= */
interface Header {
  empty: string
  nineHole: string
  eighteenHole: string
  color: string
}

interface Result {
  name: string
  nineHolePrice: string
  eighteenHolePrice: string
  color: string
  font: string
}

export interface RateItem {
  title: string
  color: string
  header: Header[]
  result: Result[]
}

/* =======================
   Props
======================= */
const props = defineProps<{
  leftData: RateItem[]
  rightData: RateItem[]
}>()

</script>

<template>
  <div class="w-full flex justify-center">
    <div class="lg:max-w-8xl gap-3 w-4/5 grid justify-center lg:grid-cols-2 grid-cols-1">

      <!-- LEFT COLUMN -->
      <div class="w-full mt-8">
        <div v-for="(item, index) in props.leftData" :key="'left-' + index">

          <div class="lg:text-xl text-lg mb-1 text-center font-roman p-2 text-white"
               :class="item.color">
            <h3>{{ item.title }}</h3>
          </div>

          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead>
                <tr v-for="(header, hIndex) in item.header"
                    :key="hIndex"
                    class="lg:text-xl text-lg whitespace-nowrap">

                  <th :class="header.color">{{ header.empty }}</th>

                  <th :class="[header.color, 'border-l-2 font-medium font-roman p-2 text-white']">
                    {{ header.nineHole }}<br>
                    <span class="text-sm">(Price after discount)</span>
                  </th>

                  <th :class="[header.color, 'border-l-2 font-medium font-roman p-2 text-white']">
                    {{ header.eighteenHole }}<br>
                    <span class="text-sm">(Price after discount)</span>
                  </th>

                </tr>
              </thead>

              <tbody>
                <tr v-for="(result, rIndex) in item.result"
                    :key="rIndex"
                    class="font-roman border-b whitespace-nowrap text-right">

                  <td class="p-3 font-bold text-darkCyan"
                      v-html="result.name" />

                  <td class="text-center text-xl"
                      :class="[result.color, result.font]">
                    {{ result.nineHolePrice }}
                  </td>

                  <td class="text-center text-xl"
                      :class="[result.color, result.font]">
                    {{ result.eighteenHolePrice }}
                  </td>

                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="w-full lg:mt-8 mt-6">
        <div v-for="(item, index) in props.rightData" :key="'right-' + index">

          <div class="lg:text-xl text-lg mb-1 text-center font-roman p-2 text-white"
               :class="item.color">
            <h3>{{ item.title }}</h3>
          </div>

          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead>
                <tr v-for="(header, hIndex) in item.header"
                    :key="hIndex"
                    class="lg:text-xl text-lg whitespace-nowrap">

                  <th :class="header.color">{{ header.empty }}</th>

                  <th :class="[header.color, 'border-l-2 font-medium font-roman p-2 text-white']">
                    {{ header.nineHole }}<br>
                    <span class="text-sm">(Price after discount)</span>
                  </th>

                  <th :class="[header.color, 'border-l-2 font-medium font-roman p-2 text-white']">
                    {{ header.eighteenHole }}<br>
                    <span class="text-sm">(Price after discount)</span>
                  </th>

                </tr>
              </thead>

              <tbody>
                <tr v-for="(result, rIndex) in item.result"
                    :key="rIndex"
                    class="font-roman border-b whitespace-nowrap text-right">

                  <td class="p-3 font-bold text-darkCyan"
                      v-html="result.name" />

                  <td class="text-center text-xl"
                      :class="[result.color, result.font]">
                    {{ result.nineHolePrice }}
                  </td>

                  <td class="text-center text-xl"
                      :class="[result.color, result.font]">
                    {{ result.eighteenHolePrice }}
                  </td>

                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>