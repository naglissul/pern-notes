import App from "./App";
import { render } from "@testing-library/react";

test("Renders Title", () => {
  const { getByText } = render(<App />);
  const helloWorldText = getByText("Notes App");
  expect(helloWorldText).toBeInTheDocument();
});
