import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // initialState 初始状态数据
  initialState: {
    count: 0,
  },
  // reducers 修改数据的同步方法
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    changeByInput(state, action) {
      // state.count += action.payload;
      // 转成数字进行相加
      state.count = Number(state.count) + Number(action.payload);
      // state.count += Number(action.payload);
    },
  },
});

// 解构出创建action对象的函数（actionCreater
const { increment, decrement, changeByInput } = counterStore.actions;
// 获取reducer函数
const reducer = counterStore.reducer;
// 导出创建action对象的函数和reducer函数

export { increment, decrement, changeByInput };
export default reducer;
