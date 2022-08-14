import React from "react";

import styles from "./styles.module.css";

interface ICreateInvoice {
	name:string;
}

const CreateInvoice: React.FC<ICreateInvoice> = ({

}) => {

	return (
		<article className={styles.invoice_create_seccion}>
            <div>

            </div>
            <div>

            </div>
        </article>
	);
}
export default CreateInvoice;
