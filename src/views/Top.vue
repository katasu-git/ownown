<template>
    <div id="top">
        <div class="wrapper">
            <div class="container" v-for="item in names">
                <div class="iconContainer">
                    <div class="iconBackground"></div>
                </div>
                <div class="textContainer">
                    <div class="textWrapper">名前: {{ item[0] }}</div>
                    <div class="textWrapper adress">アドレス: {{ item[2] }}</div>
                    <div class="textWrapper">所有者: {{ item[1] }}</div>
                </div>
            </div>
            <router-link to="upload">アップロードページへ移動</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'top',
  data () {
    return {
        names: []
    }
  },
  created: function() {
      this.$nextTick(() => {
        contract.methods.getObject(0).call()
        .then(value => {
            this.names.push(value);
        });
        contract.methods.getObject(1).call()
        .then(value => {
            this.names.push(value);
        });
        contract.methods.getObject(2).call()
        .then(value => {
            this.names.push(value);
        });
        contract.methods.getObject(3).call()
        .then(value => {
            this.names.push(value);
        });
      });
  },
}
</script>

<style lang="scss" scoped>

#top, .wrapper {
  width: 100%;
  height: 100%;
}

.wrapper {
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.container {
    background-color: antiquewhite;
    width: 80vw;
    height: 15vh;
    margin-top: 3em;
    display: flex;
}

.iconContainer, .textContainer {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}

.textContainer {
    width: 70%;
    align-items: inherit;
    flex-direction: column;
}

.iconBackground {
    background-color: khaki;
    width: 20vw;
    height: 20vw;
    max-width: 150px;
    max-height: 150px;
    border: solid 0 #000000;
    border-radius: 100px;
}

.adress {
    font-size: 8px;
}

</style>

