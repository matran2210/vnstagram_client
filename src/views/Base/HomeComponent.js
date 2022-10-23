import React from "react";
import ModalAddComponent from "../Post/ModalAddComponent";
import MenuActionComponent from "../../components/MenuActionComponent";
import Config from "../../configs/config.json";
import ListFriendComponent from "./ListFriendComponent";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'showModal' : false
        }
    }
    setShowModal = (flag) => {
        this.setState({
            showModal: flag
        })
    }
    render() {
        return (
            <>
                {this.state.showModal &&
                    <ModalAddComponent setShowModal={this.setShowModal} />
                }
                <div className="grid grid-cols-8 gap-3">
                    <div className="col-span-2 border-r-2 border-gray-300 h-64 ml-2">
                        Tiện ích
                    </div>
                    <div className="col-span-4 border-r-2 border-gray-300 h-64 ml-2">
                        <button
                            className="bg-gray-300 text-black active:bg-blue-500 font-bold px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2"
                            type="button"
                            onClick={() => this.setShowModal(true)}
                        >
                            Viết bài
                        </button>
                        {this.props.listPost &&
                            this.props.listPost.map((post) => (
                                <div key={post.id} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-11/12 mt-6 ml-2">
                                    <div className="flex justify-between">
                                        <div className="user_post flex mb-2">
                                            <img src={Config['default_img']} className="flex-initial bg-white rounded-full w-10 h-10" alt="avatar" />
                                            <span className="hover:text-gray-500 text-gray-600 flex-initial mt-2 ml-2 font-bold"><a href="/">{post.full_name}</a></span>
                                        </div>

                                        <div className="menuAction mt-1  hover:text-gray-600">
                                            <MenuActionComponent postId = {post.id} />
                                        </div>
                                    </div>

                                    <div className="title_post mb-2 border-x-2 border-blue-400 bg-white rounded-md text-gray-700 px-2 text-lg italic">
                                        {post.title}
                                    </div>

                                    <div className="content_post   bg-white rounded-md text-gray-700 px-2 text-lg italic">
                                        {post.content}
                                    </div>

                                    <div className="image_post px-2 mt-2">


                                        {post.file_content &&
                                            <img className="max-width: 100% max-height: 100%" src={"data:image/png;base64, " + post.file_content} alt="image_post" />
                                        }
                                    </div>

                                    <div className="actionGroup mt-1 border-t-2 border-gray-300">
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
                            ))

                        }
                    </div>
                        <ListFriendComponent/>
                </div>
            </>
        )
    }
}



export default HomeComponent;

// note *
//     grid tối đa 12 cột
// grid - cols - 2 chia màn hình làm 2 cột, gap - 1 khoảng cách giữa 2 cột là 1
// hover: grid - cols - 6 là khi di chuột vào là nó tự nhiên lại chia thành 6 cột
// md: grid - cols - 6 dùng 6 cột khi ở kích thước màn md
// group - hover để hiện menu dropdown, phải cấu hình trong taiwind.config.js