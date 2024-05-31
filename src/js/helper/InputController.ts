import * as BABYLON from '@babylonjs/core';

export class InputController {
    private _keys: { [key: string]: boolean } = {};

    constructor(scene: BABYLON.Scene) {
        // Attacher les gestionnaires d'événements de clavier à la scène
        scene.onKeyboardObservable.add((kbInfo) => this._handleKeyboardInput(kbInfo));
    }

    private _handleKeyboardInput(kbInfo: BABYLON.KeyboardInfoPre): void {
        const key = kbInfo.event.key;

        if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
            this._keys[key] = true;
        } else if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYUP) {
            this._keys[key] = false;
        }
    }

    public isKeyDown(key: string): boolean {
        return this._keys[key];
    }

    public isKeyUp(key: string): boolean {
        return !this._keys[key];
    }

    static detectKeyboardLayout() {
        let testElement = document.createElement('input');
        testElement.type = 'text';
        document.body.appendChild(testElement);
        testElement.focus();

        let layout = 'QWERTY';
        testElement.addEventListener('keydown', function(event) {
            if (event.key === 'a' || event.key === 'q') {
                layout = (event.key === 'a') ? 'QWERTY' : 'AZERTY';
                testElement.remove();
            }
        });

        // Simuler une touche pour déterminer le layout
        let e = new KeyboardEvent('keydown', { key: 'a' });
        testElement.dispatchEvent(e);

        return layout;
    }
}