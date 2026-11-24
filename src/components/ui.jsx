import React, { useState } from "react";
import { X } from "lucide-react";

/* --- Composants UI locaux legers (sans dependance shadcn) --- */

export function Button({ className = "", asChild, children, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${base} ${className}`,
    });
  }
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Badge({ className = "", children, ...props }) {
  return (
    <span
      className={`label-caps inline-flex items-center px-2.5 py-1 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`flex h-11 w-full border border-zinc-300 bg-white px-3 py-2 text-sm text-ink placeholder:text-zinc-400 focus-visible:outline-none focus-visible:border-ink transition-colors duration-300 ${className}`}
      {...props}
    />
  );
}

export function Select({ className = "", children, ...props }) {
  return (
    <select
      className={`h-10 border border-zinc-300 bg-white px-3 text-[11px] uppercase tracking-[0.14em] text-ink focus-visible:outline-none focus-visible:border-ink transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SectionHeading({ kicker, title, action }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
      <div>
        {kicker && <p className="label-caps text-zinc-400">{kicker}</p>}
        <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

const SheetCtx = React.createContext(null);

export function Sheet({ children, open: controlledOpen, setOpen: controlledSetOpen }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = controlledSetOpen ?? setInternalOpen;
  return <SheetCtx.Provider value={{ open, setOpen }}>{children}</SheetCtx.Provider>;
}

export function SheetTrigger({ asChild, children }) {
  const { setOpen } = React.useContext(SheetCtx);
  return React.cloneElement(React.Children.only(children), {
    onClick: (e) => {
      children.props.onClick && children.props.onClick(e);
      setOpen(true);
    },
  });
}

export function SheetHeader({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SheetTitle({ className = "", children }) {
  return <h2 className={className}>{children}</h2>;
}

export function SheetContent({ className = "", children }) {
  const { open, setOpen } = React.useContext(SheetCtx);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90]">
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full sm:max-w-md bg-paper shadow-2xl flex flex-col animated-drawer ${className}`}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Fermer"
          className="absolute top-5 right-5 z-10 text-zinc-400 hover:text-accent transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
