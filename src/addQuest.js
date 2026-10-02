import { useState } from "react";

function AddQuest(props) {
    const [inputText, setInputText] = useState("");

    const handleAdd = () => {
        if (inputText.trim() !== "") {
            props.saveAddQuest(inputText);
            setInputText("");
        }
    };

    return (
        <div className="flex gap-4 w-full justify-center items-center">
            <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="quest"
                className="rounded-full bg-[#2a2a40] text-white pl-4 py-2 w-[70%] focus:outline-none"
            />

            <button
                className="flex items-center justify-center rounded-full bg-purple-600 text-white w-10 h-10 text-xl font-bold hover:bg-purple-700 transition-colors"
                onClick={handleAdd}
            >
                +
            </button>
        </div>
    );
}

export default AddQuest;