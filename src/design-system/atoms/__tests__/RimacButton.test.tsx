import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RimacButton from "../../atoms/RimacButton";

describe("RimacButton", () => {
  it("renderiza el texto", () => {
    render(<RimacButton>Hola</RimacButton>);
    expect(screen.getByRole("button", { name: "Hola" })).toBeInTheDocument();
  });

  it("dispara onClick", () => {
    const handleClick = vi.fn();
    render(<RimacButton onClick={handleClick}>Click</RimacButton>);
    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
