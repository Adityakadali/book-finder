import Nav from "./components/Nav";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-5xl px-6">
        <Hero />
      </main>
    </>
  );
}

export default App;
