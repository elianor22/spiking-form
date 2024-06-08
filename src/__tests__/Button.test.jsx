import { render } from "@testing-library/react";
import Button from "../components/Button/Button";

describe("<Button/>", () => {
  test("Should render childre", () => {
    const { getByTestId } = render(<Button>Button</Button>);

    const getText = getByTestId("button").textContent;

    expect(getText).toBe("Button")
  });
});
