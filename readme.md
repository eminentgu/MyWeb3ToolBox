#### MyWebToolBox

这里放跟web3有关的代码

---

* Web3Bot
  * 部署一个可以实时推送信息的信息聚合机器人
  * 已经实现的功能
    * 信息推送功能：推送到飞书/微信
      * 飞书：使用api
      * 微信：在windows下客户端注入消息
    * 监控NFT flipper地址
      * 使用mct api
    * 推特监控
      * 使用推特镜像站
  * 未实现的功能
    * 量化监控、异动提醒
    * NFT 跟单
    * dc抽奖监控
    * 微信风控掉线提醒
* base
  * base测试链交互脚本，目前实现的功能是：
    * 从goerli测试网使用跨链桥跨到base链
    * base链部署合约
  * 未实现的功能是:
    * 交互网页自动领取NFT
* scroll
  * 从主网跨链到scroll
  * to be continue
* premint
  * 龙族的工具的一小部分，备份