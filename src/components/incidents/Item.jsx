// eslint-disable-next-line react/prop-types
const Item = ({ img, text, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-start items-center gap-[7.5px] border border-secondary px-5 py-[22px] rounded-md transition-colors hover:scale-105 ${isSelected ? "bg-primary" : "bg-[#F4F4F5]"}`}>
      <img src={img} alt={text} className="text-white" />
      <p className={`text-sm ${isSelected ? "text-white" : "text-body"}`}>{text}</p>
    </button>
  )
}

export default Item