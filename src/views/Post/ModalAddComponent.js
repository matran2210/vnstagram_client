import 'tw-elements';
import React, { useState } from "react";
import { createPost } from "../../services/PostService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    titlePost: "",
    contentPost: "",
    showModal: false,
    filePost: ""
};


const addPost = async (titlePost, contentPost, filePost) => {
    //note* file post là 1 Object Promise nên dùng .then để lấy ra dữ liệu
    filePost.then(async meta => {
        let data = {
            'title': titlePost,
            'content': contentPost,
            'fileName': meta['fileName'],
            'fileContent': meta['fileContent']
        };
        console.log(data);
        // let res = await createPost(data);
        // if (res.data.code = 'VNS001') {
        //     toast.success(res.data.message);
        // } else {
        //     toast.error(res.data.message);
        // }
        // console.log();
    });

    // let res = await createPost(data);
}
const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    const fileName = file.name
    return { 'fileContent': base64, 'fileName': fileName };
}

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
}

const ModalAddComponent = () => {
    const [
        { showModal, titlePost, contentPost, filePost },
        setState
    ] = useState(initialState);
    return (
        <>
            <div>
                <button
                    className="bg-gray-300 text-black active:bg-blue-500 
      font-bold px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2"
                    type="button"
                    onClick={() => setState({ showModal: true })}
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


                                        <input value={titlePost} onChange={(event) => setState(prevState => ({ ...prevState, [filePost]: event.target.value }))}
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Nội dung
                                        </label>
                                        <textarea value={contentPost} onChange={(event) => setState(prevState => ({ ...prevState, [filePost]: event.target.value }))}
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Chọn ảnh
                                        </label>
                                        <input onChange={(event) => setState(prevState => ({ ...prevState, [filePost]: handleFileRead(event) }))}
                                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setState(prevState => ({ ...prevState, [showModal]: false }))}
                                    >
                                        Đóng
                                    </button>
                                    <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={function (event) { addPost(titlePost, contentPost, filePost); setState(prevState => ({ ...prevState, [showModal]: false })) }}
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