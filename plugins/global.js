import Vue from 'vue'
import currencyFilter from '@/filters/currency'

export default function () {
  Vue.filter('currency', currencyFilter)
}
