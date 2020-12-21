<template>
  <div>
    <div v-for="(item, index) in data" :key="item.id" style="width: 100%">
      <div @click="idShow(item, index)">{{ item.title }}</div>
      <div style="background: red" v-show="item.isSubShow">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: "标题1",
          content: "111111111111111",
          isSubShow: false
        },
        {
          id: 2,
          title: "标题2",
          content: "22222222222",
          isSubShow: false
        },
        {
          id: 3,
          title: "标题3",
          content: "3333333333333",
          isSubShow: false
        }
      ]
    }
  },
  methods: {
    idShow(item) {
      this.data.forEach(ele => {
        if (ele.isSubShow != item.isSubShow) {
          ele.isSubShow = false
        }
      })
      item.isSubShow = !item.isSubShow
    }
  }
}
</script>

<style scoped></style>
