
// import React from 'react'
// import firebase from './firebase.js'

// const AuthPage = () => {
//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({
//       [name]: value
//     })
//   }
//   configureCaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         this.onSignInSubmit();
//         console.log("Recaptca varified")
//       },
//       defaultCountry: "IN"
//     });
//   }

//   onSignInSubmit = (e) => {
//     e.preventDefault()
//     this.configureCaptcha()
//     const phoneNumber = "+91" + this.state.mobile
//     console.log(phoneNumber)
//     const appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         console.log("OTP has been sent")
//         // ...
//       }).catch((error) => {
//         // Error; SMS not sent
//         // ...
//         console.log("SMS not sent")
//       });
//   }
//   onSubmitOTP = (e) => {
//     e.preventDefault()
//     const code = this.state.otp
//     console.log(code)
//     window.confirmationResult.confirm(code).then((result) => {
//       // User signed in successfully.
//       const user = result.user;
//       console.log(JSON.stringify(user))
//       alert("User is verified")
//       // ...
//     }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });
//   }
  
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.onSignInSubmit}>
//           <div id="sign-in-button"></div>
//           <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange} />
//           <button type="submit">Submit</button>
//         </form>

//         <h2>Enter OTP</h2>
//         <form onSubmit={this.onSubmitOTP}>
//           <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange} />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
  
// }
// export default AuthPage












const AuthPage = () => {
  return (
    <div className='w-1/2 h-[60%] z-30 fixed bg-violet-800 grid grid-rows-4 grid-cols-6 p-4  top-1/4 left-1/4  rounded-lg shadow-lg'>
      <div className='row-span-1 col-span-4 bg-amber-300'>LOGO</div>
      <div className='row-span-1 col-span-4 bg-amber-300'>TITLE</div>
      <div className='row-span-1 col-span-4 col-start-1 bg-amber-300 grid grid-rows-2 '>
        <div className='row-span-1 mr-10 ml-10 '><input type="phone" placeholder="Enter Your Phone Number" className='bg-white h-3/4 w-full grid justify-center rounded-3xl '></input></div>
        <div className='row-span-1 bg-amber-600 rounded-4xl ml-10 mr-10 grid justify-center items-center text-3xl'>Continue</div>
      </div>
      <div className='row-span-1 col-span-4 bg-amber-300'>Policy</div>
      <div className='row-start-1 row-span-4 col-start-5 col-span-2 bg-amber-400'>right side img</div>
    </div>
  )
}

export default AuthPage