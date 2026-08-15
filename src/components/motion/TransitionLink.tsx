import { forwardRef, type MouseEvent } from "react";
import { Link, useNavigate, type LinkProps, type To } from "react-router-dom";
import { withViewTransition } from "../../lib/viewTransition";

/** `<Link>` that wraps route changes in a native View Transition. */
export const TransitionLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, onClick, ...props }, ref) => {
    const navigate = useNavigate();

    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
      onClick?.(event);
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      withViewTransition(() => navigate(to as To));
    }

    return <Link ref={ref} to={to} onClick={handleClick} {...props} />;
  },
);
TransitionLink.displayName = "TransitionLink";
