"use client";

type OwnProps = {
  label?: string;
  icon?: string;
  type?: string;
  children?: React.ReactNode;
  fill?: boolean;
};

export default function Button(props: OwnProps) {
  const { children, fill = false } = props;
  return (
    <button
      className={`${
        fill ? "bg-[#2a384d] text-white" : "bg-white text-[#2a384d]"
      } px-6 py-2 rounded-md text-sm border-2 border-gray-300`}
    >
      {children}
    </button>
  );
}
