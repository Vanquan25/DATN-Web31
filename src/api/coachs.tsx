import instance from "./instance";

export const readCoachs = (id: any) => {
    const url = `/Coachs/${id}`;
    return instance.get(url);
}
export const listCoachs = () => {
    const url = '/Coachs';
    return instance.get(url);
}