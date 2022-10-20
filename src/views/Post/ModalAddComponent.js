import 'tw-elements';
import React, { useState } from "react";
import { createPost } from "../../services/PostService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from '../../components/LoadingComponent';

const ModalAddComponent = () => {
    const initialState = {
        titlePost: "",
        contentPost: "",
        showModal: false,
        attachFile: {},
        showLoading: false,
        inValids: []
    };

    const [
        { showModal, titlePost, contentPost, attachFile, showLoading, inValids },
        setState
    ] = useState(initialState);

    const handleValid = () => {
        let errors = [];
        let isValid = true;
        if (!titlePost) {
            isValid = false;
            errors['titlePost'] = "Tiêu đề bài viết không được để trống";
        }
        if (!contentPost) {
            isValid = false;
            errors['contentPost'] = "Nội dung bài viết không được để trống";
        }
        if (!isValid) {
            setState((prevState) => ({
                ...prevState,
                inValids: errors,
            }));
        }
        return isValid;
    }

    const addPost = async () => {
        if (handleValid() === false) {
            return;
        }
        let data = {
            'title': titlePost,
            'content': contentPost,
            'attachFile': attachFile
        };
        handleShowLoading(true);
        let res = await createPost(data);
        if (res.data.code === 'VNS001') {
            toast.success(res.data.message);
            handleShowLoading(false);
            clickShowModal(false);
            setState(initialState);
        } else {
            handleShowLoading(false);
            toast.error(res.data.message);
        }
    }

    const clickShowModal = (flag) => {
        setState((prevState) => ({
            ...prevState,
            showModal: flag,
        }));
    }
    const handleShowLoading = (flag) => {
        setState((prevState) => ({
            ...prevState,
            showLoading: flag,
        }));
    }
    const handleSetTitlePost = (value) => {
        setState((prevState) => ({
            ...prevState,
            titlePost: value,
        }));
    }
    const handleSetContentPost = (value) => {
        setState((prevState) => ({
            ...prevState,
            contentPost: value,
        }));
    }

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        const fileName = file.name
        let attachFile = { fileContent: base64, fileName: fileName };
        setState((prevState) => ({
            ...prevState,
            attachFile: attachFile,
        }));
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

    return (
        <>

            <ToastContainer />

            <div>
                {showLoading ? (<LoadingComponent />) : null}
                <button
                    className="bg-gray-300 text-black active:bg-blue-500 
      font-bold px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2"
                    type="button"
                    onClick={() => clickShowModal(true)}
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
                                        <input value={titlePost} onChange={(event) => handleSetTitlePost(event.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        <span className="text-red-600">{inValids["titlePost"]}</span>

                                        <label className="block text-black text-sm font-bold mb-1">
                                            Nội dung
                                        </label>
                                        <textarea value={contentPost} onChange={(event) => handleSetContentPost(event.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        <span className="text-red-600">{inValids["contentPost"]}</span>

                                        <label className="block text-black text-sm font-bold mb-1">
                                            Chọn ảnh
                                        </label>
                                        <input onChange={(event) => handleFileRead(event)}
                                            accept="image/*"
                                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => { clickShowModal(false); handleShowLoading(false); setState(initialState) }}
                                    >
                                        Đóng
                                    </button>
                                    <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={(event) => { addPost() }}
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