import { Route } from "react-router-dom";
import { IRouter } from "../@type/router.type";

export const handelRecursion = (router: IRouter) => {
    if (router.children.length > 0) {
        return router.children.map((child, index) => {
            return (
                <Route
                    key={index}
                    path={child.path}
                    element={<child.element />}
                >
                    {handelRecursion(child)}
                </Route>
            );
        });
    }
};
