import React from "react";

import InputDataClient from "../../core/constants/InputDataClient.constants";
import InputDataCompany from "../../core/constants/InputDataCompany.constants";
import Input from "../../components/Input/input.server";
import styles from "./styles.module.css";

interface ICreateInvoice {
	name?: string;
}

const CreateInvoice: React.FC<ICreateInvoice> = ({

}) => {

	return (
		<form>
            <article className={styles.invoice_create_seccion}>
            <div className={styles.card}>
                <div className={styles.info_invoice_data}>
                    <h2>Invoice</h2>
                    <div>
                        {InputDataCompany.map(item =>
                            <Input
                                type={item.type}
                                placeholder={item.placeHolder}
                                fontLg={item.fontLg}
                                required={item.required}
                                value={item.value}
                                name={item.name}
                                key={item.name}
                            />)
                        }
                    </div>
                    <div>
                        {InputDataClient.map(item =>
                            <Input
                                type={item.type}
                                placeholder={item.placeHolder}
                                fontLg={item.fontLg}
                                required={item.required}
                                value={item.value}
                                name={item.name}
                                key={item.name}
                            />)
                        }
                    </div>
                </div>
                <div className={styles.info_invoice_date}>
                    <div className={styles.figure_invoice}>
                        <span className={styles.figure_text}>
                            Drag &amp; drop a logo file or click to upload
                        </span>
                        <input type="file" accept="image/*" className={styles.figure_input} />
                    </div>
                </div>
            </div>
        </article>
        </form>
	);
}
export default CreateInvoice;
