import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const TasksUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("To-Do");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/task/${id}`)
            .then((result) => {
                const taskData = result.data;
                setTitle(taskData.title || "");
                setDescription(taskData.description || "");
                setCategory(taskData.category || "To-Do");
            })
            .catch((error) => console.error("Error fetching task:", error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateData = {
            title,
            description,
            category,
        };

        axios
            .put(`http://localhost:5000/tasks/${id}`, updateData)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data Update Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/tasks");
            })
            .catch((error) => console.error("Error updating task:", error));
    };

    return (
        <div className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="w-11/12 mx-auto md:max-w-xl shadow-lg rounded-lg my-10 bg-white dark:bg-gray-800">
                <div className="bg-primary text-white py-6 px-8 text-center rounded-lg rounded-b-none">
                    <h2 className="text-2xl font-semibold flex items-center justify-center gap-2 text-gray-800 dark:text-gray-100">
                        📝 Update Task
                    </h2>
                </div>

                <form className="space-y-4 p-6" onSubmit={handleSubmit}>
                    {/* Title Field */}
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-300">Title</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            placeholder="Enter task title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={50}
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">Max 50 characters</p>
                    </div>

                    {/* Description Field */}
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            placeholder="Write a brief description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={200}
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">Max 200 characters</p>
                    </div>

                    {/* Category Selection */}
                    <div>
                        <label className="block font-medium text-gray-700 dark:text-gray-300">Category</label>
                        <select
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="To-Do">📌 To-Do</option>
                            <option value="In Progress">🚧 In Progress</option>
                            <option value="Done">✅ Done</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-blue-700 transition-all dark:bg-blue-600 dark:hover:bg-blue-500"
                    >
                        Update Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TasksUpdate;
