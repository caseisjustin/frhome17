import React from "react";
import MainSExpImg1 from "../../../../assets/MainExpImgs/Expertise1.png"
import MainSExpImg2 from "../../../../assets/MainExpImgs/Expertise2.png"
import MainSExpImg3 from "../../../../assets/MainExpImgs/Expertise3.png"

const SecExp = () => {

    return (
        <section className="w-full py-40 bg-[#ECF8F9]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="w-1/2 flex flex-col gap-10">
                        <h2 className="font-semibold text-[48px]">
                        We want to get local identification in every corner of the world in this era of global citizenship
                        </h2>
                        <p className="text-[#5D5F6D] text-[16px]">
                        Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. 
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 w-[600px]">
                        <img src={MainSExpImg1} alt="Our exp" />
                        <img src={MainSExpImg2} alt="Our exp" />
                        <img src={MainSExpImg3} alt="Our exp" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecExp