import { Provider } from "react-redux";
import store from "@/redux/store/store";
import "tailwind/index.css";
import Index from ".";
export default function Home() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
