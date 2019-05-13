<template>
    <div id="top">
        ここはトップページです
        <div v-for="item in items">{{ item.ownerName }}</div>
    </div>
</template>

<script>
export default {
    name: 'top',
  data () {
    return {
        items: {
            name1: {
                itemName: "キノコ",
                adress: "",
                ownerName: "マリオ"
            },
            name2: {
                itemName: "モンスターボール",
                adress: "",
                ownerName: "サトシ"
            },
            name3: {
                itemName: "太刀",
                adress: "",
                ownerName: "ハンター"
            },
        }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

