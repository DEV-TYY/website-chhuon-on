<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
    xdata: {
        type: Object,
        required: true
    }
    })

    const { title, color, header: headers, result: results } = props.xdata
</script>

<template>
  <div class="w-full flex justify-center mb-6">
    <div class="lg:max-w-8xl overflow-hidden w-4/5">

      <!-- Title -->
      <div :class="`lg:text-xl text-lg mb-1 text-center w-full font-roman p-2 text-white ${color}`">
        <h3>{{ title }}</h3>
      </div>

      <div class="scroll">
        <table class="table-auto overflow-x-scroll w-full">
          <!-- Table Head -->
          <thead>
            <tr v-for="(headerRow, index) in headers" :key="index" class="lg:text-xl text-lg whitespace-nowrap">
              <th :class="headerRow.color">{{ headerRow.empty }}</th>
              <th v-if="headerRow.nineHole" :class="`${headerRow.color} border-l-2 font-medium font-roman p-2 text-white`">
                {{ headerRow.nineHole }}
              </th>
              <th v-if="headerRow.eignteenHole || headerRow.eighteenHole" :class="`${headerRow.color} border-l-2 font-medium font-roman p-2 text-white`">
                {{ headerRow.eignteenHole ?? headerRow.eighteenHole }}
              </th>
              <th v-if="headerRow.twentySevenHole" :class="`${headerRow.color} border-l-2 font-medium font-roman p-2 text-white`">
                {{ headerRow.twentySevenHole }}
              </th>
              <th v-if="headerRow.thirtySixHole" :class="`${headerRow.color} border-l-2 font-medium font-roman p-2 text-white`">
                {{ headerRow.thirtySixHole }}
              </th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody>
            <tr v-for="(row, idx) in results" :key="idx" class="font-roman border-b lg:text-xl text-lg bottom-2 whitespace-nowrap text-center">
              <td :class="`p-3 text-right ${row.font ?? ''} ${row.color ?? ''}`" v-html="row.name"></td>
              <td v-if="row.nineHolePrice" :class="`p-3 ${row.font ?? ''} ${row.color ?? ''}`">{{ row.nineHolePrice }}</td>
              <td v-if="row.eignteenHolePrice || row.eighteenHolePrice" :class="`p-3 ${row.font ?? ''} ${row.color ?? ''}`">{{ row.eignteenHolePrice ?? row.eighteenHolePrice }}</td>
              <td v-if="row.twentySevenHolePrice" :class="`p-3 ${row.font ?? ''} ${row.color ?? ''}`">{{ row.twentySevenHolePrice }}</td>
              <td v-if="row.thirtySixHolePrice" :class="`p-3 ${row.font ?? ''} ${row.color ?? ''}`">{{ row.thirtySixHolePrice }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>