<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :isChecked="item.carks" @click.native="checkClick"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="item.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-desc">商品描述: {{ item.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">{{ item.price }}</div>
        <div class="item-count right">x{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

export default {
  name: 'CartListItem',
  components: {
    CheckButton,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    checkClick() {
      this.item.carks = !this.item.carks;
    }
  }
}
</script>

<style lang="less" scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>