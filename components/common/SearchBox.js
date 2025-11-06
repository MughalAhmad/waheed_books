const SearchBox = ({placeholderText='search'}) => {

  return (
    <div className="bg-[#EFF0F3] flex h-10 px-4 gap-3 rounded-lg border-1 border-[#C1C1C1]">
      <label className="border-r border-[#C1C1C1] text-[#1D1419]/50 flex justify-center items-center pr-4">{placeholderText}</label>
        <input placeholder={placeholderText} className="outline-0 w-full max-w-48"/>
    </div>
  )
}

export default SearchBox