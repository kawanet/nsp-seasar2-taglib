import type {fFunctions as _fFunctions, Seasar2F} from "../types/f.js";

const hFn: Seasar2F.hFn = (input) => {
    throw new Error("Not implemented: ${f:h()}");
};

const uFn: Seasar2F.uFn = (input) => {
    throw new Error("Not implemented: ${f:u()}");
};

const dateFn: Seasar2F.dateFn = (input, pattern) => {
    throw new Error("Not implemented: ${f:date()}");
};

const numberFn: Seasar2F.numberFn = (input, pattern) => {
    throw new Error("Not implemented: ${f:number()}");
};

const brFn: Seasar2F.brFn = (input) => {
    throw new Error("Not implemented: ${f:br()}");
};

const nbspFn: Seasar2F.nbspFn = (input) => {
    throw new Error("Not implemented: ${f:nbsp()}");
};

const urlFn: Seasar2F.urlFn = (input) => {
    throw new Error("Not implemented: ${f:url()}");
};

const labelFn: Seasar2F.labelFn = (value, dataList, valueName, labelName) => {
    throw new Error("Not implemented: ${f:label()}");
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
