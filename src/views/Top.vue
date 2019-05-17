<template>
    <div id="top">
        <div class="wrapper">
            <!-- <div class="container" v-for="item in items">
                <div class="iconContainer">
                    <div class="iconBackground"></div>
                </div>
                <div class="textContainer">
                    <div class="textWrapper">名前: {{ item.itemName }}</div>
                    <div class="textWrapper">アドレス: {{ item.adress }}</div>
                    <div class="textWrapper">所有者: {{ item.ownerName }}</div>
                </div>
            </div> -->
            {{ test }}
            <div class="container" v-for="item in test">
                {{ item }}
            </div>
            <button v-on:click="sayHello()">ボタン</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'top',
  data () {
    return {
        test: {
            itemName: null,
            adress: null,
            owner: null
        },
    }
  },
  methods: {
      showInfo: (readindex) => {
          contract.methods.getObject(readindex).call()
          .then((value) => {
              this.itemName = value[0];
              this.adress = value[1];
              this.owner = value[2];
          });
      },
      sayHello: () => {
          console.log(this.itemName);
          console.log(this.adress);
          console.log(this.owner);
      },
  },
  created: function() {
      this.showInfo(1);
      console.log(this.itemName);
      console.log(this.adress);
      console.log(this.owner);
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

</style>

