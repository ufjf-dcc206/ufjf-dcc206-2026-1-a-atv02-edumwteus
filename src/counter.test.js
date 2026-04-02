import { describe, it, expect } from 'vitest';
import { setupRootApp } from './setupRootApp.js';

describe('Counter', async () => {
    it('Deve ter um h1', async () => {
        const app = document.createElement('div');
        app.innerHTML = setupRootApp();
        const h1 = app.querySelector('h1');
        expect(h1.textContent).toBe('Get started');
    });
});
