import React from 'react'

const Useless = () => {
    let userDetail = JSON.parse(localStorage.getItem("user"));
     const bgimg = userDetail.backgroundImage
     console.log("this is the background image" + userDetail)

    // const base64String = btoa(
    //     String.fromCharCode(...new Uint8Array(bgimg.data.data))
    //   );
  return (
    <div>
        
        {/* <img src={`data:image/png;base64,${base64String}`} width="300" alt="this is the imageeee that back"/> */}
    </div>
  )
}

export default Useless
