# 問題整理

.querySelector()  
只會抓「第一筆資料」去做更新

.querySelectorAll()  
會從上找到下，找出符合“指定 className”的「全部 DOM」，並且以「陣列 array」的方式回傳

lazy load頁面載入不全 得不到下半部的資料

V.1 控制使用著畫面滾動  

Q:若螢幕太小可能倒置某一邊的資訊沒有載入

V.2 (解決V.1問題)使用著畫面直接跳轉到尚未載入的元素位置，再重新讀取。

Q: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'click')

A: 與status 429有關 當請求超過限制，頁面無資料，getPageItems return NodelistOf.lenth=0
程式就接著執行click next page自然找不到按鈕，就返回錯誤

V.3  get response 若是429 就等一下

50頁爬蟲時間大概要十分鐘

## 價錢結構

- 一組價錢
  - ```document.querySelector("#main > div > div.dYFPlI > div > div > div.sdzgsX > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div > a > div > div > div.KMyn8J > div.hpDKMN > div > span.ZEgDH9")```
- 原價and打折
  - ```document.querySelector("#main > div > div.dYFPlI > div > div > div.sdzgsX > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div > a > div > div > div.KMyn8J > div.hpDKMN > div.vioxXd.rVLWG6 > span.ZEgDH9")```
  打折

  - ```document.querySelector("#main > div > div.dYFPlI > div > div > div.sdzgsX > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div > a > div > div > div.KMyn8J > div.hpDKMN > div.vioxXd.ZZuLsr.d5DWld")```
  原價-
- 價格區間
  - lowPrice ```document.querySelector("#main > div > div.dYFPlI > div > div > div.sdzgsX > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div > a > div > div > div.KMyn8J > div.hpDKMN > div > span:nth-child(2)")```
  - highPrice ```document.querySelector("#main > div > div.dYFPlI > div > div > div.sdzgsX > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div:nth-child > a > div > div > div.KMyn8J > div.hpDKMN > div > span:nth-child(4)")```
  
- 上敘任一種 + 圖片
  - img ```document.querySelector("#main > div > div.dYFPlI > div > div > div.sdzgsX > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div > a > div > div > div.KMyn8J > div.hpDKMN > div._8-xLHM > div > img")```
  -

```document.querySelector("#main > div > div.dYFPlI > div > div > div.sdzgsX > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div:nth-child(13) > a > div > div > div.KMyn8J > div.hpDKMN > div.vioxXd.rVLWG6 > span.ZEgDH9")```
