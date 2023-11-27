import { ReactNode, forwardRef } from "react";
import { Dialog } from "@headlessui/react";
import { OverlayTestIds } from "../Overlay.constants";

export const OverlayPanel = forwardRef<
  HTMLDivElement | null,
  {
    children: ReactNode;
  }
>(({ children }, ref) => {
  return (
    <Dialog.Panel data-testid={OverlayTestIds.panel} ref={ref}>
      <div>{children}</div>
    </Dialog.Panel>
  );
});
