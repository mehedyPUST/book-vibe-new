import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage/Homepage";
import Books from "../pages/books/Books";
import ErrorMsg from "./errorElement/ErrorMsg";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [{
            index: true,
            element: <Homepage></Homepage>
        },
        {
            path: "/books",
            element: <Books></Books>
        },
        {
            path: "/bookDetails/:bookId",
            Component: BookDetails,
            loader: () => fetch('/booksData.json')
        }

        ],
        errorElement: <ErrorMsg></ErrorMsg>
    }

])