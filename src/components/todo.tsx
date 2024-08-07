"use client";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/20/solid";
interface myTask {
    id: number;
    val: string;
}

export default function ToDo() {
    const [task, setTask] = useState<myTask[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [id, setId] = useState<number>(0);
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function taskHandler() {
        if (!inputValue) {
            return;
        }
        setTask([...task, { id: id, val: inputValue }]);
        setId((id) => id + 1);
        setInputValue("");
    }

    function deleteElement(delId: number) {
        const arr = task.filter(({ id }) => id != delId);
        setTask(arr);
    }

    return (
        <div className="w-full">
            <div className="flex gap-6 w-full">
                <div className="bg-white p-3 rounded-md w-full">
                    <div className="relative">
                        <input
                            id="myinput"
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        ></input>
                        <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 focus:text-gray-900" />
                    </div>
                </div>

                <div>
                    <button
                        onClick={taskHandler}
                        className="text-green-950 bg-green-300 p-3 rounded-3xl"
                    >
                        Add Task
                    </button>
                </div>
            </div>
            <div className="gap-6 flex flex-col mt-7">
                {task.map(({ id, val }) => (
                    <div
                        key={`${id}`}
                        className="flex justify-between items-center px-6 py-2 rounded-md bg-slate-100"
                    >
                        <div className="text-blue-800 inline mr-4 text-wrap">
                            {val}
                        </div>

                        <button
                            onClick={() => deleteElement(id)}
                            className="w-14 h-14 bg-red-300 text-white p-3 rounded-full"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
