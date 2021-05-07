import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/inlineStyle";
import { SytledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <SytledJsx />
    </div>
  );
}
