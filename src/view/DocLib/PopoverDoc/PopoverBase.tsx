import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button, Popover} from "../../../lib";


const PopoverBase:React.FC = () => {
  const code = `<Popover position="bottom" trigger="click" content="这里添加一段话">
  <Button>向下提示</Button>
</Popover>
<Popover position="top" trigger="click" content="这里添加一段话">
  <Button>向上提示</Button>
</Popover>
<Popover position="left" trigger="click" content="这里添加一段话">
  <Button>向左提示</Button>
</Popover>
<Popover position="right" trigger="click" content="这里添加一段话">
  <Button>向又提示</Button>
</Popover>`

  return (
    <CodeBox
      className="PopoverBase"
      title="基础使用"
      description={<p><code>position</code>属性定义弹出方向。<code>content</code>定义弹出内容，可以为<code>JSX</code></p>}
      defaultVisible={true}
      code={code}>
      <Popover position="bottom" trigger="click" content="这里添加一段话">
        <Button>向下提示</Button>
      </Popover>
      <Popover position="top" trigger="click" content="这里添加一段话">
        <Button>向上提示</Button>
      </Popover>
      <Popover position="right" trigger="click" content="这里添加一段话">
        <Button>向右提示</Button>
      </Popover>
      <Popover position="left" trigger="click" content="这里添加一段话">
        <Button>向左提示</Button>
      </Popover>
    </CodeBox>
  )
};


export {PopoverBase};