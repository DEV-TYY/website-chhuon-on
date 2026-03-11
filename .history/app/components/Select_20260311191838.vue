<script setup lang="ts">
    import { ref } from 'vue'

    const props = defineProps({
        modelValue: String,
        codeName: {
            type: String,
            default: "code"
        },
        phoneName: {
            type: String,
            default: "phone"
        },
        error: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['update:modelValue', 'update:code'])

    const showCountries = ref(false)

    const countries = [
        { name: "Afghanistan", dialCode: "+93", iso: "AF" },
        { name: "Albania", dialCode: "+355", iso: "AL" },
        { name: "Algeria", dialCode: "+213", iso: "DZ" },
        { name: "American Samoa", dialCode: "+1-684", iso: "AS" },
        { name: "Andorra", dialCode: "+376", iso: "AD" },
        { name: "Angola", dialCode: "+244", iso: "AO" },
        { name: "Anguilla", dialCode: "+1-264", iso: "AI" },
        { name: "Antigua and Barbuda", dialCode: "+1-268", iso: "AG" },
        { name: "Argentina", dialCode: "+54", iso: "AR" },
        { name: "Armenia", dialCode: "+374", iso: "AM" },
        { name: "Aruba", dialCode: "+297", iso: "AW" },
        { name: "Australia", dialCode: "+61", iso: "AU" },
        { name: "Austria", dialCode: "+43", iso: "AT" },
        { name: "Azerbaijan", dialCode: "+994", iso: "AZ" },
        { name: "Bahamas", dialCode: "+1-242", iso: "BS" },
        { name: "Bahrain", dialCode: "+973", iso: "BH" },
        { name: "Bangladesh", dialCode: "+880", iso: "BD" },
        { name: "Barbados", dialCode: "+1-246", iso: "BB" },
        { name: "Belarus", dialCode: "+375", iso: "BY" },
        { name: "Belgium", dialCode: "+32", iso: "BE" },
        { name: "Belize", dialCode: "+501", iso: "BZ" },
        { name: "Benin", dialCode: "+229", iso: "BJ" },
        { name: "Bermuda", dialCode: "+1-441", iso: "BM" },
        { name: "Bhutan", dialCode: "+975", iso: "BT" },
        { name: "Bolivia", dialCode: "+591", iso: "BO" },
        { name: "Bosnia and Herzegovina", dialCode: "+387", iso: "BA" },
        { name: "Botswana", dialCode: "+267", iso: "BW" },
        { name: "Brazil", dialCode: "+55", iso: "BR" },
        { name: "British Virgin Islands", dialCode: "+1-284", iso: "VG" },
        { name: "Brunei", dialCode: "+673", iso: "BN" },
        { name: "Bulgaria", dialCode: "+359", iso: "BG" },
        { name: "Burkina Faso", dialCode: "+226", iso: "BF" },
        { name: "Burundi", dialCode: "+257", iso: "BI" },
        { name: "Cambodia", dialCode: "+855", iso: "KH" },
        { name: "Cameroon", dialCode: "+237", iso: "CM" },
        { name: "Canada", dialCode: "+1", iso: "CA" },
        { name: "Cape Verde", dialCode: "+238", iso: "CV" },
        { name: "Cayman Islands", dialCode: "+1-345", iso: "KY" },
        { name: "Central African Republic", dialCode: "+236", iso: "CF" },
        { name: "Chad", dialCode: "+235", iso: "TD" },
        { name: "Chile", dialCode: "+56", iso: "CL" },
        { name: "China", dialCode: "+86", iso: "CN" },
        { name: "Colombia", dialCode: "+57", iso: "CO" },
        { name: "Comoros", dialCode: "+269", iso: "KM" },
        { name: "Congo - Brazzaville", dialCode: "+242", iso: "CG" },
        { name: "Congo - Kinshasa", dialCode: "+243", iso: "CD" },
        { name: "Costa Rica", dialCode: "+506", iso: "CR" },
        { name: "Croatia", dialCode: "+385", iso: "HR" },
        { name: "Cuba", dialCode: "+53", iso: "CU" },
        { name: "Cyprus", dialCode: "+357", iso: "CY" },
        { name: "Czech Republic", dialCode: "+420", iso: "CZ" },
        { name: "Denmark", dialCode: "+45", iso: "DK" },
        { name: "Djibouti", dialCode: "+253", iso: "DJ" },
        { name: "Dominica", dialCode: "+1-767", iso: "DM" },
        { name: "Dominican Republic", dialCode: "+1-809", iso: "DO" },
        { name: "Ecuador", dialCode: "+593", iso: "EC" },
        { name: "Egypt", dialCode: "+20", iso: "EG" },
        { name: "El Salvador", dialCode: "+503", iso: "SV" },
        { name: "Estonia", dialCode: "+372", iso: "EE" },
        { name: "Ethiopia", dialCode: "+251", iso: "ET" },
        { name: "Finland", dialCode: "+358", iso: "FI" },
        { name: "France", dialCode: "+33", iso: "FR" },
        { name: "Germany", dialCode: "+49", iso: "DE" },
        { name: "Greece", dialCode: "+30", iso: "GR" },
        { name: "Hong Kong", dialCode: "+852", iso: "HK" },
        { name: "Hungary", dialCode: "+36", iso: "HU" },
        { name: "Iceland", dialCode: "+354", iso: "IS" },
        { name: "India", dialCode: "+91", iso: "IN" },
        { name: "Indonesia", dialCode: "+62", iso: "ID" },
        { name: "Iran", dialCode: "+98", iso: "IR" },
        { name: "Iraq", dialCode: "+964", iso: "IQ" },
        { name: "Ireland", dialCode: "+353", iso: "IE" },
        { name: "Israel", dialCode: "+972", iso: "IL" },
        { name: "Italy", dialCode: "+39", iso: "IT" },
        { name: "Japan", dialCode: "+81", iso: "JP" },
        { name: "Jordan", dialCode: "+962", iso: "JO" },
        { name: "Kazakhstan", dialCode: "+7", iso: "KZ" },
        { name: "Kenya", dialCode: "+254", iso: "KE" },
        { name: "Kuwait", dialCode: "+965", iso: "KW" },
        { name: "Laos", dialCode: "+856", iso: "LA" },
        { name: "Latvia", dialCode: "+371", iso: "LV" },
        { name: "Lebanon", dialCode: "+961", iso: "LB" },
        { name: "Lithuania", dialCode: "+370", iso: "LT" },
        { name: "Luxembourg", dialCode: "+352", iso: "LU" },
        { name: "Malaysia", dialCode: "+60", iso: "MY" },
        { name: "Maldives", dialCode: "+960", iso: "MV" },
        { name: "Mexico", dialCode: "+52", iso: "MX" },
        { name: "Mongolia", dialCode: "+976", iso: "MN" },
        { name: "Morocco", dialCode: "+212", iso: "MA" },
        { name: "Myanmar (Burma)", dialCode: "+95", iso: "MM" },
        { name: "Nepal", dialCode: "+977", iso: "NP" },
        { name: "Netherlands", dialCode: "+31", iso: "NL" },
        { name: "New Zealand", dialCode: "+64", iso: "NZ" },
        { name: "Nigeria", dialCode: "+234", iso: "NG" },
        { name: "North Korea", dialCode: "+850", iso: "KP" },
        { name: "Norway", dialCode: "+47", iso: "NO" },
        { name: "Pakistan", dialCode: "+92", iso: "PK" },
        { name: "Philippines", dialCode: "+63", iso: "PH" },
        { name: "Poland", dialCode: "+48", iso: "PL" },
        { name: "Portugal", dialCode: "+351", iso: "PT" },
        { name: "Qatar", dialCode: "+974", iso: "QA" },
        { name: "Romania", dialCode: "+40", iso: "RO" },
        { name: "Russia", dialCode: "+7", iso: "RU" },
        { name: "Saudi Arabia", dialCode: "+966", iso: "SA" },
        { name: "Singapore", dialCode: "+65", iso: "SG" },
        { name: "South Africa", dialCode: "+27", iso: "ZA" },
        { name: "South Korea", dialCode: "+82", iso: "KR" },
        { name: "Spain", dialCode: "+34", iso: "ES" },
        { name: "Sri Lanka", dialCode: "+94", iso: "LK" },
        { name: "Sweden", dialCode: "+46", iso: "SE" },
        { name: "Switzerland", dialCode: "+41", iso: "CH" },
        { name: "Taiwan", dialCode: "+886", iso: "TW" },
        { name: "Thailand", dialCode: "+66", iso: "TH" },
        { name: "Turkey", dialCode: "+90", iso: "TR" },
        { name: "Ukraine", dialCode: "+380", iso: "UA" },
        { name: "United Arab Emirates", dialCode: "+971", iso: "AE" },
        { name: "United Kingdom", dialCode: "+44", iso: "GB" },
        { name: "United States", dialCode: "+1", iso: "US" },
        { name: "Uruguay", dialCode: "+598", iso: "UY" },
        { name: "Uzbekistan", dialCode: "+998", iso: "UZ" },
        { name: "Vietnam", dialCode: "+84", iso: "VN" },
        { name: "Yemen", dialCode: "+967", iso: "YE" },
        { name: "Zambia", dialCode: "+260", iso: "ZM" },
        { name: "Zimbabwe", dialCode: "+263", iso: "ZW" }
    ]

    function formatPhone(event: Event){
        const input = event.target as HTMLInputElement

        // remove letters
        const numeric = input.value.replace(/[^\d]/g,"")



        const formatted = formatter.input(numeric)

        input.value = formatted
        emit("update:modelValue", formatted)
    }

    // Default selected country: Cambodia
    const selectedCountry = ref(countries.find(c => c.name === "Cambodia") || countries[0])


    function selectCountry(country:any) {
        selectedCountry.value = country
        showCountries.value = false
        emit('update:code', country.dialCode)
    }

</script>

<template>

    <div class="lg:mb-8 mb-6">
        <label class="text-darkCyan text-2xl font-roman">PHONE NUMBER</label>
        <div id="phoneContainer" class="flex items-center border rounded-md relative" :class="error ? 'border-red-500' : 'border-darkCyan'">
            <!-- Country Select -->
            <div class="custom-select z-30 relative">
                    <div class="select-selected cursor-pointer w-3 px-3 py-2" @click="showCountries = !showCountries">
                        {{ selectedCountry.name }}
                    </div>
                    <div v-if="showCountries" class="select-items absolute bg-white border overflow-auto w-full">
                    <div v-for="country in countries" :key="country.name" class="px-3 py-2 hover:bg-gray-100 cursor-pointer" @click="selectCountry(country)">
                        {{ country.name }}
                    </div>
                </div>
            </div>

            <div class="flex gap-0 overflow-hidden">
                <!-- Code -->
                <div class="w-fit">
                    <input :name="codeName" :value="selectedCountry.dialCode" id="phoneArea" class="text-center bg-transparent w-16 py-2 font-roman placeholder:text-amber lg:text-lg text-sm text-amber focus:outline-none outline-none" readonly/>
                </div>
                <!-- Phone -->
                <input 
                    :name="phoneName" 
                   :value="modelValue"
                   @input="formatPhone"
                   class="text-left w-fit px-2 bg-transparent py-2 font-roman placeholder:text-amber lg:text-lg text-sm text-amber focus:outline-none outline-none"/>
            </div>
        </div>
    </div>

</template>