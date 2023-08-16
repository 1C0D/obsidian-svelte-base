import {ItemView, WorkspaceLeaf } from "obsidian";
import store from "./store";
import ExamplePlugin from "./main";
import Component from "./Component.svelte";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
    component: Component;
    constructor(leaf: WorkspaceLeaf, public plugin: ExamplePlugin) {
        super(leaf);
        this.plugin = plugin;
    }

    getViewType() {
        return VIEW_TYPE_EXAMPLE;
    }

    getDisplayText() {
        return "Example view";
    }

    async onOpen() {
        // const container = this.containerEl.children[1];
        // container.empty();
        // container.createEl("h4", { text: "Example view" });
        store.plugin.set(this.plugin);
        
        this.component = new Component({
            target: this.contentEl,
            props: {
                variable: 1
            }
        });
    }

    async onClose() {
        this.component.$destroy();
    }
}