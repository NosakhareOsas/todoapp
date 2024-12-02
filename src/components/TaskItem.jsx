export default function TaskItem({task}){
    return (
        <div className="flex justify-between p-2 border-2 m-2 shadow-lg">
            <label className="inline-flex items-center"> 
                <input type="checkbox" className="text-[#399649]" name="option" value="1" /> 
                <span class="ml-2 ">{task}</span> 
            </label>
            <button className="border-2 border-[#071d55] text-[#071d55] px-2 py-1">Edit</button>
        </div>
    );
}