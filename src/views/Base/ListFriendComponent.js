import React from "react";
import Config from "../../configs/config.json";

const ListFriendComponent = () => {

    //const [listFriend , setListFriend] = useState(null);

    return (
        <>
        
        <div className="col-span-2">
            <h1 className="font-bold">Danh sách bạn bè</h1>
            <div className="divide-y-2 divide-slate-500 bg-gray-200 px-2 py-2 italic">
                <div className="hover:text-gray-400 flex py-2">
                    <img src={Config['default_img']} className="flex-initial bg-white rounded-full w-10 h-10" alt="avatar" />
                    <a className="flex-initial mt-2 ml-2" href="/">Đoàn Quang Cường</a>
                    <span className="text-green-400 flex-initial mt-2 ml-2"> (Online)</span>
                </div>
                <div className="hover:text-gray-400 flex py-2">
                    <img src={Config['default_img']} className="flex-initial bg-white rounded-full w-10 h-10" alt="avatar" />
                    <a className="flex-initial mt-2 ml-2" href="/">Nguyễn Khánh Ly</a>
                    <span className="text-red-600 flex-initial mt-2 ml-2"> (Offline)</span>
                </div>
                <div className="hover:text-gray-400 flex py-2">
                    <img src={Config['default_img']} className="flex-initial bg-white rounded-full w-10 h-10" alt="avatar" />
                    <a className="flex-initial mt-2 ml-2" href="/">Nguyễn Văn Hoàng</a>
                    <span className="text-green-400 flex-initial mt-2 ml-2"> (Online)</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default ListFriendComponent;