import "./App.css";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import ToDo from "./Components/ToDo/ToDo";
import CompletedTasks from "./Components/CompletedTasks/CompletedTasks";
import Calendar from "./Components/Calendar/Calendar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="completedtasks" element={<CompletedTasks />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
