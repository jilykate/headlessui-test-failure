import { PropsWithChildren } from "react";
import { Dialog } from "@headlessui/react";
import { OverlayProps } from "../Overlay.types";
import { OverlayBackdrop } from "./Backdrop";

export function OverlayDialog({
  children,
  isOpen,
  onClose,
}: PropsWithChildren<OverlayProps>) {
  return (
    <Dialog open={isOpen} onClose={onClose || (() => undefined)}>
      <OverlayBackdrop />
      {children}
    </Dialog>
  );
}
