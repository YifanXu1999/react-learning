import {IoIosArrowDown} from "react-icons/io";
interface selectProps {
    title: string;
    options: string[];
}
export function Select(selectProps: selectProps) {
    const options = selectProps.options;
    return (
        <div className="relative">
            {/*<h2>{selectProps.title}</h2>*/}
            <select
                defaultValue={""}
                className="w-24 appearance-none border border-gray-300 p-4"

            >
                <option value="" disabled hidden>{selectProps.title}</option>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    )
                    }
                )}
            </select>
            <div className="absolute inset-y-0 right-0 flex-center">
                <IoIosArrowDown></IoIosArrowDown>
            </div>
        </div>
    )
}