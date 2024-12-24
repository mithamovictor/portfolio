import Header from "./components/Header";
import Introduction from "./components/Introduction.tsx";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <section className="py-10 md:py-16">

        <div className="container max-w-screen-xl mx-auto px-4">

         <Header />

         <Introduction />

        </div>

      </section>
    </div>
  )
}

export default App
