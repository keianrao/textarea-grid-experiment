/*
 * This file is part of 'textarea-grid-experiment'.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published 
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details, at
 * <https://www.gnu.org/licenses/agpl-3.0.en.html>.
 */

var main = document.getElementById("mainTextarea");
var grid = document.getElementById("textareaGrid");
var opened = null;
// Would it better to use a property 'opened' in main?

for (let i = 1; i <= 12; ++i) {
	let textarea = document.getElementById("t" + i);
	textarea.readOnly = true;
	textarea.onclick = function () { open(textarea); }
}

function open(textarea) {
	opened = textarea;
	main.value = opened.value;
	grid.style.setProperty("display", "none");
	main.style.setProperty("display", "inline");
}

function returnToGrid() {
	if (!opened) return;
	grid.style.setProperty("display", "grid");
	main.style.setProperty("display", "none");
	opened.value = main.value;
	opened = null;
}

function handleKeyEvent(event) {
	switch (event.key) {
		case "Escape":
			returnToGrid();
			break;
	}
}
window.addEventListener("keydown", handleKeyEvent);