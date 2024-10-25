<template>
  <a-carousel
    class="carousel"
    :auto-play="true"
    :move-speed="1000"
    animation-name="fade"
    show-arrow="never"
  >
    <a-carousel-item v-for="image in images">
      <img
        :src="image"
        :style="{
          width: '100%'
        }"
      />
    </a-carousel-item>
  </a-carousel>
</template>

<script>
export default {
  setup() {
    const images = [
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp'
    ];
    return {
      images
    };
  }
};
</script>

<style lang="less" scoped>
.carousel {
  width: 100%;
  height: 240px;
}
</style>
