import { useState } from "react";
import AddQuest from "./addQuest";

function App() {
    const [quests, setQuests] = useState([]);

    function saveAddQuest(quest) {
        setQuests([...quests, quest]);
    }

    return (
        <div className="flex h-screen justify-center items-center bg-[#1a1a2e]">
            <div className="bg-[#232338] w-[80%] lg:w-[50%] h-[70%] shadow-2xl rounded-3xl flex flex-col items-center p-10 gap-5">
                <h1 className="text-4xl font-bold text-center text-white">
                    Quests To Do
                </h1>

                <AddQuest saveAddQuest={saveAddQuest} />

                <div className="w-[70%] flex flex-col gap-2 mt-4">
                    {quests.map((quest, index) => (
                        <p key={index} className="text-gray-200 bg-[#2a2a40] p-2 rounded-lg">
                            {quest}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;