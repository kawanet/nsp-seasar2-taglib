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
    if (input != null) return $$(String(input));
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
const dateFn: Seasar2F.dateFn = (_input, _pattern) => {
    throw new Error("Not implemented: ${f:date()}");
};

/**
 * Parse number
 */
const numberFn: Seasar2F.numberFn = (input, _pattern) => {
    const number = Number(String(input)?.replace(/[^0-9.]/g, ""));
    if (isNaN(number)) return;
    return number;
};

/**
 * Replace "\n" with "<br/>"
 */
const brFn: Seasar2F.brFn = (input) => {
    if (input != null) return String(input).replace(/(\r?\n|\r)/g, "<br />");
};

/**
 * Replace " " with "&nbsp;"
 */
const nbspFn: Seasar2F.nbspFn = (input) => {
    if (input != null) return String(input).replace(/ /g, "&nbsp;");
};

const urlFn: Seasar2F.urlFn = (_input) => {
    throw new Error("Not implemented: ${f:url()}");
};

const labelFn: Seasar2F.labelFn = (value, dataList, valueName, labelName) => {
    if (valueName == null) throw new Error("valueName is required at ${f:label()}");
    if (labelName == null) throw new Error("labelName is required at ${f:label()}");
    if (dataList == null) throw new Error("dataList is required at ${f:label()}");

    for (const item of dataList) {
        if (isMapLike(item)) {
            if (item.get(valueName) === value) {
                return item.get(labelName);
            }
        } else {
            if (item[valueName] === value) {
                return item[labelName];
            }
        }
    }
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
