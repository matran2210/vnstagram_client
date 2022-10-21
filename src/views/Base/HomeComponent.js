import React from "react";
import ModalAddComponent from "../Post/ModalAddComponent";
import MenuActionComponent from "../../components/MenuActionComponent";
import Config from "../../configs/config.json";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <>
                <div className="grid grid-cols-8 gap-3">
                    <div className="col-span-2 border-r-2 border-gray-300 h-64 ml-2">
                        Tiện ích
                    </div>
                    <div className="col-span-4 border-r-2 border-gray-300 h-64 ml-2">
                        <ModalAddComponent />
                        <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-11/12 mt-6 ml-2">

                            <div className="flex justify-between">
                                <div className="user_post flex mb-2">
                                    <img src={Config['default_img']} className="flex-initial bg-white rounded-full w-10 h-10" alt="avatar" />
                                    <span className="hover:text-gray-500 text-gray-600 flex-initial mt-2 ml-2 font-bold"><a href="/">Nguyễn Khánh Ly</a></span>
                                </div>

                                <div className="menuAction mt-1  hover:text-gray-600">
                                    <MenuActionComponent/>            


                                </div>
                            </div>

                            <div className="title_post mb-2 border-x-2 border-blue-400 bg-white rounded-md text-gray-700 px-2 text-lg italic">
                                Hôm nay trời đẹp quá
                            </div>

                            <div className="content_post   bg-white rounded-md text-gray-700 px-2 text-lg italic">
                                Single Sign-On, đúng như tên gọi, là cơ chế cho phép người dùng có thể truy cập nhiều trang web, ứng dụng mà chỉ cần đăng nhập một lần. Một khi đã được định danh ở một trang website A, thì cũng sẽ được định danh tương tự ở website B mà không cần lặp lại thao tác đăng nhập
                            </div>

                            <div className="actionGroup mt-1">
                                <button className="inline-flex items-center hover:text-gray-700 bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded">
                                    <i className="fa fa-thumbs-up mr-1" aria-hidden="true"></i>
                                    <span>Thích</span>
                                </button>

                                <button className="inline-flex items-center hover:text-gray-700 bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded">
                                    <i className="fa fa-comment mr-1" aria-hidden="true"></i>
                                    <span>Bình luận</span>
                                </button>
                            </div>




                        </div>
                    </div>
                    <div className="col-span-2 text-center">
                        <h1 className="font-bold text-blue-500">Danh sách bạn bè</h1>
                        <br></br>
                        <div className="divide-y divide-slate-200">
                            <div className="hover:text-gray-400">
                                <a href="/">Đoàn Quang Cường</a>
                                <span className="text-green-400"> (Online)</span>
                            </div>
                            <div className="hover:text-gray-400">
                                <a href="/">Nguyễn Văn Hoàng</a>
                                <span className="text-red-400"> (Offline)</span>
                            </div>
                            <div className="hover:text-gray-400">
                                <a href="/">Nguyễn Khánh Ly</a>
                                <span className="text-green-400"> (Online)</span>
                            </div>
                        </div>

                    </div>
                </div>








            </>

        )
    }
}



export default HomeComponent;

//note*
//grid tối đa 12 cột
// grid-cols-2 chia màn hình làm 2 cột,  gap-1 khoảng cách giữa 2 cột là 1
// hover:grid-cols-6 là khi di chuột vào là nó tự nhiên lại chia thành 6 cột
// md:grid-cols-6 dùng 6 cột khi ở kích thước màn md
//group-hover để hiện menu dropdown, phải cấu hình trong taiwind.config.js