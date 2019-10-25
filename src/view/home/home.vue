<template>
<div class="homePage" :style="{minHeight:winHeight+'px',backgroundImage:'url(' + bgImg2 + ')',}">
  <div class="bannerBox">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
        <div class="viewItem">
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
        bgImg2: require('@/assets/images/background/bgImg2.jpg'),
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
      background-repeat:'no-repeat';
      background-size:'100% 100%';
      .bannerBox{
          padding: 20px 0;
        .viewItem{
          background-color: rgba(0, 0, 0, 0.226);
          height: 450px;
          border-radius: 10px;
          margin: 0 20px;
        }
      }
    }
</style>