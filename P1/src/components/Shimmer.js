const Shimmer = () => {
    return (
        <div className="offer-list">
            {Array(10).fill("").map((e,index) => <div key={index} className="simmer-card"></div>
            )}
       
        
       
      </div>
    )
}
export default Shimmer;