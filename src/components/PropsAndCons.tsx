import { Component, For } from 'solid-js';
type ProsConsProps = {
    pros: string[];
    cons: string[];
};

const ProsCons: Component<ProsConsProps> = ({ pros, cons }) => {
    return (
        <div class="flex justify-between items-start w-full h-full relative p-8">
            <div class="w-1/2 p-4 bg-green-400  border-green-700 rounded-lg">
                <h2 class="text-center font-bold mb-4">Pros</h2>
                <ul class="list-none p-0">
                    <For each={pros}>{(pro) => <li class="py-2">{pro}</li>}</For>

                </ul>
            </div>
            <div class="w-1/2 p-4 bg-red-400  border-red-700 rounded-lg">
                <h2 class="text-center font-bold mb-4">Cons</h2>
                <ul class="list-none p-0">
                    <For each={cons}>{(con) => <li class="py-2">{con}</li>}</For>

                </ul>
            </div>
            <div class="absolute top-0 bottom-0 left-1/2 w-0.5 bg-dotted border-l-2 border-black"></div>
        </div>
    );
};

export default ProsCons;
