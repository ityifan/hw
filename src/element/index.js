import Vue from 'vue'
// 按需引入：base.css 基础样式必须引入，其它组件样式按需引入
import "element-ui/packages/theme-chalk/lib/base.css";
import "element-ui/packages/theme-chalk/lib/collapse.css";
import "element-ui/packages/theme-chalk/lib/collapse-item.css";
import "element-ui/packages/theme-chalk/lib/select.css";
import "element-ui/packages/theme-chalk/lib/option.css";
 
import {Button} from 'element-ui';//从element-ui中引入按钮

 Vue.use(Button);//在vue中使用按钮