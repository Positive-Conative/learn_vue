<template>
  <!-- Vue 파일은 최소 2단어로 이루어지며, 첫글자 대문자로, 카멜케이스 -->
    <header>
       {{ myData }}
    </header>
</template>

<script>

export default {
    props: ['myData']
}

</script>

<style>

</style>