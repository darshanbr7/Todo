
import App from "./App"
import { createRoot}  from 'react-dom/client';
//ReactDom.render(<App /> ,document.getElementById("todo"))
let Todo=document.getElementById("todo")
const root=createRoot(Todo)
root.render(<App tab="home" />)