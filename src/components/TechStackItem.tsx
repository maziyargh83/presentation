import { Component, JSX } from "solid-js"

export const TechStackItem: Component<{
    link: string
}> = (props) => {
    return (
        <div class="w-14 h-14 bg-orange-500/30 rounded flex justify-center items-center">
            <img src={props.link} alt="" />
        </div>
    )
}