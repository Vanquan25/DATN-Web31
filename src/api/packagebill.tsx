import { PackageBill } from "../Type/BillPackage";
import instance from "./instance";

export const addPackagebill = (PackageBill: PackageBill) => {
    const url = '/PackageBill';
    return instance.post(url, PackageBill);
}