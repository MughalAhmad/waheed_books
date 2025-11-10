const SearchBox = ({placeholderText='search', type='text', readOnly=false}) => {
  return (
    <div className="bg-[#EFF0F3] flex h-10 px-4 gap-3 rounded-lg border border-[#C1C1C1] text-[#1D1419]/50">
      <span className="w-auto border-r border-[#C1C1C1] flex justify-center items-center pr-4 whitespace-nowrap">
        {placeholderText}
      </span>
      <input
        placeholder={placeholderText}
        type={type}
        className="outline-0 w-full min-w-48 placeholder:text-[#1D1419]/50"
        readOnly={!!readOnly}
      />
    </div>
  )
}

export default SearchBox
