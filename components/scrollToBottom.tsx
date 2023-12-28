// ScrollDownButton.tsx
import React, { RefObject } from "react";
import { ScrollDownButtonProps } from "@/types";

// interface ScrollDownButtonProps {
//   targetRef: RefObject<HTMLElement>;
// }

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  targetRef,
  title,
}) => {
  const scrollToContent = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      className="absolute top-[2%] left-[1.6%] rounded-full z-10 bg-blue-50 px-2.5 py-1 font-semibold text-xl "
      onClick={() => scrollToContent()}
    >
      {title}
    </button>
  );
};

export default ScrollDownButton;
