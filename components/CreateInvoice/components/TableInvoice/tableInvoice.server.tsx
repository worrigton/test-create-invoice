import React, {useEffect, useState, useCallback} from "react";

import styles from "./styles.module.css";
import Input from "../../../../components/Input/input.server";

interface ITable {
	id: string;
}

const TableInvoice: React.FC<ITable> = ({
	id,
}) => {
    const [count, setCount] = useState<number>(0);
    const [itemsArray, setItemsArrary] = useState<any>([]);

    const addNewItem = useCallback(() => {
        setCount(itemsArray.length + 1);
        const numberItem = itemsArray.length + 1;
        const newArray = itemsArray;
        newArray.push(
            <tr key={numberItem}>
            <th>
                <Input
                    type={"text"}
                    placeholder={"0"+numberItem.toString()}
                    value={""}
                    name={"idItem"}
                    id={"idItem_"+numberItem.toString()}
                />
            </th>
            <th>
                <Input
                    type={"text"}
                    placeholder={"Item Description"}
                    value={""}
                    name={"descriptionItem"}
                    id={"descriptionItem_"+numberItem.toString()}
                />
            </th>
            <th className={styles.center}>
                <Input
                    type={"number"}
                    placeholder={"0"}
                    value={""}
                    name={"quantityItem"}
                    id={"quantityItem_"+numberItem.toString()}
                />
            </th>
            <th className={styles.center}>
                <Input
                    type={"number"}
                    placeholder={"$0.00"}
                    value={""}
                    name={"priceItem"}
                    id={"priceItem_"+numberItem.toString()}
                />
            </th>
        </tr>);
        setItemsArrary(newArray);
        console.log(newArray);
    }, [itemsArray]);
    
	return ( <div className={styles.table_invoice}>
		<table id="table">
            <thead>
                <tr>
                    <th>
                        <Input
                            type={"text"}
                            placeholder={""}
                            value={"ID"}
                            name={"idItem"}
                            id={"idItem"}
                        />
                    </th>
                    <th>
                        <Input
                            type={"text"}
                            placeholder={""}
                            value={"Description"}
                            name={"descriptionItem"}
                            id={"descriptionItem"}
                        />
                    </th>
                    <th className={styles.center}>
                        <Input
                            type={"text"}
                            placeholder={""}
                            value={"Quantity"}
                            name={"quantityItem"}
                            id={"quantityItem"}
                        />
                    </th>
                    <th className={styles.center}>
                        <Input
                            type={"text"}
                            placeholder={""}
                            value={"Price"}
                            name={"priceItem"}
                            id={"priceItem"}
                        />
                    </th>
                </tr>
            </thead>
            <tbody>
                { count > 0 && itemsArray.map((item: any) => item)}
                <tr>
                    <td colSpan={4}>
                        <button type="button" onClick={addNewItem} className={styles.btn_add_more_items}>
                            + Add More
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
	);
}
export default TableInvoice;
