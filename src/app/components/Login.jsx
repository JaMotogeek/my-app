"use client";

import Image from "next/image";

const SignIn = () => {
  return (
    <div className="w-full h-screen relative bg-white overflow-hidden text-left text-sm text-teal font-circular-std">
      {/* Back button */}
{      <Image
        className="absolute top-[61px] left-[24px] w-6 h-6 overflow-hidden object-contain"
        width={24}
        height={24}
        alt="Back"
        src="back-button-svgrepo-com.svg"
      />
}
      {/* Login button */}
      <div className="w-full h-screen relative bg-white overflow-hidden text-center text-teal font-circular-std">
      { <Image
          className="absolute top-[0px] left-[0px] rounded-2xl w-[327px] h-12"
          width={512}
          height={512}
          alt="Login Button Background"
          src="a-cute-computer.svg"
        /> }
        <b className=" top-[16px] text-right leading-[16px] w-full">Log in</b>
      </div>

      {/* Page title */}
      <div className="w-full h-screen relative bg-white overflow-hidden text-left text-sm text-teal font-circular-std">
      {/* <Image
          className="absolute top-[13px] left-[0px] w-14 h-2"
          width={56}
          height={8}
          alt="Underline"
        /> */}
        <div className="absolute top-[0px] left-[24px] text-bold leading-[18px]">
        <h1 className="absolute top-[0px] left-[1px] text-bold leading-[18px]">
          Log in to Chatbox
        </h1>
        </div>
      </div>

      {/* Welcome message */}
      <div className="absolute eading-[20px] text-black-100 text-center inline-block w-full top-[200px]">
Welcome to Lightning Jobs, we will match you up at the speed of Lightning      </div>

      {/* Forgot password link */}
      <div className="absolute top-[758px] left-[129px] tracking-[0.1px] leading-[14px] font-medium">
        Forgot password?
      </div>

      {/* Password field */}
      <div className="absolute eading-[20px] text-black-100 text-left inline-block w-full top-[464px] left-[24px] w-full h-[58px]">
        <a
          className="absolute top-[0px] text-left tracking-[0.1px] w-full leading-[14px] font-medium text-inherit no-underline"
          href="mailto:nazrulmum@uihut.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Password
        </a>
        <div className="absolute top-[57.5px] left-[-0.5px] border-lightblack border-t border-solid box-border w-full h-px" />
        <div className="absolute top-[30px] left-[0px] text-base tracking-[2px] leading-[16px] font-caros text-black-200">
          **********
        </div>
      </div>

      {/* Email field */}
      <div className="absolute top-[376px] left-[24px] w-full h-[58px] text-center">
        <div className="absolute top-[0px] text-left w-full tracking-[0.1px] leading-[14px] font-medium">
          Your email
        </div>
        <div className="absolute top-[57.5px] left-[-0.5px] border-lightblack border-t border-solid box-border w-full h-px" />
        <div className="absolute top-[30px]  text-left leading-[16px] font-caros text-black-200 text-left w-full">
          nazrulmum@uihut.com
        </div>
      </div>

      {/* <Image
        className="absolute top-[502px] left-[25px] w-full h-1.5 hidden"
        width={138}
        height={6}
      /> */}
    </div>
  );
};

export default SignIn;