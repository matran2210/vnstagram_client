import 'tw-elements';
import React, { useState } from "react";
import {createPost} from "../../services/PostService";


const addPost = async (titlePost,contentPost,filePost) => {
   let data = {
    'title' :  titlePost,
    'content' : contentPost,
    'filePost' : filePost
   };
    let res = await createPost(data);
}



const ModalAddComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const [titlePost, setTitlePost] = useState('');
    const [contentPost, setContentPost] = useState('');
    const [filePost, setFilePost] = useState(null);
    return (
        <>
            <div>
                <button
                    className="bg-gray-300 text-black active:bg-blue-500 
      font-bold px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Viết bài
                </button>
            </div>

            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between py-8 px-48 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Thêm 1 bài viết</h3>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Tiêu đề
                                        </label>
                                        
                                           
                                        <input value ={titlePost} onChange = {(event) => setTitlePost(event.target.value)} 
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Nội dung
                                        </label>
                                        <textarea value ={contentPost} onChange = {(event) => setContentPost(event.target.value)} 
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Chọn ảnh
                                        </label>
                                        <input onChange = {(event) => setFilePost(event.target.files)}
                                         class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Đóng
                                    </button>
                                    <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={function(event){ addPost(titlePost,contentPost,filePost); setShowModal(false)}}
                                    >
                                        Thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default ModalAddComponent;

//note*
//cài: npm i tw-elements , lên trang npm để đọc hướng dẫn setup
//function(event){ addPost(); setShowModal(false)} để gọi 2 hàm trong 1 event