import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Index } from "../page/index"

export const RoutesApp = ()=>{
    return (
        <BrowserRouter>
            <Routes>

                <Route path="" element={<Index/>}/>

            </Routes>
        </BrowserRouter>
    )
}