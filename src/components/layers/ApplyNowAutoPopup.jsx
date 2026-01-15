"use client";

import { useEffect, useRef, useState } from "react";
import ApplyNowForm from "./ApplyNowForm";
import { APPLY_NOW_OPEN_EVENT } from "@/lib/apply-now";

const DEFAULT_INITIAL_DELAY_MS = 10_000;
const STORAGE_POPUP_SHOWN_KEY = "dv_apply_now_popup_shown";

const hasPopupBeenShown = () => {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_POPUP_SHOWN_KEY) === "true";
  } catch {
    return false;
  }
};

const markPopupAsShown = () => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_POPUP_SHOWN_KEY, "true");
  } catch {
    // ignore
  }
};

export default function ApplyNowAutoPopup({
  initialDelayMs = DEFAULT_INITIAL_DELAY_MS,
}) {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleAutoOpen = () => {
    // Don't show if popup has already been shown before
    if (hasPopupBeenShown()) {
      return;
    }

    clearTimer();
    timerRef.current = setTimeout(() => {
      setShow(true);
    }, initialDelayMs);
  };

  useEffect(() => {
    if (show) return;
    scheduleAutoOpen();
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, initialDelayMs]);

  useEffect(() => {
    const onOpen = () => {
      // Only open if not shown before
      if (!hasPopupBeenShown()) {
        clearTimer();
        setShow(true);
      }
    };
    window.addEventListener(APPLY_NOW_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(APPLY_NOW_OPEN_EVENT, onOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setShow(false);
    // Mark popup as shown so it never appears again
    markPopupAsShown();
  };

  return <ApplyNowForm show={show} onClose={handleClose} />;
}
