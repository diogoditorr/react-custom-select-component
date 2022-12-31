import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
    { label: "Sixth", value: 6 },
];

export function App() {
    const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);
    const [value2, setValue2] = useState<SelectOption[]>([]);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Select
                options={options}
                value={value1}
                onChange={(newValue) => setValue1(newValue)}
            />
            <Select
                multiple
                options={options}
                value={value2}
                onChange={(newValue) => setValue2(newValue)}
            />
        </div>
    );
}
