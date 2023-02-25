import { useState } from 'react'
const Section =({title, description , isVisible, setIsVisible}) => {
  // const [isVisible, setIsVisible] =useState(false);
  return (
    <div className="border border-black p-2 m-2">
    <h1 className="font-bold">
      {title}
    </h1>
    {
      isVisible ? 
      <button className='cursor-pointer' onClick={() => {
        setIsVisible(false)
      }}>Hide</button>
      :
      <button className='cursor-pointer' onClick={() => {
        setIsVisible(true)
      }}>Show</button>
    }
   
    
    {isVisible  && <p>{description}</p>}
    </div>
  )
}
 const InstaMart = () => {
  const [visibleSection , setVisibleSection] = useState("about")
return (   <div>
     <h1 className="text-3xl p-2 m-2 font-bold"> Insta Mart</h1>
       <Section title={"About Insta Mart"} description={"This is about section"} isVisible={visibleSection === "about"}
       setIsVisible = {() =>setVisibleSection("about")}
       />
       <Section title={"Team"} description={"Team Insta Mart"} isVisible={visibleSection == "team"}
       setIsVisible = {() =>setVisibleSection("team")}
       />
     </div>
)
 }
export default InstaMart;
