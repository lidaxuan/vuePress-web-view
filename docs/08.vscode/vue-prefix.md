```json
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "vue",
		"body": [
      "<template>",
      "  <div class='$2'>$5</div>",
      "</template>",
      "",
      "<script>",
      "//例如：import 《组件名称》 from '《组件路径》';",
      "",
      "export default {",
      "  name:'',  // Pascal命名",
      "  mixins: [],",
      "  components: {},",
      "  props: {},",
      "  //import引入的组件需要注入到对象中才能使用",
      "  //这里存放数据",
      "  data() {",
      "    return {",
      "       ",
      "    };",
      "  },",
      "  //监听属性 类似于data概念",
      "  computed: {},",
      "  //监控data中的数据变化",
      "  watch: {",
			"  // 对象写法",
			"  // temObj: {",
			"  //   handler(newVal, oldVal) {",
			"  //   },",
			"  //   deep: true, // 深度",
			"  //   immediate: true, // 立即执行",
			"  // },",
			"  // temStr(val) {",

			"  // },",
			"  },",
      "  //生命周期 - 创建完成（可以访问当前this实例）",
      "  beforeCreate() {}, //生命周期 - 创建之前",
      "  created() {",
      "     ",
      "  },",
      "  //生命周期 - 挂载完成（可以访问DOM元素）",
      "  beforeMount() {}, //生命周期 - 挂载之前",
      "  mounted() {},",
      "  //方法集合",
      "  methods: {",
      "    ",
      "  },",
      "  beforeUpdate() {}, //生命周期 - 更新之前",
      "  updated() {}, //生命周期 - 更新之后",
      "  beforeDestroy() {}, //生命周期 - 销毁之前",
      "  destroyed() {}, //生命周期 - 销毁完成",
      "  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发",
			"}",
      "</script>",
      "<style lang='scss' scoped>",
      "//@import url($3); 引入公共css类",
      "$4",
      "</style>"
    ],
		"description": "Log output to console"
	}
}

```
