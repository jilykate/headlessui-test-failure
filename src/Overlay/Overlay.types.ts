import { PropsWithChildren } from "react";

export type OverlayProps = PropsWithChildren<{
  /**
   * Controls if the overlay is visible or not. Should be bound to a state variable for reactivity.
   */
  isOpen: boolean;

  /**
   * Function called when the overlay is closed by the user (clicking on backdrop or pressing ESC key).
   */
  onClose?: () => void;
}>;
