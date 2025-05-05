interface CustomChevronDownProps {
  className?: string;
}

const CustomChevronDown = ({ className }: CustomChevronDownProps) => {
  return (
    <div className="rounded-full w-8 h-8 lg:w-12 lg:h-12 bg-primary items-center justify-center flex">
      <img
        src="/chevron-down.svg"
        alt="chevron down icon"
        className={`${className} custom-chevrown lg:w-8 lg:h-8`}
      />
    </div>
  );
};

export default CustomChevronDown;
