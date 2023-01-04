# OpenLayers
<!-- <style>
  // 添加自定义样式
  .blod {
    font-weight: bold;
  }
</style> -->

## gis是什么
gis是地理信息系统（geographic information system）简称，是对空间数据进行相关处理的一门学科，一种技术。

## Openlayers简介
Openlayers是一个基于Javacript开发，免费、开源的前端地图开发库，使用它，可以很容易的开发出WebGIS系统。目前Openlayers支持地图瓦片、矢量数据等众多地图数据格式，支持比较完整的地图交互操作。目前OpenLayers已经成为一个拥有众多开发者和帮助社区的成熟、流行的框架，在国内外的GIS相关行业中得到了广泛的应用。

## Openlayers特征
**地图瓦片**

支持OSM, Bing, MapBox, Stamen等众多的底图数据源

**矢量数据**

支持渲染如GeoJSON, TopoJSON, KML, GML, Mapbox vector tiles等等众多的矢量数据

**高性能、轻量级**

采用HTML5最新的渲染技术Canvas 2D, WebGL,性能极高。采用Javacript ES6最新的语法，可以实现按需导入，非常的轻量级，非适用于移动GIS开发的场景。

**易于定制和扩展**

Openlayers采用面向对象的方法来构建，设计合理，预留了很多可扩充的接口，可以非常容易进行扩展和定制化开发。

**优秀的交互体验**

OpenLayers实现了类似于Ajax的无刷新功能，可以结合很多优秀的JavaScript功能插件，带给用户更多丰富的交互体验。

## Openlayers的核心概念
Openlayers采用面向对象程序设计（OOP）的思维方法进行设计、开发。把GIS系统中的属性、功能拆分成多个部分，为每一个部分抽象设计出对应的Class(类）。每个Class(类）有自己的属性、自己的行为，通过这些不同的Class(类）相互作用，一起构建了Openlayers的GIS能力。

## OpenLayers如何在vue中使用
1. npm install ol

2. 在页面中引入需要用到的类与一些功能方法，底下会做详细介绍

## OpenLayers的主要组成部分
地图(Map), 视图(View), 控件(Control), 交互(Interaction)

## 从ol引入的一些类与方法
```js
import 'ol/ol.css' // 样式
import { Map, View, Feature } from 'ol' // 地图,视图,用于地理特征的矢量元素，具有几何geometry()和其他属性，类似于矢量文件格式(如GeoJSON)中的特性。
// import OSM from 'ol/source/OSM' // 可以理解为数据源,就是一张图片
import TileLayer from 'ol/layer/Tile' // 可以理解为图层
import XYZ from 'ol/source/XYZ' // 自定义设置图片链接
import { fromLonLat } from "ol/proj" // 将坐标从经度/纬度转换为不同的投影。
import {toLonLat} from 'ol/proj' // 将坐标转换为经度/纬度。
import { transform } from 'ol/proj' // 将坐标从源投影转换为目标投影。这将返回一个新坐标（并且不会修改原始坐标）。
import { Vector as VectorSource } from 'ol/source' // 矢量数据源
import { Vector as VectorLayer } from 'ol/layer' // 矢量图层
import { Point } from 'ol/geom' // 用于添加几何图或者icon,img的位置
import { Style, Icon, Stroke, Fill, Text } from 'ol/style' // 修改矢量样式，icon，文案
import { defaults } from 'ol/control' // 设置控件参数
import GeoJSON from 'ol/format/GeoJSON' // 数据格式
import anhuiJson from '@/assets/anhui.json'
import hefeiJson from '@/assets/hefei.json'
import chuzhouJson from '@/assets/chuzhou.json'
import Select from 'ol/interaction/Select' // 设置鼠标选择类
import { pointerMove } from 'ol/events/condition' // 鼠标移动触发选择
import { Overlay } from 'ol' // overlay是覆盖物的意思，主要是放置一些和地图位置相关的元素
```

## 一个简单的地图实现
```html
<template>
  <div class="map-box">
    <div id="map" style="height: 100vh"></div>
  </div>
</template>
```
```js
export default {
  data () {
    return {
      olMap: null, // 地图实例
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      this.olMap = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            // source: new OSM({}) // 外网地图图片，访问不了，所以使用底下自定义
            source: new XYZ({
              url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
            })
          })
        ],
        view: new View({
          center: fromLonLat([117.20175263827569, 31.791319694500544]), // 地图中心点
          // projection: 'EPSG:4326', // 设置坐标系格式
          zoom: 7, // 缩放比例
          maxZoom: 20, // 最大缩放比例
          minZoom: 4 // 最小缩放比例
        }),
        // 设置地图控件
        controls: defaults({
          zoom: false, // 不显示放大放小按钮；
          rotate: true, // 不显示指北针控件；
          attribution: false // 不显示右下角的地图信息控件
        }).extend([])
      })
    }
  }
}
```
效果图
![img](/vuepress-starter/images/easy-map.png)

地图容器必须绑定一个id，并且容器必须有高度和宽度，new Map里面的target的值必须与id一样
## 地图事件监听
```js
// singleclick:地图单击事件, dblclick:地图双击事件, click:地图点击事件, pointerdrag：鼠标拖拽事件, pointermove：鼠标移动事件。
this.olMap.on('singleclick', (e) => {
  // console.log(transform(this.olMap.getEventCoordinate(e.originalEvent), 'EPSG:3857', 'EPSG:4326')) // 获取点击的坐标并且转换
  console.log(this.olMap.getEventCoordinate(e.originalEvent))
  // 获取当前点击的矢量图层
  const fe = this.olMap.forEachFeatureAtPixel(e.pixel, (fe) => {
    return fe
  })
  if (fe) {
    this.drillDown(fe)
  }
  console.log(this.olMap.getLayers().getArray()) // 获取所有图层
})
// change:layerGroup :地图图层增删时触发, change:size :地图窗口发生变化就会触发，与我们常用的窗口resize接近
  // change:target :地图绑定的div发生更改时触发，如map.setTartget方法就会触发该事件
  // change:view :地图view对象发生变化触发。
  // propertychange: Map对象中任意的property值改变时触发。
  this.olMap.on('change:size', (e) => {
    console.log('size改变', e)
  })
  // moveend——移动结束事件，首次会加载
  this.olMap.on('moveend', (e) => {
    console.log(e, 2222222)
  })
```
## 地图上添加icon
```js
setIcon () {
  const iconImg = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png' // 图片地址
  const arr = [
    [13293883.899189748, 3791595.314230861],
    [13374601.401058894, 3943246.378348651]
  ]
  const featureList = []
  arr.map((item, index) => {
    // 打点，设置添加icon的位置
    const feature = new Feature({
      geometry: new Point(item),
      id: index + 1 // 可以无限添加自己想要的参数。
    })
    // 加如icon和样式
    feature.setStyle(new Style({
      image: new Icon({
        opacity: 1,
        src: iconImg,
        // anchor: [0.5, 3], // 偏移位置
        // offset: [0, 1], // 偏移量设置
        scale: 1 // 图标缩放比例
      })
    }))
    featureList.push(feature)
  })
  // 将feature加入数据源
  const vectorSource = new VectorSource({
    features: featureList
  })
  // 将数据源加入图层
  this.vectorLayer = new VectorLayer({
    source: vectorSource,
    id: 'icon'
  })
  // 将图层添加到页面
  this.olMap.addLayer(this.vectorLayer)
}
```

效果图
![img](/vuepress-starter/images/map-icon.png)

## 地图上添加点，线，多边形，圆
```js
addFe () {
  // 创建点
  const point = new Feature({
    geometry: new Point([13293883.899189748, 3791595.314230861]),
    id: 'point'
  })
  // 创建线
  const arr = [
    [13293883.899189748, 3791595.314230861],
    [13374601.401058894, 3943246.378348651]
  ]
  const line = new Feature({
    geometry: new LineString(arr),
    id: 'line'
  })
  // 创建多边形
  const arr1 = [
    [
      [13458987.880285729, 3764689.4802744794],
      [13353810.529365325, 3742675.6161283487],
      [13521360.495366432, 3666850.0840694536],
      [13458987.880285729, 3764689.4802744794]
    ]
  ]
  const polygon = new Feature({
    geometry: new Polygon(arr1),
    id: 'polygon'
  })
    let lineStyle = new Style({
      fill: new Fill({
          color: 'rgba(1, 210, 241, 0.2)'
      }),
      stroke: new Stroke({
          color: 'rgba(255, 0, 0)',
          width: 4,
      }),
  });
  polygon.setStyle(lineStyle)
  // 创建圆
  const circle = new Feature({
    geometry: new Circle([13380716.363321707, 3534766.8991926694], 0.5),
    id: 'circle'
  })
  circle.setStyle(new Style({
    fill: new Fill({ // 填充
    color: 'rgba(255, 255, 255, 0.6)'
  }),
  stroke: new Stroke({ // 边框
    color: '#319FD3',
    width: 20
  })
  }))
  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [point, line, polygon, circle]
    })
  })
  this.olMap.addLayer(vectorLayer)
}
```

效果图
![img](/vuepress-starter/images/map-fe.png)

## 给特定区域加上背景颜色

```js
/**
 * @param region 特定区域的Geojson数据
**/
setBgf (region) {
  const features = new GeoJSON({ featureProjection: 'EPSG:3857' }).readFeatures(region) // 读取Geojson格式数据
  const source = new VectorSource({
    features
  })
  const styleFunction = (featureData) => {
    return styles(
      featureData.getGeometry().getType(), // 获取几何类型
      '#31969A', // 颜色
      featureData // 当前feature
    )
  }
  const styles = (type, color = '#31969A', featureData) => {
    const styleType = {
      MultiPolygon: new Style({
        stroke: new Stroke({
          color: '#fff',
          width: 1
        }),
        fill: new Fill({
          color: color
        }),
        text: new Text({
          textAlign: 'center',     //对齐方式
          textBaseline: 'middle',    //文本基线
          font: 'normal 12px 微软雅黑',     //字体样式
          text: featureData.get('name'),    //文本内容
          offsetY: 0, // Y轴偏置
          offsetX: 0, // x轴偏移
          fill: new Fill({        //填充样式
          color: '#ffffff'
          })
        })
      }),
      Polygon: new Style({
        stroke: new Stroke({
          color: '#fff',
          width: 1
        }),
        fill: new Fill({
          color: color
        }),
        text: new Text({
          textAlign: 'center',     //对齐方式
          textBaseline: 'middle',    //文本基线
          font: 'normal 12px 微软雅黑',     //字体样式
          text: featureData.get('name'),    //文本内容
          offsetY: 0,    // Y轴偏置
          fill: new Fill({        //填充样式
          color: '#ffffff'
          })
        })
      })
    }
    return styleType[type]
  }
  const layer = new VectorLayer({
    id: 'sert', // 赋予图层id，便于鼠标只有悬浮这个id的图层时才会切换效果
    source: source,
    zIndex: 2,
    // opacity: 0.5,
    style: styleFunction
  })
  this.olMap.addLayer(layer)
  this.addHo('sert') // 添加悬浮样式
}
```
效果图
![img](/vuepress-starter/images/map-bgf.png)

## 鼠标悬停改变当前区域颜色并且展示当前信息

```js
// 添加悬浮样式
addHo (layerId) {
  // this.olMap.getLayers 获取map中的所有图层
  // map.getLayers().getArray() 获取图层数组
  // layer.setVisible(bool) 设置图层是否可见
  let selectPointerMove = new Select({
    condition: pointerMove, // 触发的方法
    layers: [this.getLayer(layerId)], // 设置哪些图层可以被选择，相当于过滤
    style: () => {
      return null
    } // 被选中图层的样式
  })
  // // addInteraction()方法在地图上添加Interaction对象
  // // Interaction，是一个虚基类，不负责实例化，交互功能都继承该基类
  this.olMap.addInteraction(selectPointerMove)
  const styleFunction = (featureData) => {
    return styles(
      featureData.getGeometry().getType(),
      '#35DEE4',
      featureData
    )
  }
  const styles = (type, color = '#35DEE4', featureData) => {
    const styleType = {
      MultiPolygon: new Style({
        stroke: new Stroke({
          color: '#fff',
          width: 1
        }),
        fill: new Fill({
          color: color
        }),
        text: new Text({
          textAlign: 'center',     //对齐方式
          textBaseline: 'middle',    //文本基线
          font: 'normal 12px 微软雅黑',     //字体样式
          text: featureData.get('name'),    //文本内容
          offsetY: 0, // Y轴偏置
          offsetX: 0, // x轴偏移
          fill: new Fill({        //填充样式
          color: '#ffffff'
          }),
          // backgroundFill: new Fill({      // 填充背景
          //   color: asString([0, 0, 0, 0.6])
          // })
        })
      }),
      Polygon: new Style({
        stroke: new Stroke({
          color: '#fff',
          width: 1
        }),
        fill: new Fill({
          color: color
        }),
        text: new Text({
          textAlign: 'center',     //对齐方式
          textBaseline: 'middle',    //文本基线
          font: 'normal 12px 微软雅黑',     //字体样式
          text: featureData.get('name'),    //文本内容
          offsetY: 0,    // Y轴偏置
          fill: new Fill({        //填充样式
          color: '#ffffff'
          }),
          // backgroundFill: new Fill({      // 填充背景
          //   color: asString([0, 0, 0, 0.6])
          // })
        })
      })
    }
    return styleType[type]
  }
  selectPointerMove.on('select', (e) => {
    console.log(e)
    e.target.getFeatures().array_.map(item => {
      item.setStyle(styleFunction(item))
    })
    if (e.selected.length > 0) {
      this.showPop(e.selected)
    } else {
      // 删除弹窗
      const card = this.olMap.getOverlayById('pop')
      if (card) card.setPosition(undefined)
    }
  })
},
// 根据id获取对应的图层
getLayer (id) {
  return this.olMap.getLayers().getArray().find(v => v.values_?.id === id)
},
// 根据id删除图层
removeLayer (id) {
  const layer = this.getLayer(id)
  layer && this.olMap.removeLayer(layer)
},
// 展示提示弹窗
showPop (e) {
  let fe = e[0]
  this.cityPopList = this.allPop.find(v => v.id == fe.values_.adcode)?.detail
  if (this.cityPopList?.length) {
    const container = document.getElementById('popup')
    // 创建一个overlay, 绑定html元素container
    const acroutes = fromLonLat([fe.values_.center[0], fe.values_.center[1]])
    const overlay = new Overlay({
      id: 'pop', // 为对应的 overlay 设置一个 id，便于使用 ol.Map 的 getOverlayById 方法取得相应的 overlay
      element: container, // domm元素
      offset: [0, -15], // 偏移量，像素为单位，overlay 相对于放置位置（position）的偏移量，默认值是 [0, 0]
      position: [acroutes[0] - 150000, acroutes[0] + 80000], // 在地图所在的坐标系框架下，overlay 放置的位置
      positioning: 'bottom-center', // overlay 对于 position 的相对位置，可能的值包括 bottom-left、bottom-center、bottom-right 、center-left、center-center、center-right、top-left、top-center、top-right，默认是 top-left，也就是 element 左上角与 position 重合
      stopEvent: true, // 地图的事件传播是否停止，默认是 true，即阻止传播
      autoPan: true, // 当触发 overlay setPosition 方法时触发，当 overlay 超出地图边界时，地图自动移动，以保证 overlay 全部可见
      autoPanAnimation: {
        duration: 250
      } // 设置 autoPan 的效果动画
    })
    overlay.setPosition(acroutes)
    this.olMap.addOverlay(overlay)
  } else {
    const card = this.olMap.getOverlayById('pop')
    if (card) card.setPosition(undefined) // 删除弹窗
  }
}
```
效果图
![img](/vuepress-starter/images/map-se.png)

## 地图下钻
```js
/**
 * @param fe 当前点击的feature
**/
drillDown (fe) {
  // 获取当前的坐标
  const so = [fe.values_.center[0], fe.values_.center[1]]
  // 删除当前的图层
  this.removeLayer('sert')
  // 改变当前的缩放级别
  this.olMap.getView().setZoom(9)
  // 将当前坐标设为中心点
  this.olMap.getView().setCenter(fromLonLat(so))
}

```