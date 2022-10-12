import { Navbar, Users } from "./components";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 mb-10">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 mb-10">
        <Users />
      </div>
    </>
  );
}

export default App;
