import Tile from "..";
import { ErrorBox } from "./ErrorBox/index";
import { Loading } from "./Loading/index";

export const Content = ({ status, repositories }) => {
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />

        case "error":
            return <ErrorBox />

        case "success":
            return <Tile />

        default:
            throw new Error(`incorrect status: ${status}`);
    }
};