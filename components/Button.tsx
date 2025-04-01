type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: "btn_orange";
};

const Button = ({ type, title, variant }: ButtonProps) => {
  const buttonStyles =
    variant === "btn_orange" ? "bg-[#FF6400] text-white" : "";

  return (
    <button type={type} className={`px-6 py-2 rounded-lg ${buttonStyles}`}>
      {title}
    </button>
  );
};

export default Button;
