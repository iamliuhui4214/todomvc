;(function () {
  const todos = [
    {
	  id:1,
	  title: "吃饭",
	  done: true
	},
    {
	  id:2,
	  title: "睡觉",
	  done: false
	},
    {
	  id:3,
	  title: "吃饭1231",
	  done: true
	}
  ]


  new Vue({
	el: "#todoapp",
	data: {
	  todos,//任务列表数据源
		inputText: "",//绑定获取添加任务文本框的数据
		currentEdit: null,//判定任务项是否获取editing样式的一个标记变量
		backTitle: ""//备份编辑之前的title
	},
	methods: {
	  addTodo () {
		// 1拿到文本
		// 结构赋值
		const {todos,inputText} = this
		
		// 2非空校验
		// trim()方法 清除字符串左右两边的空格
		if (inputText.trim().length === 0) {
		  return
		}

		// 3获取唯一id
		// 检测数组是否删完，如果删完将新添加对象id设置为1
		const list = todos[todos.length-1]
		const id = list ? list.id+1 : 1
		// 4添加到数组中
		todos.push({
			id,
			title: inputText,
			done: false
		})
		// 5清空文本框
		this.inputText = ''
		},
		
		// 删除单个数据
		removeTodo (index) {
			// splice 参数一：删除项索引  参数二：删除几位长度
			this.todos.splice(index,1)
		},

		// 算计进入编辑状态
		getEditing (item) {
			// 保存编辑前的title
			this.backTitle = item.title
			this.currentEdit = item
			// console.log(this.currentEdit)
		},

		// 回车或失去焦点保存编辑
		caveEdit (item,index) {
			// 保存编辑数据
			// 判断被编辑数据文本是否为空
			// 为空则直接删除
			// 不为空则保存编辑，去除编辑样式
			if(item.title.trim().length === 0) {
				todos.splice(index,1)
			}else{
				this.currentEdit = null
			}
		},

		// ESC取消编辑
		cancelEdit () {
			// 回归为编辑前的title
			this.currentEdit = this.backTitle
			this.currentEdit = null
		}
	}
  })
})()