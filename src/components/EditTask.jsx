export default function EditTask(){
    return(
        <div className="flex flex-col basis-2/3">
        <div className="bg-[#3556AB] p-10 flex items-center shadow-custom justify-center text-white">
          <div className="m-2">
            Edit Task
          </div>
          
        </div>
        <div className="flex flex-col p-10 justify-between h-full">
          <div>
            Task Name
            <div className="border-2 border-[#CBCBCB] rounded-md my-2">
              <input
                className="border-none p-2 w-full"
                value="Training at the Gym"
              />
            </div>
          </div>
          

          <div className="flex">
            <button 
              className="border-[#720D0D] border-2 bg-[#AB3535] p-2 mr-5 basis-1/4 rounded-md text-white font-[400]">
                Delete
            </button>
            <button 
              className="border-[#0D2972] border-2 bg-[#3556AB] p-2  basis-3/4 rounded-md text-white font-[400]">
                Save
            </button>
          </div>
          
        </div>
      </div>
    );
}