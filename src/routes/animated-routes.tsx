import { Pages } from "@/pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<Pages.Home />} path="/" />
        <Route element={<Pages.Contacts />} path="/contacts" />
        <Route element={<Pages.Animation />} path="/animation" />
        <Route element={<Pages.Auth />} path="/auth" />
        <Route element={<Pages.Todo />} path="/todo" />
        <Route element={<Pages.LoadedNews />} path="/loadednews" />
      </Routes>
    </AnimatePresence>
  );
};
