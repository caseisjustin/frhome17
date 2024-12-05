import React from "react";

const SecSol = () => {
    const cardDetail = [
        {
            title: "Technical support",
            desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service"
        },
        {
            title: "Testing Management",
            desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service"
        },
        {
            title: "Development",
            desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service"
        }
    ]

    return (
        <section className="w-full bg-[#FFE6D2] py-40">
            <div className="container mx-auto">
                <div>
                    <div>
                        <div className="container mx-auto">
                            <div className="py-20 text-black">
                                <div className="flex justify-between items-center">
                                    <div className="w-[50%] flex flex-col gap-10 items-start">
                                        <h1 className="font-semibold text-[56px]">
                                        We build software solutions that solve client's business challenges
                                        </h1>
                                        <button className="bg-[#444CFC] py-[20px] px-[30px] text-white">
                                            Start a Project --
                                        </button>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-10">
                        {
                            cardDetail.map(
                                card => 
                                    <div className="flex flex-col gap-6 p-10 bg-white h-[350px] justify-center hover:shadow-xl hover:cursor-pointer">
                                        <h4 className="text-[16px] font-semibold">
                                            {card.title}
                                        </h4>
                                        <p className="text-[16px] text-[#5D5F6D]">
                                            {card.desc}
                                        </p>
                                        <a href="#" className="text-[#444CFC]">Read more --</a>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecSol