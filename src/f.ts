// SPDX-License-Identifier: Apache-2.0

import {$$} from "telesy";
import type {fFunctions as _fFunctions, Seasar2F} from "../types/f.js";

interface MapLike<K = string, V = any> {
    get(key: K): V | undefined;
}

const isMapLike = (v: unknown): v is MapLike => (v && ("function" === typeof (v as MapLike).get) && ((v as MapLike).get.length >= 1));

/**
 * Escape special characters in HTML
 */
const hFn: Seasar2F.hFn = (input) => {
    if (input == null) return;
    const isArray = Array.isArray(input);
    if ("string" !== typeof input) input = String(input);
    if (isArray) return `[${input}]`;
    return $$(input);
};

/**
 * Escape special characters in URL
 */
const uFn: Seasar2F.uFn = (input) => {
    if (input != null) return encodeURIComponent(input);
};

/**
 * Parse Date
 */
const dateFn: Seasar2F.dateFn = (input, pattern) => {
    if (input == null) return;
    if (input === "") return;
    if (pattern == null) throw new Error("pattern is required at ${f:date()}");

    // TODO
    if (pattern === "yyyyMMdd") {
        input = input.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
    }

    const dt = new Date(input);
    if (!isNaN(+dt)) return dt;

    throw new Error("Not implemented: ${f:date()}");
};

/**
 * Parse number
 */
const numberFn: Seasar2F.numberFn = (input, pattern) => {
    if (input == null) return;
    if (input === "") return;
    if (pattern == null) throw new Error("pattern is required at ${f:number()}");

    const number = Number(String(input)?.replace(/[^0-9.]/g, ""));
    if (isNaN(number)) return;
    return number;
};

/**
 * Replace "\n" with "<br/>"
 */
const brFn: Seasar2F.brFn = (input) => {
    if (input == null) return "";
    return String(input).replace(/(\r?\n|\r)/g, "<br />");
};

/**
 * Replace " " with "&nbsp;"
 */
const nbspFn: Seasar2F.nbspFn = (input) => {
    if (input == null) return "";
    return String(input).replace(/ /g, "&nbsp;");
};

const urlFn: Seasar2F.urlFn = (_input) => {
    throw new Error("Not implemented: ${f:url()}");
};

const labelFn: Seasar2F.labelFn = (value, dataList, valueName, labelName) => {
    if (value == null) value = "";
    if (valueName == null) throw new Error("valueName is required at ${f:label()}");
    if (labelName == null) throw new Error("labelName is required at ${f:label()}");
    if (dataList == null) throw new Error("dataList is required at ${f:label()}");

    for (const item of dataList) {
        if (isMapLike(item)) {
            if ((item.get(valueName) ?? "") == value) { // not ===
                return item.get(labelName);
            }
        } else {
            if ((item[valueName] ?? "") == value) { // not ===
                return item[labelName];
            }
        }
    }

    // not found
    return "";
};

const fFunctions: typeof _fFunctions = {
    h: hFn,
    u: uFn,
    date: dateFn,
    number: numberFn,
    br: brFn,
    nbsp: nbspFn,
    url: urlFn,
    label: labelFn,
};

export {fFunctions, Seasar2F};
