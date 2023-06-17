# @assetbox/demo

[![NPM](https://img.shields.io/npm/v/@assetbox/demo-react-icon)](https://www.npmjs.com/package/@assetbox/demo-react-icon)

This is a demo of the `assetbox static-build` and `assetbox icon-build`.

https://assetbox.github.io/docs/icon-build/svg-to-react-component

### Example icon used

[Ant Design Icons](https://github.com/ant-design/ant-design-icons) | [MIT](https://opensource.org/licenses/MIT)

### Usage

```tsx
import { AlertIcon } from "@assetbox/demo-react-icon/antd-filled";
import { AlertIcon as OutlinedAlertIcon } from "@assetbox/demo-react-icon/antd-outlined";
import { AlertIcon as TwoToneAlertIcon } from "@assetbox/demo-react-icon/antd-twotone";

function App() {
  return (
    <div>
      <AlertIcon />
      <OutlinedAlertIcon />
      <TwoToneAlertIcon />
    </div>
  );
}
```
