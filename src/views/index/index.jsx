import logo from "./logo.svg";
import "./index.css";
import React, { useEffect, useRef } from "react";
import {
  Button,
  Toast,
  Input,
  Divider,
  Space,
  Typography,
  Form,
  Tooltip,
} from "@douyinfe/semi-ui";
import { IconSearch, IconHelpCircle } from "@douyinfe/semi-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  changeByInput,
} from "../../store/modules/counterStore";
import { fetchChannels } from "../../store/modules/channelStore";

const list = [
  { id: 100, name: "vue2" },
  { id: 200, name: "react" },
  { id: 300, name: "angular" },
];

function App() {
  let [count1, setCount] = useState(0);

  const handleClick = () => {
    setCount(count1 + 1);
  };

  let [inputValue, setInputValue] = useState("");
  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  const inputRef = useRef(null);
  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
    } else {
      body.setAttribute("theme-mode", "dark");
    }
  };

  const [seInputVal, setSeInputValue] = useState("");
  function getValueLength(str) {
    if (typeof str === "string") {
      return str.length;
    } else {
      return 0;
    }
  }
  // user state redux
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const { channelList } = useSelector((state) => state.channel);

  const { Option } = Form.Select;

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  return (
    <div>
      <Divider margin="16px" />
      <Button onClick={switchMode}>Switch Mode</Button>
      <Divider margin="16px" />
      <img src={logo} className="App-logo" alt="logo" />
      <Divider margin="16px" />
      <Button onClick={() => Toast.info({ content: "welcome" })}>
        {"Hello Semi"}
      </Button>
      <Divider margin="16px" />
      <Button onClick={handleClick}>{count1}</Button>
      <Divider margin="16px" />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <Divider margin="16px" />
      {/* <input type="text" value={inputValue} onChange={handleInputChange} />{inputValue} */}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {inputValue}
      <Divider margin="16px" />
      <Input
        defaultValue="hi"
        prefix="综合"
        suffix={<IconSearch />}
        showClear
        value={seInputVal}
        onChange={setSeInputValue}
        getValueLength={getValueLength}
      />
      <span>{seInputVal}</span>
      {seInputVal && (
        <div>
          <Typography.Text type="tertiary">{`getValueLength=${getValueLength(
            seInputVal
          )}`}</Typography.Text>
        </div>
      )}
      <Divider margin="16px" />
      <div>
        <Space>
          <Button
            theme="solid"
            type="danger"
            style={{ marginRight: 8 }}
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
          counter: {count}
          <Button
            theme="solid"
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
          <Button
            theme="outline"
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => dispatch(changeByInput(100))}
          >
            +100
          </Button>
          <Button
            theme="outline"
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => dispatch(changeByInput(seInputVal))}
          >
            add by input
          </Button>
        </Space>
      </div>
      <Divider margin="16px" />
      <Form layout="horizontal" onValueChange={(values) => console.log(values)}>
        <Form.Input field="UserName" label="用户名" style={{ width: 80 }} />
        <Form.Input
          field="Password"
          label={{
            text: "密码",
            extra: (
              <Tooltip content="详情">
                <IconHelpCircle style={{ color: "var(--semi-color-text-2)" }} />
              </Tooltip>
            ),
          }}
          style={{ width: 176 }}
        />
        <Form.Select
          field="Role"
          label={{ text: "角色", optional: true }}
          style={{ width: 176 }}
        >
          <Option value="admin">管理员</Option>
          <Option value="user">普通用户</Option>
          <Option value="guest">访客</Option>
        </Form.Select>
      </Form>
      <Divider margin="16px" />
      <Button
        theme="solid"
        type="primary"
        style={{ marginRight: 8 }}
        onClick={() => dispatch(fetchChannels())}
      >
        reFetchChannels
      </Button>
      <ul>
        {channelList.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <Divider margin="16px" />
    </div>
  );
}

export default App;
