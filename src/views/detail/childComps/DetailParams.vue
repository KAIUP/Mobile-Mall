<template>
  <div class="detail-params" v-if="Object.keys(itemParams).length !== 0">
    <div class="params-title">{{itemParams.rule.key}}</div>
    <table>
        <tr v-for="(tr,indey) in itemParams.rule.tables[0]" :key="indey" class="rule-tr">
          <td v-for="(td,indez) in tr" :key="indez" class="rule-td">{{td}}</td>
        </tr>
    </table>
    <div class="disclaimer">{{itemParams.rule.disclaimer}}</div>
    <div class="params-title">{{itemParams.info.key}}</div>
    <table>
      <tr v-for="(item,index) in itemParams.info.set" :key="index">
        <td class="item-key">{{item.key}}</td>
        <td class="item-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .detail-params {
    padding: 20px 15px;
    font-size: 15px;
    border-bottom: 5px solid #eee;
  }

  table {
    border-collapse: collapse;
  }

  .params-title{
    text-align: center;
    padding: 10px 0;
  }

  .disclaimer {
    padding: 5px 0;
  }

  .rule-td {
    padding: 10px 25px 10px 0;
    border-bottom:1px solid #ccc;
  }

  .item-key {
    padding: 10px 15px 10px 0;
    border-bottom:1px solid #eee;
  }
  .item-value {
    padding: 10px 0 10px 20px;
    color: var(--color-high-text);
    border-bottom:1px solid #eee;
  }
</style>