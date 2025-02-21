import { AuthContext } from "@/context/AuthProvider";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CiBoxList, CiTimer } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { TbProgress } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Tasks = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axios.get(`https://taskify-x-server.vercel.app/tasks/${user?.email}`);
            return res.data;
        },
    });

    const [localTasks, setLocalTasks] = useState([]);
    useEffect(() => { setLocalTasks(tasks); }, [tasks]);

    const handleUpdate = (taskId) => navigate(`/tasks/update/${taskId}`);

    const handleDelete = (taskId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://taskify-x-server.vercel.app/tasks/${taskId}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your task has been deleted.", "success");
                        refetch();
                    }
                });
            }
        });
    };

    const onDragEnd = async (result) => {
        if (!result.destination) return;

        const updatedTasks = [...localTasks];
        const [movedTask] = updatedTasks.splice(result.source.index, 1);
        movedTask.category = result.destination.droppableId;
        updatedTasks.splice(result.destination.index, 0, movedTask);
        setLocalTasks(updatedTasks);

        try {
            await axios.put(`${import.meta.env.VITE_URL}/tasks/${result.draggableId}`, { category: result.destination.droppableId });
            refetch();
        } catch (error) {
            console.error("Error updating task category:", error);
        }
    };

    const categories = [
        { id: 1, name: "To-Do", bgClass: "bg-gray-100 shadow-md dark:bg-gray-800 dark:text-white", icon: <CiBoxList className="text-xl" /> },
        { id: 2, name: "In Progress", bgClass: "bg-blue-100 shadow-md dark:bg-blue-800 dark:text-white", icon: <TbProgress className="text-xl animate-spin" /> },
        { id: 3, name: "Done", bgClass: "bg-green-100 shadow-md dark:bg-green-800 dark:text-white", icon: <IoCheckmarkDoneCircleOutline className="text-xl" /> },
    ];

    return (
        <div className="bg-white dark:bg-gray-900">

            <div className="min-h-screen w-11/12 mx-auto py-10 max-w-7xl">
                <h2 className="text-3xl font-bold py-10 text-center flex items-center justify-center gap-2 text-gray-800 dark:text-gray-100 animate-pulse">
                    <FaTasks /> Task Board
                </h2>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {categories.map((column) => (
                            <Droppable key={column.name} droppableId={column.name}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps} className={`${column.bgClass} p-5 rounded-lg min-h-96 shadow-2xl relative overflow-hidden`}>
                                        <h2 className={`text-xl font-bold mb-3 flex items-center justify-center gap-2 ${column.id === 2 ? "text-blue-600" : ""} ${column.id === 3 ? "text-green-700" : ""}`}>
                                            {column.icon} {column.name}
                                        </h2>
                                        {localTasks.filter((task) => task.category === column.name).map((task, index) => (
                                            <Draggable key={task._id} draggableId={task._id} index={index}>
                                                {(provided) => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-blue-100 dark:bg-green-900 border-l-4 border-violet-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center justify-between transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-green-800 transform hover:scale-105 mt-6">
                                                        <div>
                                                            <h3 className="font-semibold text-base text-gray-800 uppercase dark:text-gray-100">{task.title}</h3>
                                                            <p className="text-gray-600 text-sm mb-3 dark:text-gray-300">{task.description}</p>
                                                            <p className="text-gray-600 mb-3 text-xs flex items-center gap-1 dark:text-gray-400">
                                                                <CiTimer className="text-sm" /> {new Date(task.dueDate).toLocaleString()}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-1">
                                                            <button className="btn btn-sm btn-primary rounded-xl text-white" onClick={() => handleUpdate(task._id)}>
                                                                <FiEdit />
                                                            </button>
                                                            <button onClick={() => handleDelete(task._id)} className="btn btn-sm btn-danger rounded-xl text-white">
                                                                🗑
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </div>
                </DragDropContext>
            </div>
        </div>

    );
};

export default Tasks;
