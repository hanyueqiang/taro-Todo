import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { add, del } from '../../actions/index'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    newTodo: ''
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  saveNewTodo(e) {
    let { newTodo } = this.state
    if (!e.detail.value || e.detail.value === newTodo) return

    this.setState({
      newTodo: e.detail.value
    })
  }

  addTodo() {
    let { newTodo } = this.state
    let { add } = this.props

    if (!newTodo) return

    add(newTodo)
    this.setState({
      newTodo: ''
    })
  }

  delTodo(id) {
    let { del } = this.props
    del(id)
  }

  render() {
    // 获取未经处理的todos并展示
    let { newTodo } = this.state
    let { todos, add, del } = this.props

    const todosJsx = todos.map((todo, index) => {
      return (
        <View className='todos_item' key={index}><Text>{todo.text}</Text><View className='del' onClick={this.delTodo.bind(this, todo.id)}>删除</View></View>
      )
    })

    return (
      <View className='index todos'>
        <View className='add_wrap'>
          <Input placeholder="填写新的todo" onBlur={this.saveNewTodo.bind(this)} value={newTodo} />
          <Button className='add' onClick={this.addTodo.bind(this)}>添加</Button>
        </View>
        <View>{todosJsx}</View>
      </View>
    )
  }
}

export default connect(({ todos }) => ({
  todos: todos.todos
}), (dispatch) => ({
  add(data) {
    dispatch(add(data))
  },
  del(id) {
    dispatch(del(id))
  }
}))(Index)


