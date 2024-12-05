import React from "react";

const Footer = () => {

    return (
        <footer className="pt-40">
            <div className="container mx-auto">
                <div>
                    <div className="w-full bg-[#666DFF] p-40 flex justify-around items-center">
                        <h5 className="font-bold text-[40px] text-white w-[50%]">
                            Subscribe our News Letter
                            to get Latest Updates.
                        </h5>
                        <input type="text" className="p-7 w-[40%] h-[70px] text-[25px]" placeholder="example@example.com" />
                    </div>
                    <div className="flex justify-between items-center py-20 h-[500px]">
                        <div className="flex flex-col justify-between h-full">
                            <h3 className="font-bold text-[48px] w-[460px]">
                                Let's make
                                something special
                            </h3>
                            <b>
                                Let's talk! 🤙
                            </b>
                            <p className="text-[18px] font-semibold">
                                020 7993 2905
                            </p>
                            <p className="text-[18px] font-semibold">
                                hi@finsweet.com
                            </p>
                            <p className="text-[16px] w-[210px]">
                                DLF Cybercity, Bhubaneswar,
                                India, &52050
                            </p>
                        </div>
                        <div>
                            <ul className="flex gap-20">
                                <li>
                                    <ul className="flex
                                    flex-col gap-5">
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Home
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Service
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Resourses
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Service
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Technical support
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="flex
                                    flex-col gap-5">
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            About Us
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Company
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Testing
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Testimonial
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Development
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Privacy Policy
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Career
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="flex
                                    flex-col gap-5">
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            AWS/Azure
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Terms of use
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            News
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Consulting
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Blog
                                        </li>
                                        <li className="text-[#232536] text-[16px] font-bold hover:cursor-pointer hover:underline">
                                            Information Technology
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#FFE6D2] py-10">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-10 items-center">
                            <img src="#" alt="{Finsweet" className="text-[30px] text-black" />
                            <b className="text-[16px] font-medium">
                                ©2021 Finsweet
                            </b>
                        </div>
                        <div className="flex gap-7">
                            <a className="text-[30px] font-black" href="#">F</a>
                            <a className="text-[30px] font-black" href="#">X</a>
                            <a className="text-[30px] font-black" href="#">I</a>
                            <a className="text-[30px] font-black" href="#">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer