import React, { createContext, useContext, useMemo } from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import type {
  DraggableSyntheticListeners,
  UniqueIdentifier
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./SortableItem.css";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "@emotion/react";

interface Props {
  id: UniqueIdentifier;
  value: string;
}


interface Context {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

const SortableItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() { }
});

export function SortableItem({ children, id }: PropsWithChildren<Props>) {
  const theme = useTheme();
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef
    }),
    [attributes, listeners, setActivatorNodeRef]
  );
  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition
  };

  return (
    <SortableItemContext.Provider value={context}>
      <li className="SortableItem" ref={setNodeRef} style={style}>
        {children}
      </li>
    </SortableItemContext.Provider>
  );
}

export function DragHandle() {
  const { attributes, listeners, ref } = useContext(SortableItemContext);
  const theme = useTheme();
  return (
    <button className="DragHandle" {...attributes} {...listeners} ref={ref}>
      <svg width="24px" height="24px" viewBox="0 0 24 24" /* {theme.palette.text.primary} */ xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 9a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4ZM4 13a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z" ></path></g></svg>    </button>
  );
}
 