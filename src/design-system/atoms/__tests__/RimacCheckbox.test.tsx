import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RimacCheckbox from "../../atoms/RimacCheckbox";
import { useState } from "react";

function Wrapper() {
  const [checked, setChecked] = useState(false);
  return (
    <RimacCheckbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      required
    >
      Acepto términos
    </RimacCheckbox>
  );
}

describe("RimacCheckbox", () => {
  it("renderiza el label", () => {
    render(<Wrapper />);
    expect(screen.getByText(/Acepto términos/i)).toBeInTheDocument();
  });

  it("togglea al hacer click", () => {
    render(<Wrapper />);
    const input = screen.getByRole("checkbox");
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
  });
});
