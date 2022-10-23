import React, {useState} from "react";
import { getPostByIdService } from "../services/PostService";
import ModalAddComponent from "../views/Post/ModalAddComponent";
import LoadingComponent from "./LoadingComponent";

const MenuActionComponent = (props) => {

    const [showModal,setShowModal] = useState(false);
    const [postId,setPostId] = useState(null);
    const [titlePost,setTitlePost] = useState('');
    const [contentPost,setContentPost] = useState('');
    const [attachFile,setAttachFile] = useState({});
    const [showLoading,setShowLoading] = useState(false);


    const handleEditPost = async (e) => {
        e.preventDefault();
        setShowLoading(true);
        let res = await getPostByIdService(props.postId);
        if (res.data.code === 'VNS001') {
            setShowLoading(false);
            setPostId(res.data.data.id);
            setTitlePost(res.data.data.title);
            setContentPost(res.data.data.content);
            setAttachFile(res.data.data.post_file);
            setShowModal(true);
        }

    }

    return (
        <>
 
        {showLoading ? (<LoadingComponent />) : null}

        {showModal &&
            <ModalAddComponent 
            titlePost =  {titlePost}
            contentPost =  {contentPost}
            setShowModal = {setShowModal}
            attachFile = {attachFile}
            postId = {postId}
            />
        }
        <div className="group inline-block cursor-pointer border-2 w-5 h-11">
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li className="">
                <a onClick={(event) => handleEditPost(event)}
                 className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/">Sửa bài viết</a>
                <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/">Xóa bài viết</a>
            </li>
        </ul>
    </div>
    </>
    );
}
export default MenuActionComponent;