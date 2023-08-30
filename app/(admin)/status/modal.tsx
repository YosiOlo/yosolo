"use client";

import axios from 'axios';
import { SyntheticEvent, useState } from 'react';

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({
        name: '',
        module: '',
        bgColor: '',
        fontColor: '',
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);

        await axios.post('/api/status', data)
            .then(res => console.log(res.data))
            .catch(error => console.log('error', error.message))
            .finally(() => {
                setIsLoading(false);
                setIsModalOpen(false);
            })
    }

    return (
        <div>
            <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className={'btn bg-[#4e73df] text-white hover:text-[#4e73df] hover:border-[#4e73df] border hover:bg-white hover:border'}
            >
                Tambah Data
            </button>

            <div className={isModalOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">Tambah</h3>
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-control w-full mb-4">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Ketik disini . . ."
                                required
                                name="name"
                                autoComplete="off"
                                value={data.name}
                                onChange={onChangeHandler}
                                className="input input-bordered my-1"
                            />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label>Module</label>
                            <input
                                type="text"
                                placeholder="Ketik disini . . ."
                                required
                                name="module"
                                autoComplete="off"
                                value={data.module}
                                onChange={onChangeHandler}
                                className="input input-bordered my-1"
                            />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label>Background Color</label>
                            <input
                                type="color"
                                required
                                name="bgColor"
                                autoComplete="off"
                                value={data.bgColor}
                                onChange={onChangeHandler}
                                className="my-1"
                            />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label>Font Color</label>
                            <input
                                type="color"
                                required
                                name="fontColor"
                                autoComplete="off"
                                value={data.fontColor}
                                onChange={onChangeHandler}
                                className="my-1"
                            />
                        </div>
                        <div className="modal-action">
                            <button
                                type="button"
                                className="btn"
                                onClick={() => setIsModalOpen(!isModalOpen)}
                            >
                                Tutup
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isLoading ? true : false}
                            >
                                {isLoading ? (
                                    <span className="loading loading-spinner text-white"></span>
                                ) : 'Tambah Data'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal