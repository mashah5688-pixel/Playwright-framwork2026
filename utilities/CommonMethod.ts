import { Page, Locator, expect } from '@playwright/test';

export async function fillText(locator: Locator, text: string) {
    await locator.fill(text);
}