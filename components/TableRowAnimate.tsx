import { motion } from "framer-motion";

const TableRowAnimate = ({
    tableData, colSpan, rowOpen
}: {
    tableData: string[];
    colSpan: number[];
    rowOpen: boolean;
}) => {
    return (
        <tr>
            {colSpan.map((item, i) => (
                <td colSpan={item} className="p-0" key={i}>
                    <motion.div
                        animate={{
                            height: rowOpen ? 'fit-content' : 0,
                            margin: rowOpen ? 12 : 0,
                        }}
                        className="flex overflow-hidden"
                    >
                        <p>{tableData[i]}</p>
                    </motion.div>
                </td>
            ))}
        </tr>
    );
};

export default TableRowAnimate;