export type IRouter =  {
    path: string;
    public: boolean;
    name?: string;
    index?: boolean;
    children: IRouter[];
    element: () => JSX.Element;
}