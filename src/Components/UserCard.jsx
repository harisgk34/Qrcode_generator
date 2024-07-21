function User(props) {


    // const randomProfile = () => {
    //     return `https://picsum.photos/seed/${Math.random()}/200/200`;
    //   };


    return(
        <div className=" shadow-2x m-5 p-5 relative bg-gray-700 text-white flex flex-col items-center w-fit">
         <span className="p-1 absolute left-6 bg-green-500 text-black text-sm font-medium  border-solid to-black rounded-md ">{props.online}</span>
         <img src={props.profile} className=" w-28 p-1  h-29 border-2 border-white border-solid rounded-full " alt="user"></img>
         <h3 className=" text-2xl bottom-2 m-2" >{props.name}</h3>
         <h3 className="  text-1xl mt-3 ">{props.city}</h3>
         <p className="  mt-3 font-medium text-gray-400">{props.work}</p>
         
        <div className="flex justify-center w-full">
            <button className="shadow-md px-6 ml-0 p-2 bg-blue-500 m-3 border-2 border-white border-solid rounded-md">Message</button>
            <button className="px-7 ml-0 p-2 bg-blue-500 m-3 border-2 border-white border-solid rounded-md" >Follow</button>
            </div>

            <div className=" m-0 p-0" >
                <h6><b>Skill </b></h6>
                <ul className="gap-1 m-1 mt-3">
                    <li>UI/UX</li>
                    <li>Front End Development</li>
                    <br />
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li><br />
                    <li>Express.js</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    )
    }



export const UserCard = (props) => {
  return (
    <>
    <div className="grid " style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }} > 

   
     <User name={"Katrina kaif"} profile={"./public/image/Capturekat.PNG"} city={"Mumbai"} work={"Actor"} online={"ONLINE"} />
     <User name={"Kanmani"}  profile={"./public/image/CaptureNayan.PNG"} city={"Chennai"} work={"Teacher"} online={"ONLINE"}/>
     <User name={"Rambo Rox"}  profile={"./public/image/sethupathy.jpg"} city={"Chennai"} work={"Unlucky"} online={"Typing...."} />
     <User name={"KathiJa"} profile={"./public/image/samantha.jpg"} city={"Coimbatore"} work={"UX/UI designer"} online={"ONLINE"}/>
     </div>
     </>
  )
}
// https://github.com/harisgk34/20-days-code-practice.git