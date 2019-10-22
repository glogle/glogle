<template>
<div class="homePage" :style="{minHeight:winHeight+'px'}">
  <div class="bannerBox">
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
</div>
</template>

<script>
  export default {
    name: 'homePage',
    props:['winWidth','winHeight'],
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
            color: '#eee',
            img:''
          },{
            id: '002',
            color: '#eee',
            img:''
          },{
            id: '003',
            color: '#eee',
            img:''
          }
        ]
      }
    },
    mounted() {
      
      setInterval(() => {
        if (this.swiperSlides.length < this.swiperSlides.length) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
  }
</script>

<style lang="less">
    .homePage {
      width: 100%;
      background-color: #aaa;
      .bannerBox{
          padding: 20px 0;
        .viewItem{
          // width: 100%;
          height: 450px;
          border-radius: 10px;
          margin: 0 20px;
        }
      }
    }
</style>