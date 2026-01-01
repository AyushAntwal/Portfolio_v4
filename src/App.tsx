import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes";

export default function App() {
  return (
    <Suspense fallback={"Loading.."}>
      <RouterProvider router={Routes} />
    </Suspense>
  );
}
