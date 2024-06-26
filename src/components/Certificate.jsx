// import "./certificate.css"
// import certificate from "../assets/cer.png"
// import sign from "../assets/sign.png"
// import { useState, useCallback, useRef } from "react"
// import { toPng } from 'html-to-image';

// import { format } from "date-fns"

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }
// function Certificate() {
//   const ref = useRef(null)
//   const [title, setTitle] = useState("")
//   const [firstName, setFirstName] = useState("")
//   const [middleName, setMiddleName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const currentDate = new Date()
//   const formattedDate = format(currentDate, "dd/MM/yyyy")



//   const onButtonClick = useCallback(() => {
//     if (firstName === "" || lastName === "") {
//       alert("Please fill out the required fields (First Name and Last Name) before downloading.");
//       return;
//     }


//     if (ref.current === null) {
//       return
//     }

//     toPng(ref.current, { cacheBust: true, })
//       .then((dataUrl) => {
//         const link = document.createElement('a')
//         link.download = 'msmedost_certificate.png'
//         link.href = dataUrl
//         link.click()
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [ref])



//   const handleTitle = (e) =>{
//     setTitle(e.target.value)
//   }


//   return (
//     <>
//     <div className=" main">
//       <div className="inputs">
//         <div className="inputdivs">
//           <label htmlFor="">Title</label>
//               <select name="" id="" onChange={handleTitle}>
//             <option value="">Don't want to mention</option>
//             <option value="Mr.">Mr.</option>
//             <option value="Ms.">Ms.</option>
//             <option value="Mrs.">Mrs.</option>
//           </select>
//         </div>
//         <div className="inputdivs">
//           <label htmlFor="fname">First name</label>
//           <input type="text" name="" id="fname" onChange={(e)=>setFirstName(capitalizeFirstLetter(e.target.value))} required/>
//         </div>
//         <div className="inputdivs">
//           <label htmlFor="mname">Middle name</label>
//           <input type="text" name="" id="mname" onChange={(e)=>setMiddleName(capitalizeFirstLetter(e.target.value))}/>
//         </div>
//         <div className="inputdivs">
//           <label htmlFor="lname">Last name</label>
//           <input type="text" name="" id="lname" onChange={(e)=>setLastName(capitalizeFirstLetter(e.target.value))}/>
//         </div>
//       </div>

//           <div className="container" ref={ref}>
//           <div className=" con2">
//             <img src={certificate} alt="" />
//             <div className="content">
//               <h1>{title && title + " "}{firstName}{middleName && " "+middleName }{" "}{lastName}</h1>
//               {/* <h1>{firstName}{`${middleName?" " + middleName:""}`}{" "}{lastName}</h1> */}
//               <img src={sign} alt="" />
//               <p>{formattedDate}</p>
//             </div>
//           </div>
//         </div>
        
//     </div>
//         <button className="downloadbtn" onClick={onButtonClick}>Generate & Download Certificate</button>
//     </>
//   )
// }
// export default Certificate

// import "./certificate.css";
// import certificate from "../assets/cer.png";
// import sign from "../assets/sign.png";
// import { useState, useCallback, useRef } from "react";
// import { toPng } from "html-to-image";
// import { format } from "date-fns";

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// function Certificate() {
//   const ref = useRef(null);
//   const [title, setTitle] = useState("First Name");
//   const [firstName, setFirstName] = useState("");
//   const [middleName, setMiddleName] = useState("Last Name");
//   const [lastName, setLastName] = useState("");
//   const [certificateVisible, setCertificateVisible] = useState(false);
//   const [formvisible, setFormvisible] = useState(true)

//   const currentDate = new Date();
//   const formattedDate = format(currentDate, "dd/MM/yyyy");

//   const handleTitle = (e) => {
//     setTitle(e.target.value);
//   };

//   const generateCertificate = useCallback(() => {
//     setCertificateVisible(true); // Show the certificate for rendering

//     // Delay to ensure state update before capturing image
//     setTimeout(() => {
//       if (ref.current === null) {
//         return;
//       }

//       toPng(ref.current, { cacheBust: true })
//         .then((dataUrl) => {
//           const link = document.createElement("a");
//           link.download = "msmedost_certificate.png";
//           link.href = dataUrl;
//           link.click();
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//         // .finally(() => {
//         //   setCertificateVisible(false); // Hide the certificate after download is initiated
//         // });
//     }, 100); // Adjust delay as needed to ensure rendering before capture
//   }, []);

//   return (

      
//       <div className=" main">
//       <div className="inputs">
//         <div className="inputdivs">
//           <label htmlFor="">Title</label>
//               <select name="" id="" onChange={handleTitle}>
//             <option value="">Don't want to mention</option>
//             <option value="Mr.">Mr.</option>
//             <option value="Ms.">Ms.</option>
//             <option value="Mrs.">Mrs.</option>
//           </select>
//         </div>
//         <div className="inputdivs">
//           <label htmlFor="fname">First name</label>
//           <input type="text" name="" id="fname" onChange={(e)=>setFirstName(capitalizeFirstLetter(e.target.value))} required/>
//         </div>
//         <div className="inputdivs">
//           <label htmlFor="mname">Middle name</label>
//           <input type="text" name="" id="mname" onChange={(e)=>setMiddleName(capitalizeFirstLetter(e.target.value))}/>
//         </div>
//         <div className="inputdivs">
//           <label htmlFor="lname">Last name</label>
//           <input type="text" name="" id="lname" onChange={(e)=>setLastName(capitalizeFirstLetter(e.target.value))}/>
//         </div>
//       </div>




//       {certificateVisible && (
//         <div className="container" ref={ref}>
//           <img src={certificate} alt="" />
//           <div className="content">
//             <h1>
//               {title && title + " "}
//               {firstName}
//               {middleName && " " + middleName} {lastName}
//             </h1>
//             <img src={sign} alt="" />
//             <p>{formattedDate}</p>
//           </div>
//         </div>
//       )}
//        <button className="downloadbtn" onClick={generateCertificate}>Generate & Download Certificate</button>
//     </div>
//   );
// }

// export default Certificate;


import "./certificate.css";
import certificate from "../assets/cer.png";
import sign from "../assets/sign.png";
import { useState, useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { format } from "date-fns";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function Certificate() {
  const ref = useRef(null);
  const [title, setTitle] = useState("Mr.");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [certificateVisible, setCertificateVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd/MM/yyyy");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const generateCertificate = useCallback(() => {
    if (firstName.trim() === "" || lastName.trim() === "") {
      alert("Please enter both first name and last name.");
      return;
    }

    setCertificateVisible(true); // Show the certificate for rendering
    setFormVisible(false); // Hide the form and button

    // Delay to ensure state update before capturing image
    setTimeout(() => {
      if (ref.current === null) {
        return;
      }

      toPng(ref.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "msmedost_certificate.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100); // Adjust delay as needed to ensure rendering before capture
  }, [firstName, lastName]);

  return (
    <div className="main">
      {formVisible && (
        <div className="inputs">
          <div className="inputdivs">
            <label htmlFor="">Title</label>
            <select name="" id="" onChange={handleTitle} value={title}>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
          </div>
          <div className="inputdivs">
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              name=""
              id="fname"
              onChange={(e) =>
                setFirstName(capitalizeFirstLetter(e.target.value))
              }
              required
            />
          </div>
          <div className="inputdivs">
            <label htmlFor="mname">Middle name</label>
            <input
            placeholder="Optional"
              type="text"
              name=""
              id="mname"
              onChange={(e) =>
                setMiddleName(capitalizeFirstLetter(e.target.value))
              }
            />
          </div>
          <div className="inputdivs">
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              name=""
              id="lname"
              onChange={(e) =>
                setLastName(capitalizeFirstLetter(e.target.value))
              }
              required
            />
          </div>
        </div>
      )}

      {certificateVisible && (
        <div className="container" ref={ref}>
          <img src={certificate} alt="" />
          <div className="content">
            <h1>
              {title} {firstName} {middleName && " " + middleName} {lastName}
            </h1>
            <img src={sign} alt="" />
            <p>{formattedDate}</p>
          </div>
        </div>
      )}

      {formVisible && (
        <button className="downloadbtn" onClick={generateCertificate}>
          Generate & Download Certificate
        </button>
      )}
    </div>
  );
}

export default Certificate;
