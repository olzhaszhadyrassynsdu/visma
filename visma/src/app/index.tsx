import { AnimatedRoutes } from "@/routes/animated-routes";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}
