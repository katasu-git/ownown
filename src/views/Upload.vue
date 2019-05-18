<template>
    <div id="upload">
        <div class="wrapper">
            アップロード用のページです！
            <router-link to="/">トップページへ移動</router-link>
            <!-- <form>
              <input type="text" placeholder="index" />
              <input type="text" placeholder="objectname" />
              <input type="text" placeholder="ownername" />
              <button type="submit" v-on:click="register">submit</button>
            </form> -->
            <button type="submit" v-on:click="register">submit</button>

            <input v-model="index" placeholder="index">
            <input v-model="objectname" placeholder="objectname">
            <input v-model="ownername" placeholder="ownername">

            <!-- <p>Message is: {{ message }}</p> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'upload',
  data () {
    return {
      // message: this.message,
      index: this.index,
      objectname: this.objectname,
      ownername: this.ownername,

    }
  },
  methods: {
    register: function(){
      // console.log(this.message);

      console.log(this.index);
      console.log(this.objectname);
      console.log(this.ownername);
      contract.methods.setObject(this.index, this.objectname,this.ownername)
      .send({ from: coinbase })
      .on("receipt", function(receipt){
        console.log("success");
      })
      .on("error", function(error){
         console.log("error"); 
      });
    }
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
