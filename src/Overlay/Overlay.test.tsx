import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OverlayTestIds } from "./Overlay.constants";
import { Overlay as BaseOverlay, SideDrawerOverlay } from ".";

describe("Passes", () => {
  describe.each([
    { Overlay: BaseOverlay, name: "Overlay" },
    { Overlay: SideDrawerOverlay, name: "SideDrawerOverlay" },
  ])("$name", ({ Overlay }) => {
    describe("closing", () => {
      it("calls onClose when backdrop is clicked", async () => {
        const onClose = jest.fn();
        const user = userEvent.setup();
        render(<Overlay isOpen={true} onClose={onClose} />);

        const backdrop = await screen.findByTestId(OverlayTestIds.backdrop);
        console.log("hello");
        await waitFor(() => expect(backdrop).toBeVisible());

        await user.click(backdrop);
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe("Doesn't pass", () => {
  describe.each([
    { Overlay: BaseOverlay, name: "Overlay" },
    { Overlay: SideDrawerOverlay, name: "SideDrawerOverlay" },
  ])("$name", ({ Overlay }) => {
    describe("closing", () => {
      it("calls onClose when backdrop is clicked", async () => {
        const onClose = jest.fn();
        const user = userEvent.setup();
        render(<Overlay isOpen={true} onClose={onClose} />);

        const backdrop = await screen.findByTestId(OverlayTestIds.backdrop);
        await waitFor(() => expect(backdrop).toBeVisible());

        await user.click(backdrop);
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });
  });
});
