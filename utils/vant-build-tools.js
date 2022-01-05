let fs = require('fs')
let components = {
	"van-action-sheet": "/wxcomponents/vant/action-sheet/index",
	"van-area": "/wxcomponents/vant/area/index",
	"van-button": "/wxcomponents/vant/button/index",
	"van-card": "/wxcomponents/vant/card/index",
	"van-cell": "/wxcomponents/vant/cell/index",
	"van-cell-group": "/wxcomponents/vant/cell-group/index",
	"van-checkbox": "/wxcomponents/vant/checkbox/index",
	"van-checkbox-group": "/wxcomponents/vant/checkbox-group/index",
	"van-col": "/wxcomponents/vant/col/index",
	"van-dialog": "/wxcomponents/vant/dialog/index",
	"van-field": "/wxcomponents/vant/field/index",
	"van-goods-action": "/wxcomponents/vant/goods-action/index",
	"van-goods-action-icon": "/wxcomponents/vant/goods-action-icon/index",
	"van-goods-action-button": "/wxcomponents/vant/goods-action-button/index",
	"van-icon": "/wxcomponents/vant/icon/index",
	"van-image": "/wxcomponents/vant/image/index",
	"van-loading": "/wxcomponents/vant/loading/index",
	"van-notice-bar": "/wxcomponents/vant/notice-bar/index",
	"van-notify": "/wxcomponents/vant/notify/index",
	"van-panel": "/wxcomponents/vant/panel/index",
	"van-popup": "/wxcomponents/vant/popup/index",
	"van-progress": "/wxcomponents/vant/progress/index",
	"van-radio": "/wxcomponents/vant/radio/index",
	"van-radio-group": "/wxcomponents/vant/radio-group/index",
	"van-row": "/wxcomponents/vant/row/index",
	"van-search": "/wxcomponents/vant/search/index",
	"van-slider": "/wxcomponents/vant/slider/index",
	"van-stepper": "/wxcomponents/vant/stepper/index",
	"van-steps": "/wxcomponents/vant/steps/index",
	"van-submit-bar": "/wxcomponents/vant/submit-bar/index",
	"van-swipe-cell": "/wxcomponents/vant/swipe-cell/index",
	"van-switch": "/wxcomponents/vant/switch/index",
	"van-nav-bar": "/wxcomponents/vant/nav-bar/index",
	"van-tab": "/wxcomponents/vant/tab/index",
	"van-tabs": "/wxcomponents/vant/tabs/index",
	"van-tabbar": "/wxcomponents/vant/tabbar/index",
	"van-tabbar-item": "/wxcomponents/vant/tabbar-item/index",
	"van-tag": "/wxcomponents/vant/tag/index",
	"van-toast": "/wxcomponents/vant/toast/index",
	"van-transition": "/wxcomponents/vant/transition/index",
	"van-tree-select": "/wxcomponents/vant/tree-select/index",
	"van-datetime-picker": "/wxcomponents/vant/datetime-picker/index",
	"van-rate": "/wxcomponents/vant/rate/index",
	"van-collapse": "/wxcomponents/vant/collapse/index",
	"van-collapse-item": "/wxcomponents/vant/collapse-item/index",
	"van-picker": "/wxcomponents/vant/picker/index",
	"van-dropdown-menu": "/wxcomponents/vant/dropdown-menu/index",
	"van-dropdown-item": "/wxcomponents/vant/dropdown-item/index",
	"van-uploader": "/wxcomponents/vant/uploader/index",
	"van-overlay": "/wxcomponents/vant/overlay/index",
	"van-circle": "/wxcomponents/vant/circle/index",
	"van-count-down": "/wxcomponents/vant/count-down/index",
	"van-divider": "/wxcomponents/vant/divider/index",
	"van-grid": "/wxcomponents/vant/grid/index",
	"van-grid-item": "/wxcomponents/vant/grid-item/index",
	"van-skeleton": "/wxcomponents/vant/skeleton/index",
	"van-sticky": "/wxcomponents/vant/sticky/index",
	"van-index-bar": "/wxcomponents/vant/index-bar/index",
	"van-index-anchor": "/wxcomponents/vant/index-anchor/index",
	"van-sidebar": "/wxcomponents/vant/sidebar/index",
	"van-sidebar-item": "/wxcomponents/vant/sidebar-item/index",
	"van-calendar": "/wxcomponents/vant/calendar/index",
	"van-share-sheet": "/wxcomponents/vant/share-sheet/index",
	"van-empty": "/wxcomponents/vant/empty/index"
}
let string = "";
if(fs.existsSync(__dirname+'/vantComponent.js')){
	string = fs.readFileSync(__dirname+'/vantComponent.js').toString()
}
function Replace(value){
	value = value.split('-')
	return value.join('')
}
function format(field,value){
	return `import ${Replace(field)} from '.${value}.vue'\nVue.component("${field}",${Replace(field)})\n`
}

Object.keys(components).map((component,c)=>{
	string = string + format(component,components[component])
})
fs.writeFileSync(__dirname+'/vantComponent.js',string)
