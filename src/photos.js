import React from "react";





function Photo () {
    return (
        <>
        <div className = "photo-header">
        <img src="hannie.jpg" className="hannie" alt="Portrait of Hannie" />
        <img src="cheoli.jpg" className="cheoli" alt="Cheoli" />
           </div>

         <div className ="header2"> {/*2nd header for mingyu and wonwoo*/ }
        <img src="mingyu.jpg" className ="mingyu" alt ="Mingyu"/>
        <img src = "wonwoo.jpg" className="wonwoo" alt="Wonwoo"/>
        </div>
        <div className = "header3" >
            <img src="josh.jpg" className="josh" alt="Josh"/>
            <img src="woozi.jpg" className="woozi" alt="Woozi"/>
        </div>
        <div className = "header4">
           <img src ="bonon.jpg" className="bonon" alt="Bonono"/>
           <img src="boo.jpg" className="boo" alt="Boo"/>
         </div>
         <div className = "header5">
            <img src ="jun.jpg" className="jun" alt="Jun"/>
          </div>
       </>
    );
}

export default Photo;