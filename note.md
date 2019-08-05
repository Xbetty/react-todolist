##### 生命周期
生命周期函数指在某一个时刻组件会自动调用执行的函数
##### mounting挂载阶段
- componentWillMount(): 在组件即将被挂载到页面的时候，自动执行
- `render()`
- componentDidMount(): 组件被挂在到页面之后，自动被执行
> 这两个生命周期函数只在第一次挂载的时候被执行

##### Updation更新阶段
> 要么prop发生变化，要么state发生变化，即数据发生变化，页面的更新执行
**props:**
- componentWillReceiveProps(): 
```
// 一个组件要从父组件接收参数
// 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
// 如果这个组件第一次存在于父组件中，不会执行
// 如果这个组件之前已经存在于父组件中,才会执行
```
**props && state:**
- shouldComponentUpdate(): 组件被更新之前，自动被执行
- componentWillUpdate(): 
```
// 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate()之后执行
// 如果shouldComponentUpdate()返回true，componentWillUpdate函数才执行，否则该函数不执行
```
- render()
- componentDidUpdate(): 组件更新完成之后,被自动执行

##### Unmounting()卸载阶段
- componentWillUnmount(): 当此组件即将被从页面中剔除