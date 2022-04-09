import { useTheme } from "@emotion/react";
import Router from "./routes";
function App() {
    const theme = useTheme()
    return (
        <Router />
    );
}
export default App;
