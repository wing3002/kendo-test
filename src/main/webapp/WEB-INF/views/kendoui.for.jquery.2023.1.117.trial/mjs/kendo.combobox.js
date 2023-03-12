/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.list.js";import"./kendo.mobile.scroller.js";import"./kendo.virtuallist.js";import"./kendo.html.button.js";var __meta__={id:"combobox",name:"ComboBox",category:"web",description:"The ComboBox widget allows the selection from pre-defined values or entering a new value.",depends:["list","html.button"],features:[{id:"mobile-scroller",name:"Mobile scroller",description:"Support for kinetic scrolling in mobile device",depends:["mobile.scroller"]},{id:"virtualization",name:"VirtualList",description:"Support for virtualization",depends:["virtuallist"]}]};!function(e,t){var i=window.kendo,s=i.htmlEncode,o=i.ui,n=i.html,l=o.List,a=o.Select,r=i.caret,u=i.support,c=u.placeholder,d=i._activeElement,p=i.keys,_=".kendoComboBox",h=_+"FocusEvent",f="click"+_,g="mousedown"+_,v="disabled",m="readonly",x="change",b="k-focus",y="k-disabled",w="aria-disabled",V="aria-readonly",C="filter",T="accept",I="rebind",k=/(\r\n|\n|\r)/gm,F=[16,17,18,19,20,33,34,37,39,45,91,92,144,145],B=a.extend({init:function(t,s){var o,n=this;n.ns=_,s=Array.isArray(s)?{dataSource:s}:s,a.fn.init.call(n,t,s),s=n.options,t=n.element.on("focus"+_,n._focusHandler.bind(n)),s.placeholder=s.placeholder||t.attr("placeholder"),n._reset(),n._wrapper(),n._input(),n._clearButton(),n._tabindex(n.input),n._popup(),n._dataSource(),n._ignoreCase(),n._enable(),n._attachFocusEvents(),n._oldIndex=n.selectedIndex=-1,n._initialIndex=s.index,n.requireValueMapper(n.options),n._initList(),n._cascade(),s.autoBind?n._filterSource():(!(o=s.text)&&n._isSelect&&(o=t.children(":selected").text()),o&&n._setText(o)),o||n._placeholder(),e(n.element).parents("fieldset").is(":disabled")&&n.enable(!1),i.notify(n),n._toggleCloseVisibility(),n._applyCssClasses(),s.label&&n._label(),n._aria()},options:{name:"ComboBox",enabled:!0,index:-1,text:null,value:null,autoBind:!0,delay:200,dataTextField:"",dataValueField:"",minLength:1,enforceMinLength:!1,height:200,highlightFirst:!0,filter:"none",placeholder:"",suggest:!1,cascadeFrom:"",cascadeFromField:"",cascadeFromParentField:"",cascadeOnCustomValue:!1,ignoreCase:!0,animation:{},virtual:!1,template:null,groupTemplate:e=>s(e),fixedGroupTemplate:e=>s(e),clearButton:!0,syncValueAndText:!0,autoWidth:!1,popup:null,size:"medium",fillMode:"solid",rounded:"medium",label:null,clearOnEscape:!0},events:["open","close",x,"select","filtering","dataBinding","dataBound","cascade","set"],setOptions:function(e){var t=this._listOptions(e);a.fn.setOptions.call(this,e),this.listView.setOptions(t),this._accessors(),this._aria(),this._clearButton()},destroy:function(){var e=this;e.input.off(_),e.input.off(h),e.element.off(_),e.wrapper.off(_),clearTimeout(e._pasteTimeout),e._arrow.off(f+" "+g),e._clear.off(f+" "+g),a.fn.destroy.call(e)},_isValueChanged:function(e){return e!==l.unifyType(this._old,typeof e)&&e!==l.unifyType(this._oldText,typeof e)},_change:function(){var e=this,t=e.text(),i=t&&t!==e._oldText&&t!==e.options.placeholder,s=e.selectedIndex,o=-1===s;if(!e.options.syncValueAndText&&!e.value()&&o&&i)return e._old="",e._oldIndex=s,e._oldText=t,e._typing||e.element.trigger(x),e.trigger(x),void(e._typing=!1);a.fn._change.call(e),e._oldText=e.text&&e.text(),e._toggleCloseVisibility()},_attachFocusEvents:function(){var e=this;e.input.on("focus"+h,e._inputFocus.bind(e)).on("focusout"+h,e._inputFocusout.bind(e))},_focusHandler:function(e){e.target===this.element[0]&&this.input.trigger("focus")},_arrowClick:function(){this._toggle()},_inputFocus:function(){this.wrapper.addClass(b),this._placeholder(!1)},_inputFocusout:function(t){var i=this,s=i.value(),o=!e(t.relatedTarget).closest(".k-clear-value").length;i._userTriggered=!0,i.wrapper.removeClass(b),clearTimeout(i._typingTimeout),i._typingTimeout=null,o&&i.text(i.text());var n=i._focus(),l=this.listView.dataItemByIndex(this.listView.getElementIndex(n));s!==i.value()&&i.trigger("select",{dataItem:l,item:n})?i.value(s):(i._placeholder(),i._valueBeforeCascade=i._old,o&&(i._blur(),i.element.trigger("blur")))},_inputPaste:function(){var e=this;clearTimeout(e._pasteTimeout),e._pasteTimeout=null,e._pasteTimeout=setTimeout((function(){e.search()}))},_editable:function(e){var t=this,i=e.disable,s=e.readonly,o=t.wrapper.off(_),n=t.element.add(t.input.off(_)),l=t._arrow.off(f+" "+g),a=t._clear;s||i?(o.addClass(i?y:"").removeClass(i?"":y),n.attr(v,i).attr(m,s).attr(w,i).attr(V,s)):(o.removeClass(y).on("mouseenter.kendoComboBox mouseleave.kendoComboBox",t._toggleHover),n.prop(v,!1).prop(m,!1).attr(w,!1).attr(V,!1),l.on(f,t._arrowClick.bind(t)).on(g,(function(e){e.preventDefault()})),a.on(f+" touchend"+_,t._clearValue.bind(t)),t.input.on("keydown"+_,t._keydown.bind(t)).on("input"+_,t._search.bind(t)).on("paste"+_,t._inputPaste.bind(t)),t.wrapper.on(f+_,t._focusHandler.bind(t))),t._toggleCloseVisibility()},open:function(){var e=this,t=e._state,i=!!e.dataSource.filter()&&e.dataSource.filter().filters.length>0,s=!e.ul.find(e.listView.focus()).length;e.popup.visible()||(!e.listView.bound()&&t!==C||t===T?(e._open=!0,e._state=I,1!==e.options.minLength&&!i||i&&e.value()&&-1===e.selectedIndex?(e.refresh(),e._openPopup(),this.options.virtual||e.listView.bound(!1)):e._filterSource()):e._allowOpening()&&(e.popup._hovered=!0,e._openPopup(),e.options.virtual?e._focusItem():s&&e.options.highlightFirst&&e.listView.focus(0)))},_scrollToFocusedItem:function(){var e=this.listView;e.scrollToIndex(e.getElementIndex(e.focus()))},_openPopup:function(){this.popup.one("activate",this._scrollToFocusedItem.bind(this)),this.popup.open()},_updateSelectionState:function(){var e=this,i=e.options.text,s=e.options.value;e.listView.isFiltered()||(-1===e.selectedIndex?(i!==t&&null!==i||(i=s),e._accessor(s),e.input.val(i||e.input.val()),e._placeholder()):-1===e._oldIndex&&(e._oldIndex=e.selectedIndex))},_buildOptions:function(e){var i=this;if(i._isSelect){var s=i._customOption;i._state===I&&(i._state=""),i._customOption=t,i._options(e,"",i.value()),s&&s[0].selected&&!i.listView._emptySearch&&i._custom(s.val())}},_updateSelection:function(){var t=this,i=t.listView,s=t._initialIndex,o=null!==s&&s>-1;if(t._state===C)e(i.focus()).removeClass("k-selected");else if(!t._fetch){i.value().length||(o?t.select(s):t._accessor()&&i.value(t._accessor())),t._initialIndex=null;var n=i.selectedDataItems()[0];n&&(t._value(n)!==t.value()?t._custom(t._value(n)):t._value(n)!==t.element[0].value&&t._accessor(t._value(n)),t.text()&&t.text()!==t._text(n)&&t._selectValue(n))}},_updateItemFocus:function(){var e=this.listView;this.options.highlightFirst?e.focus()||e.focusIndex()||e.focus(0):e.focus(-1)},_listBound:function(){var e=this,i=e.input[0]===d(),s=e.dataSource.flatView(),o=e.listView.skip(),n=s.length,l=e.dataSource._group?e.dataSource._group.length:0,a=o===t||0===o;e._presetValue=!1,e._renderFooter(),e._renderNoData(),e._toggleNoData(!n),e._toggleHeader(!!l&&!!n),e._resizePopup(),e.popup.position(),e._buildOptions(s),e._updateSelection(),s.length&&a&&(e._updateItemFocus(),e.options.suggest&&i&&e.input.val()&&e.suggest(s[0])),e._open&&(e._open=!1,e._typingTimeout&&!i?e.popup.close():e.toggle(e._allowOpening()),e._typingTimeout=null),e._hideBusy(),e.trigger("dataBound")},_listChange:function(){this._selectValue(this.listView.selectedDataItems()[0]),this._presetValue&&(this._oldIndex=this.selectedIndex)},_get:function(e){var t,i,s;if("function"==typeof e){for(t=this.dataSource.flatView(),s=0;s<t.length;s++)if(e(t[s])){e=s,i=!0;break}i||(e=-1)}return this.dataSource.total()||e||(e=-1),e},_select:function(e,t){var i=this;return-1===(e=i._get(e))&&(i.input[0].value="",i._accessor("")),i.listView.select(e).done((function(){t||i._state!==C||(i._state=T),i._toggleCloseVisibility()}))},_selectValue:function(e){var i=this.listView.select(),s="",o="";(i=i[i.length-1])===t&&(i=-1),this.selectedIndex=i,this.listView.isFiltered()&&-1!==i&&(this._valueBeforeCascade=this._old),-1!==i||e?((e||0===e)&&(s=this._dataValue(e),o=this._text(e)),null===s&&(s="")):(this.options.syncValueAndText?s=o=this.options.dataTextField===this.options.dataValueField?this._accessor():this.input[0].value:o=this.text(),this.listView.focus(-1)),this._setDomInputValue(o),this._accessor(s!==t?s:o,i),this._placeholder(),this._triggerCascade()},_setDomInputValue:function(e){var t,i=this,s=r(this.input);if(s&&s.length&&(t=s[0]),this._prev=this.input[0].value=e,t&&-1===this.selectedIndex){var o=u.mobileOS;o.wp||o.android?setTimeout((function(){i.input[0].setSelectionRange(t,t)}),0):this.input[0].setSelectionRange(t,t)}},refresh:function(){this.listView.refresh()},_toggleCloseVisibility:function(){var e=this.element.is(":disabled")||this.element.is("[readonly]");this.text()&&!e?this._showClear():this._hideClear()},suggest:function(e){var i,s=this,o=s.input[0],n=s.text(),a=r(o)[0],u=s._last,c=s.dataSource.options.accentFoldingFiltering;u!=p.BACKSPACE&&u!=p.DELETE?("string"!=typeof(e=e||"")&&(e[0]&&(e=s.dataSource.view()[l.inArray(e[0],s.ul[0])]),e=e?s._text(e):""),a<=0&&(a=(c?n.toLocaleLowerCase(c):n.toLowerCase()).indexOf(c?e.toLocaleLowerCase(c):e.toLowerCase())+1),e?(e=e.toString(),(i=(c?e.toLocaleLowerCase(c):e.toLowerCase()).indexOf(c?n.toLocaleLowerCase(c):n.toLowerCase()))>-1&&(n+=e.substring(i+n.length))):n=n.substring(0,a),n.length===a&&e||(o.value=n,o===d()&&r(o,a,n.length))):s._last=t},text:function(e){e=null===e?"":e;var i,s,o=this,n=o.input[0],a=o.options.ignoreCase,r=e;if(e===t)return n.value;!1!==o.options.autoBind||o.listView.bound()?(i=o.dataItem())&&o._text(i).replace&&o._text(i).replace(k,"")===e&&(s=o._value(i))===l.unifyType(o._old,typeof s)?o._triggerCascade():(a&&(r=r.toLowerCase()),o.dataItem()&&o._text(o.dataItem())===e||(o._select((function(e){return e=o._text(e),a&&(e=(e+"").toLowerCase()),e===r})).done((function(){o.selectedIndex<0&&(n.value=e,o.options.syncValueAndText&&o._accessor(e),o._cascadeTriggered=!0,o._triggerCascade(),o._refreshFloatingLabel()),o._prev=n.value})),o._toggleCloseVisibility())):o._setText(e)},toggle:function(e){this._toggle(e,!0)},value:function(e){var i=this,s=i.options,o=i.listView;if(e===t)return(e=i._accessor()||i.listView.value()[0])===t||null===e?"":e;i.requireValueMapper(i.options,e),i.trigger("set",{value:e}),(e!==s.value||i.input.val()!==s.text||i.options.cascadeFrom)&&(i._accessor(e),i._isFilterEnabled()&&o.bound()&&o.isFiltered()?i._clearFilter():i._fetchData(),o.value(e).done((function(){-1!==i.selectedIndex||o._selectedDataItems&&o._selectedDataItems.length||(i._accessor(e),i.input.val(e),i._placeholder(!0)),i._userTriggered?i._old=i._accessor():i._old=i._valueBeforeCascade=i._accessor(),i._oldIndex=i.selectedIndex,i._prev=i._oldText=i.input.val(),i._state===C&&(i._state=T),i._toggleCloseVisibility(),i._refreshFloatingLabel()})))},_hideBusy:function(){var e=this;clearTimeout(e._busy),e._arrowIcon.removeClass("k-i-loading k-input-loading-icon"),e._focused.attr("aria-busy",!1),e._busy=null,e._toggleCloseVisibility()},_click:function(e){var t=this,i=e.item,s=t.listView.dataItemByIndex(t.listView.getElementIndex(i)),o=!0;e.preventDefault(),s&&((o=t._value(s)!==l.unifyType(t.value(),typeof t._value(s)))||t.input.val(t._text(s))),o&&t.trigger("select",{dataItem:s,item:i})?t.close():(t._userTriggered=!0,t._select(i).done((function(){t._blur()})))},_syncValueAndText:function(){return this.options.syncValueAndText},_inputValue:function(){return this.text()},_searchByWord:function(e){var i=this,s=i.options,o=i.dataSource,n=s.ignoreCase;if(n&&(e=e.toLowerCase()),i.ul[0].firstChild){this.listView.focus(this._get((function(s){var o=i._text(s);if(o!==t)return(""==(o+="")||""!==e)&&(n&&(o=o.toLowerCase()),0===o.indexOf(e))})));var l=this.listView.focus();l&&(s.suggest&&i.suggest(l),this.open()),this.options.highlightFirst&&!e&&this.listView.focusFirst()}else o.one(x,(function(){o.view()[0]&&i.search(e)})).fetch()},_input:function(){var e,t,i,s=this,o=s.element.removeClass("k-input-inner")[0],l=o.accessKey,a=s.wrapper,r="input.k-input-inner",u=o.name||"",d=s.options;u&&(u='name="'+u+'_input" '),(e=a.find(r))[0]||(i=n.renderButton('<button type="button" class="k-input-button" aria-label="expand combobox"></button>',{icon:"arrow-s",size:d.size,fillMode:d.fillMode,shape:"none",rounded:"none"}),a.append("<input "+u+'class="k-input-inner" type="text" autocomplete="off"/>').append(i).append(s.element),e=a.find(r)),e[0].style.cssText=o.style.cssText,e[0].title=o.title,(t=parseInt(this.element.prop("maxlength")||this.element.attr("maxlength"),10))>-1&&(e[0].maxLength=t),e.addClass(o.className).css({width:"",height:o.style.height,position:""}).attr({role:"combobox","aria-expanded":!1}).show(),c&&e.attr("placeholder",s.options.placeholder),l&&(o.accessKey="",e[0].accessKey=l),s._focused=s.input=e,s._arrow=a.find(".k-input-button").attr({role:"button",tabIndex:-1}),s._arrowIcon=s._arrow.find(".k-icon")},_clearButton:function(){l.fn._clearButton.call(this),this.options.clearButton&&(this._clear.insertAfter(this.input),this.wrapper.addClass("k-combobox-clearable"))},_keydown:function(e){var t=this,i=e.keyCode,s=t.options.dataTextField||"text",o=i>=112&&i<=135,n=F.indexOf(i)>-1;if(t._last=i,clearTimeout(t._typingTimeout),t._typingTimeout=null,i===p.HOME)t._firstItem();else if(i===p.END)t._lastItem();else if(i===p.ENTER||i===p.TAB&&t.popup.visible()){var a=t.listView.focus(),r=t.dataItem(),u=!0;if(t.popup.visible()||r&&t.text()===t._text(r)||(a=null),a){if(t.popup.visible()&&e.preventDefault(),(r=t.listView.dataItemByIndex(t.listView.getElementIndex(a)))&&(u=t._value(r)!==l.unifyType(t.value(),typeof t._value(r))),u&&t.trigger("select",{dataItem:r,item:a}))return;t._userTriggered=!0,t._select(a).done((function(){t._blur(),t._valueBeforeCascade=t._old=t.value()}))}else(t._syncValueAndText()||t._isSelect)&&(t.dataItem()&&t.dataItem()[s]===t.input.val()||t._accessor(t.input.val())),t.options.highlightFirst?(t.listView.value(t.input.val()),t._blur()):t._oldText=t.text()}else i==p.TAB||t._move(e)||n||o||e.ctrlKey?t.options.clearOnEscape&&i===p.ESC&&!t.popup.visible()&&t.text()&&t._clearValue():t._search()},_placeholder:function(e){if(!c){var i,s=this,o=s.input,n=s.options.placeholder;if(n){if(i=s.value(),e===t&&(e=!i),o.toggleClass("k-readonly",e),!e){if(i)return;n=""}o.val(n),n||o[0]!==d()||r(o[0],0,0)}}},_search:function(){var e=this;clearTimeout(e._typingTimeout),e._typingTimeout=setTimeout((function(){var i=e.text();""!==i&&e._prev!==i?(e._prev=i,"none"===e.options.filter&&e.options.virtual&&e.listView.select(-1),e.search(i),e._toggleCloseVisibility()):""===i&&""!==e._prev&&e._prev!==t&&(e._clearValue(),e._open=!0,e._state=I),e._typingTimeout=null}),e.options.delay)},_setText:function(e){this.input.val(e),this._prev=e},_wrapper:function(){var e=this.element,t=e.parent();t.is("span.k-input")||((t=e.hide().wrap("<span />").parent())[0].style.cssText=e[0].style.cssText),this.wrapper=t.addClass("k-input k-combobox").addClass(e[0].className).removeClass("input-validation-error").css("display","")},_clearSelection:function(e,t){var i=e.value(),s=i&&-1===e.selectedIndex;-1==this.selectedIndex&&this.value()||(t||!i||s)&&(this.options.value="",this.value(""))},_preselect:function(e,t){this.input.val(t),this._accessor(e),this._old=this._accessor(),this._oldIndex=this.selectedIndex,this.listView.setValue(e),this._placeholder(),this._initialIndex=null,this._presetValue=!0,this._toggleCloseVisibility()},_clearText:function(){this._old=this.value(),this.text("")},_clearValue:function(){a.fn._clearValue.call(this),this.input.trigger("focus")}});o.plugin(B),i.cssProperties.registerPrefix("ComboBox","k-input-"),i.cssProperties.registerValues("ComboBox",[{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}])}(window.kendo.jQuery);
//# sourceMappingURL=kendo.combobox.js.map
