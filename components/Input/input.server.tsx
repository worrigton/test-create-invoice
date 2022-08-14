import React, {useState} from "react";

import styles from "./styles.module.css";

interface IInput {
	type: "text" | "number" | "warning" | "email" | "date",
	placeholder: string;
	fontLg?: boolean;
	required?: boolean;
	value: string;
	name:string;
}

const Input: React.FC<IInput> = ({
	type,
	placeholder,
	required,
	fontLg,
	value,
	name,
}) => {
	const [valueInit, setValueInit] = useState(value);

	const handleInput = ({target}:any) => {
		setValueInit(target.value);
	}

	return (
		<input
			className={`${styles.input} ${!fontLg ?  styles.input_size_md : styles.input_size_lg}`}
			type={type}
			placeholder={placeholder}
			required={required || false}
			name={name}
			value={valueInit}
			onChange={handleInput}
		/>
	);
}
export default Input;
