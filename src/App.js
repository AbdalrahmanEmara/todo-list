import "./index.css";
import { TasksList } from "./TasksList";
import { Header } from "./Header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <TasksList />
    </div>
  );
}


