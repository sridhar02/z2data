"use client";
import classNames from "classnames";

type OwnProps = {
  label?: string;
  icon?: string;
  type?: string;
  children?: React.ReactNode;
  fill?: boolean;
  className?: string;
  isDefault?: boolean;
};

export default function Button(props: OwnProps) {
  const { children, fill = false, className, isDefault = true } = props;

  return (
    <button
      className={classNames(
        {
          "bg-[#2a384d] text-white": fill,
        },
        {
          "px-6 py-2 rounded-md text-sm border-2 border-gray-300": isDefault,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
