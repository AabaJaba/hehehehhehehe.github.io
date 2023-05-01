import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Navnoor Singh",
    location: "New Delhi, India",
    email: "kingnavnoor@gmail.com",
    availability: "Open for work",
    brand:
      "Transforming raw footage into captivating stories that connect with your audience.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
