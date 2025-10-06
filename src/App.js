import "./index.css";
import { TasksList } from "./components/TasksList";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <TasksList />
    </div>
  );
}


