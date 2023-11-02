import MainContainer from "./components/Dashboard/MainContainer";
import Sidebar from "./components/Dashboard/Sidebar";
import TopMenu from "./components/Dashboard/TopMenu";

function App() {
  const user = 'John Doe'; // replace with the logged-in user's name
  const content = 'Content will be displayed here based on the sidebar click';

  return (
    <div className="App">
      <TopMenu user={user} />
      <Sidebar />
      <MainContainer content={content} />
    </div>
  );
}

export default App;
