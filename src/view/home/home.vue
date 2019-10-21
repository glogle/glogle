<template>
<div class="homePage">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
        <div class="viewItem" :style="{backgroundColor:item.color}">
          {{item.index}}
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination">
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </div>
    </swiper>
</div>
</template>

<script>
  export default {
    name: 'homePage',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          }
        },
        swiperSlides: [
          {
            id: '001',
            color: 'red',
            img:''
          },{
            id: '002',
            color: '#ff0',
            img:''
          },{
            id: '003',
            color: 'blue',
            img:''
          }
        ]
      }
    },
    mounted() {
      setInterval(() => {
        if (this.swiperSlides.length < 10) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
  }
</script>

<style lang="less">
    .homePage {
      width: 100%;
      .viewItem{
        width: 100%;
        height: 450px;
      }
    }
</style>