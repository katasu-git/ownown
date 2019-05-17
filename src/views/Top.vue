<template>
    <div id="top">
        <div class="wrapper">
            <div class="container" v-for="item in items">
                <div class="iconContainer">
                    <div class="iconBackground"></div>
                </div>
                <div class="textContainer">
                    <div class="textWrapper">名前: {{ item.itemName }}</div>
                    <div class="textWrapper">アドレス: {{ item.adress }}</div>
                    <div class="textWrapper">所有者: {{ item.ownerName }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import web3js from "web3js"
// import initpage from "../component/main.js"
export default {
    name: 'top',
  data () {
    return {
        items: {
            name1: {
                itemName: this.showInfo(0),
                adress: "dasmdklamsdklm",
                ownerName: "マリオ"
            },
            name2: {
                itemName: "モンスターボール",
                adress: "dmkasldl",
                ownerName: "サトシ"
            },
            name3: {
                itemName: "太刀",
                adress: "dl;samdas",
                ownerName: "ハンター"
            },
        },
        components: {
            // initpage,
        },
        
    }
  },
  methods: {
      showInfo: function(readindex) {
          return contract.methods.getObject(readindex).call();
      }
  },
  created: function(){
            console.log("hi" + JSON.stringify(this.showInfo(1)));
}

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

