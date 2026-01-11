import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";

export default function App() {
  return (
    <Suspense fallback={"Loading.."}>
      <RouterProvider router={Routes} />
    </Suspense>
  );
}
