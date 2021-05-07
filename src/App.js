import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/inlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { SytledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <SytledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
