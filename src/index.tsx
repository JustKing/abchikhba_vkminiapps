import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import bridge from "@vkontakte/vk-bridge";

bridge.send("VKWebAppInit", {});

// bridge.subscribe((e) => {
//   console.log("bridge event", e);
// });

ReactDOM.render(
  <ConfigProvider scheme="inherit">
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
