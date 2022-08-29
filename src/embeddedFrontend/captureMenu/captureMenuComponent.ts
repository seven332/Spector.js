import { LogLevel } from "../../shared/utils/logger";
import { BaseComponent } from "../mvx/baseComponent";

export interface ICaptureMenuComponentState {
    readonly visible: boolean;
    readonly logText: string;
    readonly logLevel: LogLevel;
    readonly logVisible: boolean;
}

export class CaptureMenuComponent extends BaseComponent<ICaptureMenuComponentState> {

    public render(state: ICaptureMenuComponentState, stateId: number): Element {

        const htmlString = this.htmlTemplate`<div>
            <div childrenContainer="true" class="captureMenuComponent ${state ? "active" : ""}">
            </div>
            <div class="captureMenuLogComponent ${state.logVisible ? "active" : ""}">
                <span class="${state.logLevel === LogLevel.error ? "error" : ""}">${state.logText}<span>
            </div>
            <div class="captureMenuConfigComponent ${state ? "active" : ""}">
                <input type="radio" id="captureMenuConfigFull" name="config" value="full" checked>
                <label for="captureMenuConfigFull">Full</label>
                <input type="radio" id="captureMenuConfigBalance" name="config" value="balance">
                <label for="captureMenuConfigBalance">Balance</label>
                <input type="radio" id="captureMenuConfigQuick" name="config" value="quick">
                <label for="captureMenuConfigQuick">Quick</label>
                <input type="text" id="captureMenuConfigLength" name="length" size="18" placeholder="Max Array Size: 50" autofocus="false">
            </div>
        </div>`;

        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}
