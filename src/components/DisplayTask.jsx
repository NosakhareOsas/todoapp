import TaskItem from "./TaskItem";

export default function DisplayTask(){
    return(
        <div className="basis-1/3  shadow-custom relative">
            <div className="bg-[#3556AB] p-[27px]  flex items-center shadow-custom justify-center text-white">
            <div className="m-2">
                <img
                src="https://s3-alpha-sig.figma.com/img/8d27/948a/abd4c5ed04277b73d5eed40ffb200444?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l1eW~wjZS2ZidaIi7HD9ISXir8DTGqqTo7JlctRzbNiYevXagybZu~GcbOBLPCQQ~xg0zHDYXMDxdJBo-6B-TObFzRIYof4sixii~5nj32wogVl0wn0WlzIIdR0ax7Grl2-oSlTMwXA9cmz8mvp034cBXMkHY3DvpRlqw0M6-mdWmEV6vO184PdNjJ5HmXDwZWwI80TU~RdlJZuzSDcYIelaEAB6MmmJ1ev98ZV3KRviHqY~ZLPAqF08QFMmoIxOL7JgsDTgpFGfaBwn4GvXq9li04I6mAMknAYTesafQHDvVWXmUWhSd7mKV8MG9CkyJk3DFCUBe-xSlFAdm-gZLg__"
                className="rounded-full h-[50px] w-[50px]"
                alt="profile-pic"
                />
            </div>
            <div className="flex flex-col">
                <span>Hello, Jhon</span>
                <span className="italic text-white">What are your plans for today?</span>
            </div>
            </div> 

            <div className="relative p-2 bg-[#cde53d] border-[#9eb031] border-2 sh">
                <div className="bg-[#071d55] absolute top-0 right-10 p-2 text-[#f2c94c]">
                $1  
                </div>
                <div className="flex items-center">
                <img 
                    src="https://i.fbcd.co/products/original/cb7e51babba3596dbdf8d170e84cc4876369324e4913a61b7e7ba9f964cdb6a4.jpg"
                    className="w-[100px] h-[100px] m-2"
                    alt="trophy"
                />
                <span className="text-[#071755] font-[700]">Go Pro Upgrade Now</span>
                </div>
                
            </div>

            <div className="h-[40vh] overflow-auto">
                <TaskItem/>
            </div>
            <button className="bg-[#123eb1] text-white font-bold text-xl rounded-full w-[50px] h-[50px] absolute bottom-9 right-5 items-center justify-center"> + </button>
      </div>
    );
}