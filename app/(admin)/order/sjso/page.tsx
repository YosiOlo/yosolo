import prisma from "../../../lib/prisma";
import Content from "./content";

const getSJSO = async () => {
    const result = await prisma.sjso.findMany();

    return result;
};

const PageSJSO = async () => {
    const sjso = await getSJSO();

    return (
        <div className="p-5 w-full">
            <div className="text-sm breadcrumbs bg-gray-100 w-fit p-3 mb-5 rounded-md">
                <ul>
                    <li><a>Dashboard</a></li>
                    <li className="text-[#4e73df]">SJSO</li>
                </ul>
            </div>

            {sjso && <Content data={sjso} />}
        </div>
    );
};

export default PageSJSO;