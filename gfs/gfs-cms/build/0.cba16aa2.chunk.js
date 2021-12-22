(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 3297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(1);const ListViewContext=/*#__PURE__*/(0,_react.createContext)();var _default=ListViewContext;exports.default=_default;

/***/ }),

/***/ 3298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;const convertAttrObjToArray=attributes=>{return Object.keys(attributes).map((key,index)=>{return{...attributes[key],name:key,index};});};var _default=convertAttrObjToArray;exports.default=_default;

/***/ }),

/***/ 3299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;const getAttributeDisplayedType=type=>{let displayedType;switch(type){case'date':case'datetime':case'time':case'timestamp':displayedType='date';break;case'integer':case'biginteger':case'decimal':case'float':displayedType='number';break;case'string':case'text':displayedType='text';break;case'':displayedType='relation';break;default:displayedType=type;}return displayedType;};var _default=getAttributeDisplayedType;exports.default=_default;

/***/ }),

/***/ 3300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(5));var _react=_interopRequireDefault(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(6);var _strapiHelperPlugin=__webpack_require__(4);var _core=__webpack_require__(8);var _icons=__webpack_require__(34);var _pluginId=_interopRequireDefault(__webpack_require__(93));var _useListView=_interopRequireDefault(__webpack_require__(3307));var _useDataManager=_interopRequireDefault(__webpack_require__(129));var _DynamicZoneList=_interopRequireDefault(__webpack_require__(3308));var _ComponentList=_interopRequireDefault(__webpack_require__(3301));var _List=_interopRequireDefault(__webpack_require__(3313));/**
 *
 * List
 *
 */ /* eslint-disable import/no-cycle */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */function List({className,customRowComponent,items,addComponentToDZ,targetUid,mainTypeName,editTarget,isFromDynamicZone,isNestedInDZComponent,isMain,firstLoopComponentName,firstLoopComponentUid,secondLoopComponentName,secondLoopComponentUid,isSub,dzName}){const{formatMessage,emitEvent}=(0,_strapiHelperPlugin.useGlobalContext)();const{isInDevelopmentMode,modifiedData}=(0,_useDataManager.default)();const{openModalAddField}=(0,_useListView.default)();const onClickAddField=()=>{emitEvent('hasClickedCTBAddFieldBanner');const firstComponentIcon=(0,_lodash.get)(modifiedData,['components',firstLoopComponentUid,'schema','icon'],'');const firstComponentCategory=(0,_lodash.get)(modifiedData,['components',firstLoopComponentUid,'category'],null);const firstComponentFriendlyName=(0,_lodash.get)(modifiedData,['components',firstLoopComponentUid,'schema','name'],null);const secondComponentCategory=(0,_lodash.get)(modifiedData,['components',secondLoopComponentUid,'category'],null);const secondComponentFriendlyName=(0,_lodash.get)(modifiedData,['components',secondLoopComponentUid,'schema','name'],null);const secondComponentIcon=(0,_lodash.get)(modifiedData,['components',secondLoopComponentUid,'schema','icon'],'');const headerIconName1=editTarget==='contentType'?(0,_lodash.get)(modifiedData,['contentType','schema','kind'],null):editTarget;let firstHeaderObject={header_label_1:mainTypeName,header_icon_name_1:headerIconName1,header_icon_isCustom_1:false,header_info_category_1:null,header_info_name_1:null};let secondHeaderObject={header_label_2:firstLoopComponentName,header_icon_name_2:'component',header_icon_isCustom_2:false,header_info_category_2:firstComponentCategory,header_info_name_2:firstComponentFriendlyName};let thirdHeaderObject={header_icon_name_3:'component',header_icon_isCustom_3:false,header_info_category_3:secondComponentCategory,header_info_name_3:secondComponentFriendlyName};let fourthHeaderObject={header_icon_name_4:null,header_icon_isCustom_4:false,header_info_category_4:secondComponentCategory,header_info_name_4:secondComponentFriendlyName};if(firstLoopComponentName){firstHeaderObject={...firstHeaderObject,header_icon_name_1:firstComponentIcon,header_icon_isCustom_1:true};}if(secondLoopComponentUid){firstHeaderObject={...firstHeaderObject,header_icon_name_1:secondComponentIcon,header_icon_isCustom_1:true};thirdHeaderObject={...thirdHeaderObject,header_label_3:secondLoopComponentName};}if(isFromDynamicZone||isNestedInDZComponent){secondHeaderObject={...secondHeaderObject,header_label_2:dzName,header_icon_name_2:'dynamiczone',header_icon_isCustom_2:false,header_info_category_2:null,header_info_name_2:null};thirdHeaderObject={...thirdHeaderObject,header_icon_name_3:isNestedInDZComponent?'component':null,header_label_3:firstLoopComponentName,header_info_category_3:firstComponentCategory,header_info_name_3:firstComponentFriendlyName};fourthHeaderObject={...fourthHeaderObject,header_label_4:secondLoopComponentName};}openModalAddField(editTarget,targetUid,firstHeaderObject,secondHeaderObject,thirdHeaderObject,fourthHeaderObject);};/* eslint-disable indent */const addButtonProps={icon:!isSub?/*#__PURE__*/_react.default.createElement(_icons.Plus,{fill:"#007eff",width:"11px",height:"11px"}):false,color:'primary',label:isInDevelopmentMode?formatMessage({id:!isSub?`${_pluginId.default}.form.button.add.field.to.${modifiedData.contentType?modifiedData.contentType.schema.kind:editTarget||'collectionType'}`:`${_pluginId.default}.form.button.add.field.to.component`,defaultMessage:'Add another field'}):null,onClick:onClickAddField};/* eslint-enable indent */if(!targetUid){return null;}return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_List.default,{className:className,isFromDynamicZone:isFromDynamicZone},/*#__PURE__*/_react.default.createElement("table",null,/*#__PURE__*/_react.default.createElement("tbody",null,items.map(item=>{const{type}=item;const CustomRow=customRowComponent;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:item.name},/*#__PURE__*/_react.default.createElement(CustomRow,(0,_extends2.default)({},item,{dzName:dzName,isNestedInDZComponent:isNestedInDZComponent,targetUid:targetUid,mainTypeName:mainTypeName,editTarget:editTarget,firstLoopComponentName:firstLoopComponentName,firstLoopComponentUid:firstLoopComponentUid,isFromDynamicZone:isFromDynamicZone,secondLoopComponentName:secondLoopComponentName,secondLoopComponentUid:secondLoopComponentUid})),type==='component'&&/*#__PURE__*/_react.default.createElement(_ComponentList.default,(0,_extends2.default)({},item,{customRowComponent:customRowComponent,targetUid:targetUid,dzName:dzName,isNestedInDZComponent:isFromDynamicZone,mainTypeName:mainTypeName,editTarget:editTarget,firstLoopComponentName:firstLoopComponentName,firstLoopComponentUid:firstLoopComponentUid})),type==='dynamiczone'&&/*#__PURE__*/_react.default.createElement(_DynamicZoneList.default,(0,_extends2.default)({},item,{customRowComponent:customRowComponent,addComponent:addComponentToDZ,targetUid:targetUid,mainTypeName:mainTypeName})));}))),isMain&&isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ListButton,null,/*#__PURE__*/_react.default.createElement(_core.Button,addButtonProps)),!isMain&&/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ListButton,null,/*#__PURE__*/_react.default.createElement(_core.Button,addButtonProps))),isSub&&/*#__PURE__*/_react.default.createElement("div",{className:"plus-icon",onClick:onClickAddField},isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement(_icons.Plus,{fill:isFromDynamicZone?'#007EFF':'#b4b6ba'})));}List.defaultProps={addComponentToDZ:()=>{},className:null,customRowComponent:null,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:false,isNestedInDZComponent:false,isMain:false,isSub:false,items:[],secondLoopComponentName:null,secondLoopComponentUid:null,targetUid:null};List.propTypes={addComponentToDZ:_propTypes.default.func,className:_propTypes.default.string,customRowComponent:_propTypes.default.func,dzName:_propTypes.default.string,editTarget:_propTypes.default.string.isRequired,firstLoopComponentName:_propTypes.default.string,firstLoopComponentUid:_propTypes.default.string,isFromDynamicZone:_propTypes.default.bool,isNestedInDZComponent:_propTypes.default.bool,isMain:_propTypes.default.bool,items:_propTypes.default.instanceOf(Array),mainTypeName:_propTypes.default.string.isRequired,secondLoopComponentName:_propTypes.default.string,secondLoopComponentUid:_propTypes.default.string,targetUid:_propTypes.default.string,isSub:_propTypes.default.bool};var _default=List;exports.default=_default;

/***/ }),

/***/ 3301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(1));var _lodash=__webpack_require__(6);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _List=_interopRequireDefault(__webpack_require__(3300));var _useDataManager=_interopRequireDefault(__webpack_require__(129));var _convertAttrObjToArray=_interopRequireDefault(__webpack_require__(3298));var _Td=_interopRequireDefault(__webpack_require__(3302));/**
 *
 * ComponentList
 *
 */ /* eslint-disable import/no-cycle */function ComponentList({customRowComponent,component,dzName,mainTypeName,isFromDynamicZone,isNestedInDZComponent,firstLoopComponentName,firstLoopComponentUid}){const{modifiedData}=(0,_useDataManager.default)();const{schema:{name:componentName,attributes}}=(0,_lodash.get)(modifiedData,['components',component],{schema:{attributes:{}}});return/*#__PURE__*/_react.default.createElement("tr",{className:"component-row"},/*#__PURE__*/_react.default.createElement(_Td.default,{colSpan:12,isChildOfDynamicZone:isFromDynamicZone},/*#__PURE__*/_react.default.createElement(_List.default,{customRowComponent:customRowComponent,dzName:dzName,items:(0,_convertAttrObjToArray.default)(attributes),targetUid:component,mainTypeName:mainTypeName,firstLoopComponentName:firstLoopComponentName||componentName,firstLoopComponentUid:firstLoopComponentUid||component,editTarget:"components",isFromDynamicZone:isFromDynamicZone,isNestedInDZComponent:isNestedInDZComponent,isSub:true,secondLoopComponentName:firstLoopComponentName?componentName:null,secondLoopComponentUid:firstLoopComponentUid?component:null})));}ComponentList.defaultProps={component:null,customRowComponent:null,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:false,isNestedInDZComponent:false};ComponentList.propTypes={component:_propTypes.default.string,customRowComponent:_propTypes.default.func,dzName:_propTypes.default.string,firstLoopComponentName:_propTypes.default.string,firstLoopComponentUid:_propTypes.default.string,isFromDynamicZone:_propTypes.default.bool,isNestedInDZComponent:_propTypes.default.bool,mainTypeName:_propTypes.default.string.isRequired};var _default=ComponentList;exports.default=_default;

/***/ }),

/***/ 3302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/* eslint-disable indent */const Td=_styledComponents.default.td`
  &::before {
    content: '&';
    width: 5px;
    height: calc(100% - 15px);
    position: absolute;
    top: -7px;
    left: 45px;
    color: transparent;

    ${({isFromDynamicZone,isChildOfDynamicZone})=>{if(isChildOfDynamicZone){return`
          z-index: -1;
          background-color: transparent !important;
        `;}if(isFromDynamicZone){return`
          background-color: #AED4FB !important;
        `;}return`
        background-color: #f3f4f4 !important;
      `;}}

    border-radius: 3px;
  }
`;var _default=Td;exports.default=_default;

/***/ }),

/***/ 3303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(5));var _react=_interopRequireDefault(__webpack_require__(1));var _lodash=__webpack_require__(6);var _pluginId=_interopRequireDefault(__webpack_require__(93));/**
 * Retrieve external links from injected components
 * @type {Array} List of external links to display
 */const getInjectedComponents=(container,area,plugins,rest)=>{const componentsToInject=Object.keys(plugins).reduce((acc,current)=>{// Retrieve injected compos from plugin
const currentPlugin=plugins[current];const injectedComponents=(0,_lodash.get)(currentPlugin,'injectedComponents',[]);const compos=injectedComponents.filter(compo=>{return compo.plugin===`${_pluginId.default}.${container}`&&compo.area===area;}).map(compo=>{const Component=compo.component;return/*#__PURE__*/_react.default.createElement(Component,(0,_extends2.default)({},compo,rest,{key:compo.key}));});return[...acc,...compos];},[]);return componentsToInject;};var _default=getInjectedComponents;exports.default=_default;

/***/ }),

/***/ 3304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.ListRow=ListRow;exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(6);var _reactIntl=__webpack_require__(9);var _core=__webpack_require__(8);var _reactFontawesome=__webpack_require__(23);var _pluginId=_interopRequireDefault(__webpack_require__(93));var _useDataManager=_interopRequireDefault(__webpack_require__(129));var _getAttributeDisplayedType=_interopRequireDefault(__webpack_require__(3299));var _getTrad=_interopRequireDefault(__webpack_require__(46));var _Curve=_interopRequireDefault(__webpack_require__(3305));var _UpperFirst=_interopRequireDefault(__webpack_require__(145));var _Wrapper=_interopRequireDefault(__webpack_require__(3306));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ListRow({configurable,name,dzName,nature,onClick,plugin,target,targetUid,type,mainTypeName,editTarget,firstLoopComponentName,firstLoopComponentUid,isFromDynamicZone,repeatable,secondLoopComponentName,secondLoopComponentUid,isNestedInDZComponent}){const{contentTypes,isInDevelopmentMode,modifiedData,removeAttribute}=(0,_useDataManager.default)();const isMorph=target==='*';const ico=['integer','biginteger','float','decimal'].includes(type)?'number':type;let readableType=type;if(['integer','biginteger','float','decimal'].includes(type)){readableType='number';}else if(['string'].includes(type)){readableType='text';}const contentTypeFriendlyName=(0,_lodash.get)(contentTypes,[target,'schema','name'],'');const src=target?'relation':ico;const handleClick=()=>{if(isMorph){return;}if(configurable!==false){const firstComponentCategory=(0,_lodash.get)(modifiedData,['components',firstLoopComponentUid,'category'],null);const secondComponentCategory=(0,_lodash.get)(modifiedData,['components',secondLoopComponentUid,'category'],null);const attrType=nature?'relation':type;const icoType=(0,_getAttributeDisplayedType.default)(attrType);let firstHeaderObject={header_label_1:mainTypeName,header_icon_name_1:icoType,header_icon_isCustom_1:false,header_info_category_1:null,header_info_name_1:null};let secondHeaderObject={header_label_2:name,header_icon_name_2:null,header_icon_isCustom_2:false,header_info_category_2:null,header_info_name_2:null};let thirdHeaderObject={header_icon_name_3:'component',header_icon_isCustom_3:false,header_info_category_3:null,header_info_name_3:null};let fourthHeaderObject={header_icon_name_4:null,header_icon_isCustom_4:false,header_info_category_4:null,header_info_name_4:null};let fifthHeaderObject={header_icon_name_5:null,header_icon_isCustom_5:false,header_info_category_5:null,header_info_name_5:null};if(firstLoopComponentName){secondHeaderObject={header_label_2:firstLoopComponentName,header_icon_name_2:'component',header_icon_isCustom_2:false,header_info_category_2:firstComponentCategory,header_info_name_2:firstLoopComponentName};thirdHeaderObject={...thirdHeaderObject,header_label_3:name,header_icon_name_3:null};}if(secondLoopComponentUid){thirdHeaderObject={...thirdHeaderObject,header_label_3:secondLoopComponentName,header_icon_name_3:'component',header_info_category_3:secondComponentCategory,header_info_name_3:secondLoopComponentName};fourthHeaderObject={...fourthHeaderObject,header_label_4:name,header_icon_name_4:null};}if(isFromDynamicZone||isNestedInDZComponent){secondHeaderObject={header_label_2:dzName,header_icon_name_2:'dynamiczone',header_icon_isCustom_2:false,header_info_name_2:null,header_info_category_2:null};thirdHeaderObject={header_icon_name_3:'component',header_label_3:firstLoopComponentName,header_info_name_3:firstComponentCategory,header_info_category_3:firstComponentCategory};if(!isNestedInDZComponent){fourthHeaderObject={header_icon_name_4:null,header_icon_isCustom_4:false,header_info_category_4:null,header_label_4:name};}else{fourthHeaderObject={header_icon_name_4:'components',header_icon_isCustom_4:false,header_info_category_4:secondComponentCategory,header_info_name_4:secondLoopComponentName,header_label_4:secondLoopComponentName};fifthHeaderObject={...fifthHeaderObject,header_label_5:name};}}onClick(// Tells where the attribute is located in the main modifiedData object : contentType, component or components
editTarget,// main data type uid
secondLoopComponentUid||firstLoopComponentUid||targetUid,// Name of the attribute
name,// Type of the attribute
attrType,firstHeaderObject,secondHeaderObject,thirdHeaderObject,fourthHeaderObject,fifthHeaderObject);}};let loopNumber;if(secondLoopComponentUid&&firstLoopComponentUid){loopNumber=2;}else if(firstLoopComponentUid){loopNumber=1;}else{loopNumber=0;}return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{onClick:handleClick,className:[target?'relation-row':'',configurable?'clickable':''],loopNumber:loopNumber},/*#__PURE__*/_react.default.createElement("td",null,/*#__PURE__*/_react.default.createElement(_core.AttributeIcon,{key:src,type:src}),/*#__PURE__*/_react.default.createElement(_Curve.default,{fill:isFromDynamicZone?'#AED4FB':'#f3f4f4'})),/*#__PURE__*/_react.default.createElement("td",{style:{fontWeight:600}},/*#__PURE__*/_react.default.createElement("p",null,name)),/*#__PURE__*/_react.default.createElement("td",null,target?/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:`${_pluginId.default}.modelPage.attribute.${isMorph?'relation-polymorphic':'relationWith'}`}),"\xA0",/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:`${_pluginId.default}.from`},msg=>/*#__PURE__*/_react.default.createElement("span",{style:{fontStyle:'italic'}},/*#__PURE__*/_react.default.createElement(_UpperFirst.default,{content:contentTypeFriendlyName}),"\xA0",plugin&&`(${msg}: ${plugin})`))):/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:`${_pluginId.default}.attribute.${readableType}`,defaultMessage:type}),"\xA0",repeatable&&/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:(0,_getTrad.default)('component.repeatable')}))),/*#__PURE__*/_react.default.createElement("td",{className:"button-container"},isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,configurable?/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,!isMorph?/*#__PURE__*/_react.default.createElement(_core.IconLinks,{links:[{icon:/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:"pencil-alt"}),onClick:()=>handleClick()},{icon:/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:"trash-alt"}),onClick:e=>{e.stopPropagation();removeAttribute(editTarget,name,secondLoopComponentUid||firstLoopComponentUid||'');}}]}):/*#__PURE__*/_react.default.createElement(_core.IconLinks,{links:[{icon:/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:"trash-alt"}),onClick:e=>{e.stopPropagation();removeAttribute(editTarget,name,secondLoopComponentUid||firstLoopComponentUid||'');}}]})):/*#__PURE__*/_react.default.createElement("button",{type:"button"},/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:"lock"})))));}ListRow.defaultProps={configurable:true,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:false,isNestedInDZComponent:false,nature:null,onClick:()=>{},plugin:null,repeatable:false,secondLoopComponentName:null,secondLoopComponentUid:null,target:null,targetUid:null,type:null};ListRow.propTypes={configurable:_propTypes.default.bool,dzName:_propTypes.default.string,editTarget:_propTypes.default.string.isRequired,firstLoopComponentName:_propTypes.default.string,firstLoopComponentUid:_propTypes.default.string,isFromDynamicZone:_propTypes.default.bool,isNestedInDZComponent:_propTypes.default.bool,mainTypeName:_propTypes.default.string.isRequired,name:_propTypes.default.string.isRequired,nature:_propTypes.default.string,onClick:_propTypes.default.func,plugin:_propTypes.default.string,repeatable:_propTypes.default.bool,secondLoopComponentName:_propTypes.default.string,secondLoopComponentUid:_propTypes.default.string,target:_propTypes.default.string,targetUid:_propTypes.default.string,type:_propTypes.default.string};var _default=/*#__PURE__*/(0,_react.memo)(ListRow);exports.default=_default;

/***/ }),

/***/ 3305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(5));var _react=_interopRequireDefault(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));const Curve=props=>/*#__PURE__*/_react.default.createElement("svg",(0,_extends2.default)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21.08 21"},props),/*#__PURE__*/_react.default.createElement("g",null,/*#__PURE__*/_react.default.createElement("path",{d:"M2.58 2.5q-1.2 16 16 16",fill:"none",stroke:props.fill,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"5"})));Curve.defaultProps={fill:'#f3f4f4'};Curve.propTypes={fill:_propTypes.default.string};var _default=Curve;exports.default=_default;

/***/ }),

/***/ 3306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(4);/**
 *
 * Wrapper
 *
 */ /* eslint-disable indent */const Wrapper=_styledComponents.default.tr`
  background-color: transparent;
  p {
    margin-bottom: 0;
  }
  img {
    width: 35px;
  }
  button {
    cursor: pointer;
  }
  td:first-of-type {
    padding-left: 3rem;
    position: relative;
    img {
      width: 35px;
      height: 20px;
      position: absolute;
      top: calc(50% - 10px);
      left: 3rem;
    }
    img + p {
      width: 237px;
      padding-left: calc(3rem + 35px);
    }
  }
  td:nth-child(2) {
    ${({loopNumber})=>{return`
        width: calc(25rem - ${5*loopNumber}rem);
      `;}}
    p {
      font-weight: 500;
    }
  }
  td:last-child {
    text-align: right;
    &:not(:first-of-type) {
      font-size: 10px;
    }
  }
  &.relation-row {
    background: linear-gradient(135deg, rgba(28, 93, 231, 0.05), rgba(239, 243, 253, 0));
  }
  &.clickable {
    &:hover {
      cursor: pointer;
      background-color: ${_strapiHelperPlugin.colors.grey};
      & + tr {
        &::before {
          background-color: transparent;
        }
      }
    }
  }
  .button-container {
    svg {
      color: #333740;
      vertical-align: middle;
    }
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 3307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(1);var _ListViewContext=_interopRequireDefault(__webpack_require__(3297));const useListView=()=>(0,_react.useContext)(_ListViewContext.default);var _default=useListView;exports.default=_default;

/***/ }),

/***/ 3308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(5));var _react=_interopRequireWildcard(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(9);var _reactstrap=__webpack_require__(28);var _icons=__webpack_require__(34);var _useDataManager=_interopRequireDefault(__webpack_require__(129));var _getTrad=_interopRequireDefault(__webpack_require__(46));var _ComponentList=_interopRequireDefault(__webpack_require__(3301));var _ComponentCard=_interopRequireDefault(__webpack_require__(3309));var _Td=_interopRequireDefault(__webpack_require__(3302));var _ComponentButton=_interopRequireDefault(__webpack_require__(3312));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}/**
 *
 * DynamicZoneList
 *
 */ /* eslint-disable import/no-cycle */function DynamicZoneList({customRowComponent,components,addComponent,mainTypeName,name,targetUid}){const{isInDevelopmentMode}=(0,_useDataManager.default)();const[activeTab,setActiveTab]=(0,_react.useState)('0');const toggle=tab=>{if(activeTab!==tab){setActiveTab(tab);}};const handleClickAdd=()=>{addComponent(name);};return/*#__PURE__*/_react.default.createElement("tr",{className:"dynamiczone-row"},/*#__PURE__*/_react.default.createElement(_Td.default,{colSpan:12,isFromDynamicZone:true},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement("div",{className:"tabs-wrapper"},/*#__PURE__*/_react.default.createElement(_reactstrap.Nav,{tabs:true},isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement("li",null,/*#__PURE__*/_react.default.createElement(_ComponentButton.default,{onClick:handleClickAdd},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_icons.Plus,{style:{height:15,width:15}})),/*#__PURE__*/_react.default.createElement("p",null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:(0,_getTrad.default)('button.component.add')})))),components.map((component,index)=>{return/*#__PURE__*/_react.default.createElement("li",{key:component},/*#__PURE__*/_react.default.createElement(_ComponentCard.default,{dzName:name,index:index,component:component,isActive:activeTab===`${index}`,isInDevelopmentMode:isInDevelopmentMode,onClick:()=>{toggle(`${index}`);}}));}))),/*#__PURE__*/_react.default.createElement(_reactstrap.TabContent,{activeTab:activeTab},components.map((component,index)=>{const props={customRowComponent,component};return/*#__PURE__*/_react.default.createElement(_reactstrap.TabPane,{tabId:`${index}`,key:component},/*#__PURE__*/_react.default.createElement("table",null,/*#__PURE__*/_react.default.createElement("tbody",null,/*#__PURE__*/_react.default.createElement(_ComponentList.default,(0,_extends2.default)({},props,{isFromDynamicZone:true,dzName:name,mainTypeName:mainTypeName,targetUid:targetUid,key:component})))));})))));}DynamicZoneList.defaultProps={addComponent:()=>{},components:[],customRowComponent:null,name:null};DynamicZoneList.propTypes={addComponent:_propTypes.default.func,components:_propTypes.default.instanceOf(Array),customRowComponent:_propTypes.default.func,mainTypeName:_propTypes.default.string.isRequired,name:_propTypes.default.string,targetUid:_propTypes.default.string.isRequired};var _default=DynamicZoneList;exports.default=_default;

/***/ }),

/***/ 3309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(1));var _lodash=__webpack_require__(6);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactFontawesome=__webpack_require__(23);var _useDataManager=_interopRequireDefault(__webpack_require__(129));var _Wrapper=_interopRequireDefault(__webpack_require__(3310));var _Close=_interopRequireDefault(__webpack_require__(3311));/**
 *
 * ComponentCard
 *
 */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */function ComponentCard({component,dzName,index,isActive,isInDevelopmentMode,onClick}){const{modifiedData,removeComponentFromDynamicZone}=(0,_useDataManager.default)();const{schema:{icon,name}}=(0,_lodash.get)(modifiedData,['components',component],{schema:{icon:null}});return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{onClick:onClick,className:isActive?'active':''},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:icon})),/*#__PURE__*/_react.default.createElement("p",null,name),/*#__PURE__*/_react.default.createElement("div",{className:"close-btn",onClick:e=>{e.stopPropagation();removeComponentFromDynamicZone(dzName,index);}},isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement(_Close.default,{width:"7px",height:"7px"})));}ComponentCard.defaultProps={component:null,isActive:false,isInDevelopmentMode:false,onClick:()=>{}};ComponentCard.propTypes={component:_propTypes.default.string,dzName:_propTypes.default.string.isRequired,index:_propTypes.default.number.isRequired,isActive:_propTypes.default.bool,isInDevelopmentMode:_propTypes.default.bool,onClick:_propTypes.default.func};var _default=ComponentCard;exports.default=_default;

/***/ }),

/***/ 3310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/**
 *
 * Wrapper
 *
 */const Wrapper=_styledComponents.default.button`
  width: 139px;
  height: 90px;
  position: relative;
  padding: 0;
  padding-top: 5px;
  border-radius: 2px;
  text-align: center;
  border: solid 1px #fafafb;
  background-color: #fafafb;

  &:focus {
    outline: 0;
  }

  div:first-of-type {
    display: flex;
    width: 35px;
    height: 35px;
    margin: auto;
    border-radius: 18px;
    background-color: #e9eaeb;
    color: #919bae;
    font-size: 12px;

    svg {
      margin: auto;
    }
  }

  div:last-of-type {
    position: absolute;
    padding: 0 7px;
    top: 0;
    right: 0;
    display: none;
  }

  p {
    margin-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    line-height: normal;
    font-size: 13px;
    font-weight: bold;
    color: #919bae;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.active {
    cursor: initial;
  }

  &:hover,
  &.active {
    border-color: #aed4fb;
    background-color: #e6f0fb;

    div:first-of-type {
      background-color: #aed4fb;
      color: #007eff;
    }

    div:last-of-type {
      display: block;
    }

    p {
      color: #007eff;
    }
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 3311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _icons=__webpack_require__(34);const Close=(0,_styledComponents.default)(_icons.Remove)`
  > g {
    > path {
      fill: #007eff;
    }
  }
`;var _default=Close;exports.default=_default;

/***/ }),

/***/ 3312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/**
 *
 * ComponentButton
 *
 */const ComponentButton=_styledComponents.default.button`
  width: 139px;
  height: 90px;
  padding-top: 7px;
  &:focus {
    outline: 0;
  }

  div {
    width: 35px;
    height: 35px;
    border-radius: 18px;
    background-color: #2c3138;
    display: flex;
    margin: auto;
    svg {
      margin: auto;
      width: 11px;
      height: 11px;
    }
  }
  p {
    margin-top: 5px;
    font-size: 13px;
    font-weight: bold;
    color: #2c3138;
    line-height: normal;
  }
`;var _default=ComponentButton;exports.default=_default;

/***/ }),

/***/ 3313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _styles=__webpack_require__(32);/**
 *
 * Wrapper
 *
 */const Wrapper=(0,_styledComponents.default)(_styles.List)`
  table-layout: fixed;

  tbody {
    td:first-of-type:not(:last-of-type) {
      width: 73px;
      padding-left: 30px;
      > svg {
        width: auto;
        height: 16px;
        position: absolute;
        left: -4px;
        top: 16px;
        display: none;
      }
    }
    td[colspan='12'] {
      position: relative;
      padding: 0 0 0 50px;
      > div {
        box-shadow: none;
      }
    }
    tr.component-row {
      &:not(:first-of-type) {
        &::before {
          background-color: transparent;
        }
      }
      table tr td:first-of-type:not(:last-of-type) {
        width: 79px;
        padding-left: 36px;
        svg {
          display: block;
        }
      }
    }
    table + div button {
      position: relative;
      background-color: transparent;
      text-transform: initial;
      color: #9ea7b8;
      text-align: left;
      padding-left: 35px;
      border-color: transparent;
      svg {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    tr.dynamiczone-row {
      &:not(:first-of-type) {
        &::before {
          background-color: transparent;
        }
      }
      > td[colspan='12'] {
        padding-left: 0;
        padding-right: 0;
      }

      .tabs-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        padding-top: 18px;
        padding-left: 86px;
        padding-right: 30px;
        .nav-tabs {
          border-bottom: 0;
        }
        ul.nav {
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          li {
            margin-right: 9px;
          }
        }
        & + .tab-content {
          padding-top: 126px;
          position: relative;
          z-index: 1;
        }
      }
    }
  }
  & + .plus-icon {
    width: 27px;
    height: 27px;
    border-radius: 18px;
    position: absolute;
    bottom: 14px;
    left: 34px;
    background-color: ${({isFromDynamicZone})=>isFromDynamicZone?'#AED4FB':'#f3f4f4'};

    color: transparent;
    text-align: center;
    line-height: 27px;
    display: flex;
    cursor: pointer;
    svg {
      margin: auto;
      width: 11px;
      height: 11px;
    }
  }
`;Wrapper.defaultProps={isFromDynamicZone:false};var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 3314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _core=__webpack_require__(8);const ListHeaderButton=(0,_styledComponents.default)(_core.Button)`
  padding-left: 15px;
  padding-right: 15px;
`;var _default=ListHeaderButton;exports.default=_default;

/***/ }),

/***/ 3315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _Title=_interopRequireDefault(__webpack_require__(3316));var _Wrapper=_interopRequireDefault(__webpack_require__(3317));/* eslint-disable react/jsx-one-expression-per-line */function ListHeader({actions,title}){return/*#__PURE__*/_react.default.createElement(_Wrapper.default,null,/*#__PURE__*/_react.default.createElement("div",{className:"list-header-actions"},actions),/*#__PURE__*/_react.default.createElement("div",{className:"list-header-title"},title.map(item=>{return/*#__PURE__*/_react.default.createElement(_Title.default,{key:item},item,"\xA0");})));}ListHeader.defaultProps={actions:[],title:[]};ListHeader.propTypes={actions:_propTypes.default.arrayOf(_propTypes.default.shape({disabled:_propTypes.default.bool,onClick:_propTypes.default.func,title:_propTypes.default.string})),title:_propTypes.default.arrayOf(_propTypes.default.string)};var _default=ListHeader;exports.default=_default;

/***/ }),

/***/ 3316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(4);/**
 *
 * Title
 *
 */const Title=_styledComponents.default.p`
  margin-bottom: 0;
  color: ${_strapiHelperPlugin.colors.blueTxt};
  font-family: 'Lato';
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.2rem;
`;var _default=Title;exports.default=_default;

/***/ }),

/***/ 3317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/**
 *
 * Wrapper
 *
 */const Wrapper=_styledComponents.default.div`
  position: relative;
  padding: 2.1rem 6rem 1.7rem 3rem;
  background-color: white;
  .list-header-actions {
    position: absolute;
    top: 1.8rem;
    right: 3rem;
    button {
      outline: 0;
      margin-left: 10px;
    }
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 3318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(5));var _react=_interopRequireWildcard(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(6);var _reactRouterDom=__webpack_require__(17);var _strapiHelperPlugin=__webpack_require__(4);var _core=__webpack_require__(8);var _pluginId=_interopRequireDefault(__webpack_require__(93));var _getTrad=_interopRequireDefault(__webpack_require__(46));var _CustomLink=_interopRequireDefault(__webpack_require__(3319));var _useDataManager=_interopRequireDefault(__webpack_require__(129));var _makeSearch=_interopRequireDefault(__webpack_require__(504));var _Wrapper=_interopRequireDefault(__webpack_require__(3322));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}/**
 *
 * LeftMenu
 *
 */ /* eslint-disable indent */const displayNotificationCTNotSaved=()=>{strapi.notification.toggle({type:'info',message:{id:`${_pluginId.default}.notification.info.creating.notSaved`}});};function LeftMenu({wait}){const{components,componentsGroupedByCategory,contentTypes,isInDevelopmentMode,sortedContentTypesList}=(0,_useDataManager.default)();const{emitEvent,formatMessage}=(0,_strapiHelperPlugin.useGlobalContext)();const{push}=(0,_reactRouterDom.useHistory)();const componentsData=(0,_lodash.sortBy)(Object.keys(componentsGroupedByCategory).map(category=>({name:category,title:category,isEditable:isInDevelopmentMode,onClickEdit:(e,data)=>{e.stopPropagation();const search=(0,_makeSearch.default)({actionType:'edit',modalType:'editCategory',categoryName:data.name,header_label_1:formatMessage({id:(0,_getTrad.default)('modalForm.header.categories')}),header_icon_name_1:'component',header_icon_isCustom_1:false,header_info_category_1:null,header_info_name_1:null,header_label_2:data.name,header_icon_name_2:null,header_icon_isCustom_2:false,header_info_category_2:null,header_info_name_2:null,settingType:'base'});push({search});},links:(0,_lodash.sortBy)(componentsGroupedByCategory[category].map(compo=>({name:compo.uid,to:`/plugins/${_pluginId.default}/component-categories/${category}/${compo.uid}`,title:compo.schema.name})),obj=>obj.title)})),obj=>obj.title);const canOpenModalCreateCTorComponent=()=>{return!Object.keys(contentTypes).some(ct=>contentTypes[ct].isTemporary===true)&&!Object.keys(components).some(component=>components[component].isTemporary===true);};const handleClickOpenModal=async(modalType,kind='')=>{const type=kind==='singleType'?kind:modalType;if(canOpenModalCreateCTorComponent()){emitEvent(`willCreate${(0,_lodash.upperFirst)((0,_lodash.camelCase)(type))}`);await wait();const search=(0,_makeSearch.default)({modalType,kind,actionType:'create',settingType:'base',forTarget:modalType,headerId:(0,_getTrad.default)(`modalForm.${type}.header-create`),header_icon_isCustom_1:'false',header_icon_name_1:type,header_label_1:'null'});push({search});}else{displayNotificationCTNotSaved();}};const displayedContentTypes=(0,_react.useMemo)(()=>{return sortedContentTypesList.filter(obj=>obj.visible).map(obj=>{if(obj.plugin){return{...obj,CustomComponent:()=>/*#__PURE__*/_react.default.createElement("p",{style:{justifyContent:'normal'}},obj.title,"\xA0",/*#__PURE__*/_react.default.createElement(_core.Text,{as:"span",ellipsis:true// This is needed here
,style:{fontStyle:'italic'},fontWeight:"inherit",lineHeight:"inherit"},"(",formatMessage({id:(0,_getTrad.default)('from')}),": ",obj.plugin,")\xA0"))};}return obj;});},[sortedContentTypesList,formatMessage]);const data=[{name:'models',title:{id:`${_pluginId.default}.menu.section.models.name.`},searchable:true,customLink:isInDevelopmentMode?{Component:_CustomLink.default,componentProps:{id:`${_pluginId.default}.button.model.create`,onClick:()=>{handleClickOpenModal('contentType','collectionType');}}}:null,links:displayedContentTypes.filter(contentType=>contentType.kind==='collectionType')},{name:'singleTypes',title:{id:`${_pluginId.default}.menu.section.single-types.name.`},searchable:true,customLink:isInDevelopmentMode?{Component:_CustomLink.default,componentProps:{id:`${_pluginId.default}.button.single-types.create`,onClick:()=>{handleClickOpenModal('contentType','singleType');}}}:null,links:displayedContentTypes.filter(singleType=>singleType.kind==='singleType')},{name:'components',title:{id:`${_pluginId.default}.menu.section.components.name.`},searchable:true,customLink:isInDevelopmentMode?{Component:_CustomLink.default,componentProps:{id:`${_pluginId.default}.button.component.create`,onClick:()=>{handleClickOpenModal('component');}}}:null,links:componentsData}];return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{className:"col-md-3"},data.map(list=>{return/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LeftMenuList,(0,_extends2.default)({},list,{key:list.name}));}));}LeftMenu.defaultProps={wait:()=>{}};LeftMenu.propTypes={wait:_propTypes.default.func};var _default=LeftMenu;exports.default=_default;

/***/ }),

/***/ 3319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.CustomLink=exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(1));var _reactIntl=__webpack_require__(9);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _icons=__webpack_require__(34);var _P=_interopRequireDefault(__webpack_require__(3320));var _StyledCustomLink=_interopRequireDefault(__webpack_require__(3321));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}const CustomLink=({disabled,id,onClick})=>/*#__PURE__*/_react.default.createElement(_StyledCustomLink.default,{disabled:disabled},/*#__PURE__*/_react.default.createElement("button",{onClick:onClick,disabled:disabled,type:"button"},/*#__PURE__*/_react.default.createElement(_P.default,null,/*#__PURE__*/_react.default.createElement(_icons.Plus,{fill:"#007EFF",width:"11px",height:"11px"}),id&&/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:id}))));exports.CustomLink=CustomLink;CustomLink.defaultProps={disabled:false,id:null};CustomLink.propTypes={disabled:_propTypes.default.bool,id:_propTypes.default.string,onClick:_propTypes.default.func.isRequired};var _default=/*#__PURE__*/(0,_react.memo)(CustomLink);exports.default=_default;

/***/ }),

/***/ 3320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(4);const P=_styledComponents.default.p`
  color: ${_strapiHelperPlugin.colors.blue};
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  > svg {
    margin-right: 7px;
    vertical-align: initial;
    -webkit-font-smoothing: subpixel-antialiased;
  }
`;var _default=P;exports.default=_default;

/***/ }),

/***/ 3321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/**
 *
 * StyledCustomLink
 *
 */const StyledCustomLink=_styledComponents.default.div`
  padding-left: 15px;
  padding-top: 6px;
  margin-left: -3px;
  button {
    cursor: ${({disabled})=>disabled?'not-allowed':'pointer'};
    padding: 0;
    line-height: 16px;
  }
`;var _default=StyledCustomLink;exports.default=_default;

/***/ }),

/***/ 3322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(4);const Wrapper=_styledComponents.default.div`
  width: 100%;
  min-height: calc(100vh - ${_strapiHelperPlugin.sizes.header.height});
  background-color: ${_strapiHelperPlugin.colors.leftMenu.mediumGrey};
  padding-top: 3.1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 3323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(4);const Wrapper=(0,_styledComponents.default)(_strapiHelperPlugin.ViewContainer)`
  .button-secondary {
    &:hover {
      background-color: #ffffff !important;
      box-shadow: 0 0 0 #fff;
    }
  }
  .button-submit {
    min-width: 140px;
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(5));var _react=_interopRequireWildcard(__webpack_require__(1));var _reactRouterDom=__webpack_require__(17);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(6);var _strapiHelperPlugin=__webpack_require__(4);var _custom=__webpack_require__(31);var _ListViewContext=_interopRequireDefault(__webpack_require__(3297));var _convertAttrObjToArray=_interopRequireDefault(__webpack_require__(3298));var _getAttributeDisplayedType=_interopRequireDefault(__webpack_require__(3299));var _pluginId=_interopRequireDefault(__webpack_require__(93));var _getComponents=_interopRequireDefault(__webpack_require__(3303));var _getTrad=_interopRequireDefault(__webpack_require__(46));var _makeSearch=_interopRequireDefault(__webpack_require__(504));var _ListRow=_interopRequireDefault(__webpack_require__(3304));var _List=_interopRequireDefault(__webpack_require__(3300));var _ListButton=_interopRequireDefault(__webpack_require__(3314));var _useDataManager=_interopRequireDefault(__webpack_require__(129));var _ListHeader=_interopRequireDefault(__webpack_require__(3315));var _LeftMenu=_interopRequireDefault(__webpack_require__(3318));var _Wrapper=_interopRequireDefault(__webpack_require__(3323));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}/* eslint-disable indent */const ListView=()=>{const{initialData,modifiedData,isInDevelopmentMode,isInContentTypeView,submitData,toggleModalCancel}=(0,_useDataManager.default)();const{emitEvent,formatMessage,plugins}=(0,_strapiHelperPlugin.useGlobalContext)();const{push,goBack}=(0,_reactRouterDom.useHistory)();const{search}=(0,_reactRouterDom.useLocation)();const[enablePrompt,togglePrompt]=(0,_react.useState)(true);(0,_react.useEffect)(()=>{if(search===''){togglePrompt(true);}},[search]);// Disabling the prompt on the first render if one of the modal is open
(0,_react.useEffect)(()=>{if(search!==''){togglePrompt(false);}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);const firstMainDataPath=isInContentTypeView?'contentType':'component';const mainDataTypeAttributesPath=[firstMainDataPath,'schema','attributes'];const targetUid=(0,_lodash.get)(modifiedData,[firstMainDataPath,'uid']);const isTemporary=(0,_lodash.get)(modifiedData,[firstMainDataPath,'isTemporary'],false);const contentTypeKind=(0,_lodash.get)(modifiedData,[firstMainDataPath,'schema','kind'],null);const attributes=(0,_lodash.get)(modifiedData,mainDataTypeAttributesPath,{});const attributesLength=Object.keys(attributes).length;const currentDataName=(0,_lodash.get)(initialData,[firstMainDataPath,'schema','name'],'');const isFromPlugin=(0,_lodash.has)(initialData,[firstMainDataPath,'plugin']);const hasModelBeenModified=!(0,_lodash.isEqual)(modifiedData,initialData);const forTarget=isInContentTypeView?'contentType':'component';const handleClickAddField=async(forTarget,targetUid,firstHeaderObj,secondHeaderObj,thirdHeaderObj,fourthHeaderObj)=>{// disable the prompt
await wait();const searchObj={modalType:'chooseAttribute',forTarget,targetUid,...firstHeaderObj,...secondHeaderObj,...thirdHeaderObj,...fourthHeaderObj};push({search:(0,_makeSearch.default)(searchObj)});};const handleClickAddComponentToDZ=async dzName=>{const firstHeaderObject={header_label_1:currentDataName,header_icon_name_1:'dynamiczone',header_icon_isCustom_1:false};const secondHeaderObj={header_label_2:dzName};const search={modalType:'addComponentToDynamicZone',forTarget:'contentType',targetUid,dynamicZoneTarget:dzName,settingType:'base',step:'1',actionType:'edit',...firstHeaderObject,...secondHeaderObj};await wait();push({search:(0,_makeSearch.default)(search,true)});};const handleClickEditField=async(forTarget,targetUid,attributeName,type,firstHeaderObj,secondHeaderObj,thirdHeaderObj,fourthHeaderObj,fifthHeaderObj)=>{const attributeType=(0,_getAttributeDisplayedType.default)(type);await wait();const search={modalType:'attribute',actionType:'edit',settingType:'base',forTarget,targetUid,attributeName,attributeType,step:type==='component'?'2':null,...firstHeaderObj,...secondHeaderObj,...thirdHeaderObj,...fourthHeaderObj,...fifthHeaderObj};await wait();push({search:(0,_makeSearch.default)(search,true)});};const getDescription=()=>{const description=(0,_lodash.get)(modifiedData,[firstMainDataPath,'schema','description'],null);return description||formatMessage({id:`${_pluginId.default}.modelPage.contentHeader.emptyDescription.description`});};const wait=async()=>{togglePrompt(false);return new Promise(resolve=>setTimeout(resolve,100));};const label=(0,_lodash.get)(modifiedData,[firstMainDataPath,'schema','name'],'');const kind=(0,_lodash.get)(modifiedData,[firstMainDataPath,'schema','kind'],'');const headerProps={actions:isInDevelopmentMode?[{color:'cancel',onClick:()=>{toggleModalCancel();},label:formatMessage({id:`${_pluginId.default}.form.button.cancel`}),type:'button',disabled:(0,_lodash.isEqual)(modifiedData,initialData)},{className:'button-submit',color:'success',onClick:()=>submitData(),label:formatMessage({id:`${_pluginId.default}.form.button.save`}),type:'submit',disabled:(0,_lodash.isEqual)(modifiedData,initialData)}]:[],title:{label,cta:isInDevelopmentMode&&!isFromPlugin?{icon:'pencil-alt',onClick:async()=>{await wait();const contentType=kind||firstMainDataPath;if(contentType==='collectionType'){emitEvent('willEditNameOfContentType');}if(contentType==='singleType'){emitEvent('willEditNameOfSingleType');}push({search:(0,_makeSearch.default)({modalType:firstMainDataPath,actionType:'edit',settingType:'base',forTarget:firstMainDataPath,targetUid,header_label_1:label,header_icon_isCustom_1:false,header_icon_name_1:contentType==='singleType'?contentType:firstMainDataPath,headerId:(0,_getTrad.default)('modalForm.header-edit')})});}}:null},content:getDescription()};const listTitle=[formatMessage({id:`${_pluginId.default}.table.attributes.title.${attributesLength>1?'plural':'singular'}`},{number:attributesLength})];const addButtonProps={icon:true,color:'primary',label:formatMessage({id:`${_pluginId.default}.button.attributes.add.another`}),onClick:()=>{const headerDisplayObject={header_label_1:currentDataName,header_icon_name_1:forTarget==='contentType'?contentTypeKind:forTarget,header_icon_isCustom_1:false};handleClickAddField(forTarget,targetUid,headerDisplayObject);}};const listInjectedComponents=(0,_react.useMemo)(()=>{return(0,_getComponents.default)('listView','list.link',plugins,{targetUid,isTemporary,isInContentTypeView,contentTypeKind});},[plugins,isTemporary,targetUid,isInContentTypeView,contentTypeKind]);const listActions=isInDevelopmentMode?[...listInjectedComponents,/*#__PURE__*/_react.default.createElement(_ListButton.default,(0,_extends2.default)({},addButtonProps,{key:"add-button"}))]:listInjectedComponents;const CustomRow=props=>{const{name}=props;return/*#__PURE__*/_react.default.createElement(_ListRow.default,(0,_extends2.default)({},props,{attributeName:name,name:name,onClick:handleClickEditField}));};CustomRow.defaultProps={name:null};CustomRow.propTypes={name:_propTypes.default.string};return/*#__PURE__*/_react.default.createElement(_ListViewContext.default.Provider,{value:{openModalAddField:handleClickAddField}},/*#__PURE__*/_react.default.createElement(_Wrapper.default,null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.BackHeader,{onClick:goBack}),/*#__PURE__*/_react.default.createElement(_reactRouterDom.Prompt,{message:formatMessage({id:(0,_getTrad.default)('prompt.unsaved')}),when:hasModelBeenModified&&enablePrompt}),/*#__PURE__*/_react.default.createElement("div",{className:"container-fluid"},/*#__PURE__*/_react.default.createElement("div",{className:"row"},/*#__PURE__*/_react.default.createElement(_LeftMenu.default,{wait:wait}),/*#__PURE__*/_react.default.createElement("div",{className:"col-md-9 content",style:{paddingLeft:'30px',paddingRight:'30px'}},/*#__PURE__*/_react.default.createElement(_custom.Header,headerProps),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ListWrapper,{style:{marginBottom:80}},/*#__PURE__*/_react.default.createElement(_ListHeader.default,{actions:listActions,title:listTitle}),/*#__PURE__*/_react.default.createElement(_List.default,{items:(0,_convertAttrObjToArray.default)(attributes),customRowComponent:props=>/*#__PURE__*/_react.default.createElement(CustomRow,props),addComponentToDZ:handleClickAddComponentToDZ,targetUid:targetUid,dataType:forTarget,dataTypeName:currentDataName,mainTypeName:currentDataName,editTarget:forTarget,isMain:true})))))));};var _default=ListView;exports.default=_default;

/***/ })

}]);