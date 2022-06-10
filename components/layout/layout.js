import { Fragment } from "react";
import MainHeader from "./main-header";

export default function Layout(props){
    return <Fragment>
        <main>
            <MainHeader />
            {props.children}
        </main>
    </Fragment>
}