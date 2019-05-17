<template>
    <div id="upload">
        <div class="wrapper">
            アップロード用のページです！
            <router-link to="/">トップページへ移動</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'upload',
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>

#upload, .wrapper {
  width: 100%;
  height: 100%;
}

.wrapper {
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    flex-direction: column;
}

</style>
