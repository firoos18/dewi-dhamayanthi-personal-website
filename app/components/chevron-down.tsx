interface CustomChevronDownProps {
  className?: string;
}

const CustomChevronDown = ({ className }: CustomChevronDownProps) => {
  return (
    <div className="rounded-full w-8 h-8 bg-primary items-center justify-center flex">
      <img
        src="/chevron-down.svg"
        alt="chevron down icon"
        className={`${className} custom-chevrown`}
      />
    </div>
  );
};

export default CustomChevronDown;
