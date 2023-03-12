/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.inputgroupbase.js";import"./kendo.checkbox.js";var __meta__={id:"checkboxgroup",name:"CheckBoxGroup",category:"web",description:"The CheckBoxGroup component.",depends:["core","inputgroupbase","checkbox"]};!function(e,t){var i=window.kendo,n=i.ui,r=n.InputGroupBase,o="checked",u=r.extend({options:{name:"CheckBoxGroup",inputName:"",inputRounded:"medium",inputSize:"medium",enabled:!0,labelPosition:"after",layout:"vertical",items:[]},ITEM_TEMPLATE:'<li class="k-checkbox-item"><input type="checkbox" class="k-checkbox" ></li>',NS:".kendoCheckBoxGroup",COMPONENT:"kendoCheckBox",groupStyles:{item:"k-checkbox-item",input:"k-checkbox",label:"k-checkbox-label",list:"k-checkbox-list",vertical:"k-list-vertical",horizontal:"k-list-horizontal",disabled:"k-disabled"},checkAll:function(e){var t=this,i=t.element.find("input");!0===e?(i.prop(o,!0),t._value=[],i.each((function(e,i){t._value.push(i.value)}))):!1===e&&(i.prop(o,!1),t._value=[])},value:function(e){var t,i,n,r,u=this,a=[];if(undefined===e)return u._value||(u._value=[]),u._value;if(null===e||0===e.length)return u._value=[],void u.element.find("."+u.groupStyles.input).prop(o,!1);if(e&&!(e.length<1)){for((i=u.element.find("input[value='"+e[0]+"']")).length&&a.push(e[0]),r=1;r<e.length;r++)t=u.element.find("input[value='"+e[r]+"']"),(n=i.add(t)).length>i.length&&(i=n,a.push(e[r]));u._value=a,u.element.find("."+u.groupStyles.input).prop(o,!1),i.prop(o,!0)}},_changeHandler:function(t){var i=e(t.target),n=i.val();this._targetForPreventedChange!==t.target?(this._value||(this._value=[]),i.is(":checked")?this._value.push(n):this._value=this._value.filter((function(e){return e!==n})),this.trigger("change",{target:i})):this._targetForPreventedChange=null},_dataValRequired:function(e){e["data-msg-required"]=this.wrapper.attr("data-val-required"),e["data-rule-required"]="true"}});i.cssProperties.registerPrefix("CheckBoxGroup","k-checkbox-"),i.cssProperties.registerValues("CheckBoxGroup",[{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}]),n.plugin(u)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.checkboxgroup.js.map
