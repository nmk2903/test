import { IRouter } from "../@type/router.type";
import Home from "../pages/user/Home";
import ProductDetail from "../pages/user/ProductDetail";
import Cart from "../pages/user/Cart";
import ProductsByCategory from "../pages/user/ProductsByCategory";
import SearchProducts from "../pages/user/SearchProducts";
import Authentication from "../pages/user/Authentication";
const RouterLayout: IRouter[] = [
    {
        name: "Homepage",
        path: "",
        index: true,
        public: true,
        children: [],
        element: () => <Home />,
    },
    {
        name: "Cart",
        path: "cart",
        index: true,
        public: true,
        children: [],
        element: () => <Cart />,
    },
    {
        name: "ProductsByCategory",
        path: "category/:id",
        index: true,
        public: true,
        children: [],
        element: () => <ProductsByCategory />,
    },
    {
        name: "ProductsByCategory",
        path: "search/keyword?page?",
        index: true,
        public: true,
        children: [],
        element: () => <SearchProducts />,
    },
    {
        name: "ProductDetail",
        path: "products/:id",
        index: true,
        public: true,
        children: [],
        element: () => <ProductDetail />,
    },
    {
        name: "Authentication",
        path: "authentication",
        index: false,
        public: true,
        children: [],
        element: () => <Authentication />,
    },
];

export default RouterLayout;
