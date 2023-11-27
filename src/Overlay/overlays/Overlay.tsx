import { OverlayProps } from "../Overlay.types";
import { OverlayDialog } from "../elements/Dialog";
import { OverlayPanel } from "../elements/Panel";

export function Overlay({ isOpen, onClose, children }: OverlayProps) {
  return (
    <OverlayDialog isOpen={isOpen} onClose={onClose}>
      <OverlayPanel>{children}</OverlayPanel>
    </OverlayDialog>
  );
}
