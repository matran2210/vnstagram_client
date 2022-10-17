import React from "react";
import ModalAddComponent from "../Post/ModalAddComponent";
class HomeComponent extends React.Component {
    render() {
        return (
            <>
            <div className="grid grid-cols-8 gap-3">
                <div className="col-span-6 border border-indigo-600">
                    <ModalAddComponent/>
                </div>
                <div className="col-span-2 border border-indigo-600">
                    Danh sách bạn bè

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