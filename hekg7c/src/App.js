import DrawerItem from "./Components/DrawerItem";
import SiteName from "./Components/SiteName";
import ToolBar from "./Components/ToolBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ToolBar>
        <SiteName>
          <DrawerItem label="🪟👌📱" />
        </SiteName>
        <DrawerItem label="About us" />
        <DrawerItem label="hello" />
        <DrawerItem label="Other" />
      </ToolBar>
    </div>
  );
}
