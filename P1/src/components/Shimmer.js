const Shimmer = () => {
    return (
        <div className="flex flex-wrap">
            {Array(10).fill("").map((e,index) => <div key={index} className="bg-gray-100 m-5 h-40 w-40"></div>
            )}
       
        
       
      </div>
    )
}
export default Shimmer;