import { useEffect, useState } from "react";

export const getCurrentSkills = async () => {
    const response = await fetch("/Business-Card/skills.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
}

const useSkills = () => {
    const [skills, setSkills] = useState({ currentSkills: [], futureSkills: [] });

    useEffect(() => {
        getCurrentSkills()
            .then(data => setSkills(data))
    }, []);

    return skills;
}

export default useSkills;