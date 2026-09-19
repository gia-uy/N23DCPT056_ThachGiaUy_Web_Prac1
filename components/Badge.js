export default function Badge({ label, color = "mist" }) {
  const colorStyles = {
    mist: "bg-[#c7d3db] text-[#3e3630] border-[#b5c4cf]",
    stone: "bg-[#a79a8a] text-[#fffaf2] border-[#95897d]",
    cream: "bg-[#fcf7df] text-[#3e3630] border-[#efe7c9]",
    ink: "bg-[#3e3630] text-[#f4efe7] border-[#2c2825]",
  };

  const style = colorStyles[color] || colorStyles.mist;

  return (
    <span className={`${style} text-xs font-semibold px-3 py-1 rounded-full border inline-block`}>
      {label}
    </span>
  );
}
