import { AuthContext } from "@/context/AuthProvider";
import axios from "axios";
import { useContext, useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddTaskForm = () => {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("To-Do");
    const [dueDate, setDueDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        if (!description) return;

        const newTask = {
            title,
            description,
            dueDate,
            category,
            email: user?.email,
        };

        try {
            axios.post('https://taskify-x-server.vercel.app/tasks', newTask).then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Task added successfully",
                        showClass: {
                            popup: `animate__animated animate__fadeInUp animate__faster`,
                        },
                        hideClass: {
                            popup: `animate__animated animate__fadeOutDown animate__faster`,
                        },
                    }).then(() => {

                        navigate("/tasks");
                    });

                    setTitle("");
                    setDescription("");
                    setCategory("To-Do");
                    setDueDate("");
                }
            });
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="w-11/12 mx-auto md:max-w-xl shadow-lg rounded-lg my-10 dark:bg-gray-800">
                <div className="bg-primary text-white py-6 px-8 text-center rounded-lg rounded-b-none">
                    <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        <BiCalendar /> Add New Task
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 p-6">
                    {/* Title Field */}
                    <div>
                        <label className="block font-medium text-gray-800 dark:text-gray-200">Title</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            placeholder="Enter task title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={50}
                            required
                        />
                        <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">Max 50 characters</p>
                    </div>
                    {/* Description Field */}
                    <div>
                        <label className="block font-medium text-gray-800 dark:text-gray-200">Description</label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            placeholder="Write a brief description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={200}
                        ></textarea>
                        <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">Max 200 characters</p>
                    </div>

                    {/* Category Selection and Due Date */}
                    <div className="flex items-center justify-between gap-4 w-full">
                        {/* Category Selection */}
                        <div className="w-full">
                            <label className="block font-medium text-gray-800 dark:text-gray-200">Category</label>
                            <select
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="To-Do">📌 To-Do</option>
                                <option value="In Progress">🚴‍♂️ In Progress</option>
                                <option value="Done">✅ Done</option>
                            </select>
                        </div>
                        {/* Last Date */}
                        <div className="w-full">
                            <label className="block font-medium text-gray-800 dark:text-gray-200">Task Completion Date</label>
                            <input
                                type="date"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                placeholder="Enter task title..."
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button
                        className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-gray-800 backdrop-blur-md lg:font-medium isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-xl group w-full"
                        type="submit"
                    >
                        Add Task
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 19"
                            className="h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        >
                            <path
                                className="fill-gray-800 group-hover:fill-gray-800"
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            ></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskForm;

