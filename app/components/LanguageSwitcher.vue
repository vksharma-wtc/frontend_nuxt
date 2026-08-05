<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const changeLanguage = async (event) => {
  const newLocale = event.target.value
  await navigateTo(switchLocalePath(newLocale))
}
</script>

<template>
  <select
    :value="locale"
    @change="changeLanguage"
    class="language-switcher"
  >
    <option
      v-for="lang in locales"
      :key="lang.code"
      :value="lang.code"
    >
      {{ lang.name }}
    </option>
  </select>
</template>

<style scoped>
.language-switcher {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
}

.language-switcher:focus {
  outline: none;
  border-color: #007bff;
}
</style>