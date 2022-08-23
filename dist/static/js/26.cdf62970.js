"use strict";(self["webpackChunkwinktool"]=self["webpackChunkwinktool"]||[]).push([[26],{9228:function(e,a,t){t.r(a),t.d(a,{default:function(){return K}});var l=t(8222),o=t(5452),n=t.n(o),c=t(794),d=t(2966),r=t(6603),s=t(150),i=t(5982),u=t(7918),m=t.n(u);const V=e=>((0,l.pushScopeId)("data-v-2703850d"),e=e(),(0,l.popScopeId)(),e),p={class:"main-container"},h={class:"left-container"},w={class:"card-header"},N=V((()=>(0,l.createElementVNode)("span",null,"钱包参数设置",-1))),x=(0,l.createTextVNode)("保存"),f=(0,l.createTextVNode)("清除"),g=V((()=>(0,l.createElementVNode)("p",{class:"help-block"},"不填写就自动获取的。",-1))),v=V((()=>(0,l.createElementVNode)("div",{class:"card-header"},[(0,l.createElementVNode)("span",null,"mint参数设置")],-1))),y=V((()=>(0,l.createElementVNode)("p",{class:"help-block"},"Gas War的时候，一般是500起。",-1))),C=V((()=>(0,l.createElementVNode)("p",{class:"help-block"},"Gas War的时候，一般都要30起。",-1))),b=(0,l.createTextVNode)("预估"),_=(0,l.createTextVNode)("自定"),P=V((()=>(0,l.createElementVNode)("p",{class:"help-block"}," 自定Gas Limit会直接发送交易，存在过早提交的问题，请自行判断。 ",-1))),G=(0,l.createTextVNode)("是"),k=(0,l.createTextVNode)("否"),T=(0,l.createTextVNode)("Mint"),L={class:"right-container"},U=V((()=>(0,l.createElementVNode)("div",{class:"card-header"},[(0,l.createElementVNode)("span",null,"加速")],-1))),F=V((()=>(0,l.createElementVNode)("p",{class:"help-block"},"Gas War的时候，一般是500起。",-1))),E=V((()=>(0,l.createElementVNode)("p",{class:"help-block"},"Gas War的时候，一般都要30起。",-1))),D=(0,l.createTextVNode)("立即加速");var S=(0,l.defineComponent)({__name:"mint",setup(e){const a=(0,i.Z)();let t=null;const o={chainId:1},u=(new c.Z(10).pow(9),(0,l.reactive)({account:{node:"",address:"",privateKey:"",nonce:""},contract_address:"",value:"0",data:"",maxFeePerGas:"50",maxPriorityFeePerGas:"1",maxFeePerGasUp:"600",maxPriorityFeePerGasUp:"50",repeat:0,gasLimitType:1,gasLimit:21e4})),V=(0,l.ref)([]);let S=null;async function B(e){try{S.eth.sendSignedTransaction(e.rawTransaction,(function(e,a){if(e)console.log("Something went wrong while submitting your transaction:",e);else{let e="\n\n开始铸造！\n当前时间："+(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString()+"\nTransaction Hash："+a+"\n";V.value.unshift(e),console.log(e),t=setInterval((async function(){try{let e=await S.eth.getTransactionReceipt(a);if(!n().empty(e)&&e.status){let l=`\n\n铸造成功!!!!!!!!!!\n返回结果：\nblockNumber: ${e.blockNumber}\ntransactionHash: ${a}\ngasUsed: ${e.gasUsed}\n铸造完成时间：`+(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString()+"\n";V.value.unshift(l),console.log(l),clearInterval(t)}else{let e="\n\n正在铸造……\n当前区块："+Number(await S.eth.getBlockNumber())+"\n当前时间："+(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString()+"\n";V.value.unshift(e),console.log(e)}}catch(e){console.log("name",e.name),console.log("message",e.message),V.value.unshift(e.message+"\n")}}),1e3)}}))}catch(a){console.log("name",a.name);let e="\n\n铸造失败!\n原因是：\n"+a.message+"\n当前时间："+(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString()+"\n";V.value.unshift(e),console.log(e)}}async function I(){let e=0;console.log("nonce",e),e=n().empty(u.account.nonce)?await S.eth.getTransactionCount(u.account.address,"latest"):u.account.nonce,V.value.unshift("\n交易序号:"+e+"\n");let a=u.data;a.includes("[address]")&&(a=a.replace("[address]",u.account.address.toLocaleLowerCase().replace("0x","")));try{let t=0;1==u.gasLimitType?(t=await S.eth.estimateGas({from:u.account.address,to:u.contract_address,value:m().utils.toWei(u.value,"ether"),data:a}),V.value.unshift("\n预估Gas Limit:"+t+"\n")):(t=m().utils.toHex(u.gasLimit),V.value.unshift("\n自定义Gas Limit:"+u.gasLimit+"\n")),console.log("estimatedGas",t);let l={nonce:e,chainId:o.chainId,type:2,value:m().utils.toWei(u.value,"ether"),data:a,gas:t,maxFeePerGas:m().utils.toWei(u.maxFeePerGas,"gwei"),maxPriorityFeePerGas:m().utils.toWei(u.maxPriorityFeePerGas,"gwei"),to:u.contract_address,from:u.account.address};const n=await S.eth.accounts.signTransaction(l,u.account.privateKey);await B(n)}catch(t){console.log("name",t.name),console.log("\n\n签名失败!\n原因是：",t.message),V.value.unshift("\n\n签名失败!\n原因是："+t.message+"\n"),1==u.gasLimitType&&1==u.repeat&&await I()}}async function K(){n().empty(u.account.node)||n().empty(u.account.address)||n().empty(u.account.privateKey)?(0,d.z8N)({type:"error",message:"请填写节点、地址、私钥"}):(a.set_wallet({node:u.account.node,address:u.account.address,privateKey:u.account.privateKey}),S=new(m())(new(m().providers.HttpProvider)(u.account.node)))}async function W(){a.set_wallet({}),u.account={}}async function H(){await I()}async function Z(){u.repeat=0,clearInterval(t),u.maxFeePerGas=u.maxFeePerGasUp,u.maxPriorityFeePerGas=u.maxPriorityFeePerGasUp,await I()}return(0,l.onMounted)((async()=>{console.log("onMounted"),n().empty(a.wallet)||(u.account=a.wallet,S=new(m())(new(m().providers.HttpProvider)(u.account.node)))})),(e,a)=>{const t=(0,l.resolveComponent)("el-button"),o=(0,l.resolveComponent)("el-input"),n=(0,l.resolveComponent)("el-form-item"),c=(0,l.resolveComponent)("el-card"),d=(0,l.resolveComponent)("el-radio"),i=(0,l.resolveComponent)("el-radio-group"),m=(0,l.resolveComponent)("el-form");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(l.Transition,null,{default:(0,l.withCtx)((()=>[((0,l.openBlock)(),(0,l.createBlock)(l.KeepAlive,null,[(0,l.createVNode)(r.Z)],1024))])),_:1}),(0,l.createVNode)(s.Z,null,{default:(0,l.withCtx)((()=>[(0,l.createVNode)(m,{model:u,"label-width":"120px"},{default:(0,l.withCtx)((()=>[(0,l.createElementVNode)("div",p,[(0,l.createElementVNode)("div",h,[(0,l.createVNode)(c,{class:"box-card",shadow:"never"},{header:(0,l.withCtx)((()=>[(0,l.createElementVNode)("div",w,[N,(0,l.createElementVNode)("div",null,[(0,l.createVNode)(t,{class:"button",type:"primary",size:"small",onClick:K},{default:(0,l.withCtx)((()=>[x])),_:1}),(0,l.createVNode)(t,{class:"button",type:"danger",size:"small",onClick:W},{default:(0,l.withCtx)((()=>[f])),_:1})])])])),default:(0,l.withCtx)((()=>[(0,l.createVNode)(n,{label:"节点地址"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.account.node,"onUpdate:modelValue":a[0]||(a[0]=e=>u.account.node=e)},null,8,["modelValue"])])),_:1}),(0,l.createVNode)(n,{label:"钱包地址"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.account.address,"onUpdate:modelValue":a[1]||(a[1]=e=>u.account.address=e)},null,8,["modelValue"])])),_:1}),(0,l.createVNode)(n,{label:"钱包私钥"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.account.privateKey,"onUpdate:modelValue":a[2]||(a[2]=e=>u.account.privateKey=e),type:"password"},null,8,["modelValue"])])),_:1}),(0,l.createVNode)(n,{label:"交易序号"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.account.nonce,"onUpdate:modelValue":a[3]||(a[3]=e=>u.account.nonce=e)},null,8,["modelValue"]),g])),_:1})])),_:1}),(0,l.createVNode)(c,{class:"box-card",shadow:"never"},{header:(0,l.withCtx)((()=>[v])),default:(0,l.withCtx)((()=>[(0,l.createVNode)(n,{label:"合约"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.contract_address,"onUpdate:modelValue":a[4]||(a[4]=e=>u.contract_address=e)},null,8,["modelValue"])])),_:1}),(0,l.createVNode)(n,{label:"ETH数量"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.value,"onUpdate:modelValue":a[5]||(a[5]=e=>u.value=e)},null,8,["modelValue"])])),_:1}),(0,l.createVNode)(n,{label:"16进制代码"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.data,"onUpdate:modelValue":a[6]||(a[6]=e=>u.data=e),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,l.createVNode)(n,{label:"最大愿意支付gas"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.maxFeePerGas,"onUpdate:modelValue":a[7]||(a[7]=e=>u.maxFeePerGas=e)},null,8,["modelValue"]),y])),_:1}),(0,l.createVNode)(n,{label:"矿工小费"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.maxPriorityFeePerGas,"onUpdate:modelValue":a[8]||(a[8]=e=>u.maxPriorityFeePerGas=e)},null,8,["modelValue"]),C])),_:1}),(0,l.createVNode)(n,{label:"Gas Limit"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(i,{modelValue:u.gasLimitType,"onUpdate:modelValue":a[9]||(a[9]=e=>u.gasLimitType=e)},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(d,{label:1},{default:(0,l.withCtx)((()=>[b])),_:1}),(0,l.createVNode)(d,{label:2},{default:(0,l.withCtx)((()=>[_])),_:1})])),_:1},8,["modelValue"]),2==u.gasLimitType?((0,l.openBlock)(),(0,l.createBlock)(o,{key:0,modelValue:u.gasLimit,"onUpdate:modelValue":a[10]||(a[10]=e=>u.gasLimit=e)},null,8,["modelValue"])):(0,l.createCommentVNode)("",!0),P])),_:1}),1==u.gasLimitType?((0,l.openBlock)(),(0,l.createBlock)(n,{key:0,label:"失败重试"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(i,{modelValue:u.repeat,"onUpdate:modelValue":a[11]||(a[11]=e=>u.repeat=e)},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(d,{label:1},{default:(0,l.withCtx)((()=>[G])),_:1}),(0,l.createVNode)(d,{label:0},{default:(0,l.withCtx)((()=>[k])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,l.createCommentVNode)("",!0),(0,l.createVNode)(t,{type:"primary",onClick:H},{default:(0,l.withCtx)((()=>[T])),_:1})])),_:1})]),(0,l.createElementVNode)("div",L,[(0,l.createVNode)(c,{class:"box-card",shadow:"never"},{header:(0,l.withCtx)((()=>[U])),default:(0,l.withCtx)((()=>[(0,l.createVNode)(n,{label:"最大愿意支付gas"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.maxFeePerGasUp,"onUpdate:modelValue":a[12]||(a[12]=e=>u.maxFeePerGasUp=e)},null,8,["modelValue"]),F])),_:1}),(0,l.createVNode)(n,{label:"矿工小费"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(o,{modelValue:u.maxPriorityFeePerGasUp,"onUpdate:modelValue":a[13]||(a[13]=e=>u.maxPriorityFeePerGasUp=e)},null,8,["modelValue"]),E])),_:1}),(0,l.createVNode)(t,{type:"primary",onClick:Z},{default:(0,l.withCtx)((()=>[D])),_:1})])),_:1}),(0,l.createVNode)(o,{class:"log-container",modelValue:V.value,"onUpdate:modelValue":a[14]||(a[14]=e=>V.value=e),type:"textarea",rows:20,disabled:""},null,8,["modelValue"])])])])),_:1},8,["model"])])),_:1})],64)}}}),B=t(3744);const I=(0,B.Z)(S,[["__scopeId","data-v-2703850d"]]);var K=I}}]);