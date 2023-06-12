import { useState, Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sass/App.scss";
import { handelRecursion } from "./router/HandleRenderRouter";
import { Loader } from "./componenets/cores";
import RouterView from "./router/Router";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Suspense fallback={<Loader />}>
                <Routes>
                    {RouterView.map((router, index) => {
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={<router.element />}
                            >
                                {handelRecursion(router)}
                            </Route>
                        );
                    })}
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
