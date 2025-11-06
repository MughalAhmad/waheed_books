const PageTitle = ({parentText, childText}) => {
  return (
    <div>
        <div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          {parentText}
        </h1>
        <div className="flex">
            <h2 className="text-lg font-medium text-gray-600">{parentText}</h2>
            <img src="/svg/right_vector.svg" alt="breadcrumb arrow" className="inline mx-3"/>
            <h2 className="text-lg font-medium text-gray-600">{childText}</h2>

        </div>
        
        </div>
    </div>
  )
}

export default PageTitle