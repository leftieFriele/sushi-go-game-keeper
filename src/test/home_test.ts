/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { Home } from "../home.js";

import { fixture, assert } from "@open-wc/testing";
import { html } from "lit/static-html.js";

suite("home", () => {
  test("is defined", () => {
    const el = document.createElement("home-screen");
    assert.instanceOf(el, Home);
  });

  test("renders with default values", async () => {
    const el = await fixture(html`<home-screen></home-screen>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Sushi Go! Score Keeper</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test("renders with a set name", async () => {
    const el = await fixture(html`<home-screen name="Test"></home-screen>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Sushi Go! Score Keeper</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test("handles a click", async () => {
    const el = (await fixture(html`<home-screen></home-screen>`)) as Home;
    const button = el.shadowRoot!.querySelector("button")!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Sushi Go! Score Keeper</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test("styling applied", async () => {
    const el = (await fixture(html`<home-screen></home-screen>`)) as Home;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, "16px");
  });
});
