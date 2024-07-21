import { useState } from "react";
// import  axios  from "axios";

const QrCard = () =>{

    const [Img,setImg] = useState("")
    const [Size, setSize] = useState("150")
    const [Data, setData] = useState("")

//    use api https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=tutorjoes.in
async function downloadQr() {
  try {
    const response = await fetch(Img);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading QR code:", error);
  }
}

async function GeneratedQr() {
    try {
      // Construct the QR code URL dynamically based on user input
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${Size}x${Size}&data=${Data}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  }


  return (
    <div className="flex justify-center items-center h-screen bg-slate-600 ">
    <div className=" flex flex-col text-center bg-gray-900 p-3 ">
        <h1 className="font-semibold text-white bg-gray-600 " > QR CODE GENERATOR</h1>
      {Img?(<img src={Img} alt="Im not getting your link" className="w-40 ml-16 mt-5 text-white" />):(<p className="text-white mt-5 animate-bounce text-2xl font-bold">Loading...</p>)}
        <label htmlFor="text" className=" ml-4 m-2 p-2 bg-gray-500" > Enter Your Link or Massege </label>
        <input type="text" onChange={(evt)=>setData(evt.target.value)} value={Data} placeholder="Enter Your Link or massege" className="border-black ml-3 rounded-full border-spacing-1 placeholder-slate-400 m-0 p-2 bg-gray-300" />
        <label htmlFor="text" className="m-4 p-2 bg-gray-500"> Enter your image type (e.g.150)</label>
        <input type="text" value={Size} onChange={(evt)=>setSize(evt.target.value)} placeholder="Enter Your image type" className="border-black ml-4 rounded-full border-spacing-1 placeholder-slate-400 m-0 p-2 bg-gray-300 " />
<div className="flex gap-2 m-4 ">
<button onClick={GeneratedQr} className="bg-blue-500 p-2 m-2 text-white px-6 rounded-md hover:bg-gray-600 ">Generator</button>
<button className="bg-green-500 p-2 m-2 text-white px-6 rounded-md hover:bg-gray-600  " onClick={downloadQr} >Download</button>
</div>
    </div>
    </div>
  )
}

export default QrCard;
