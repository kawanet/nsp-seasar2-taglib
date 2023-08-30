/**
 * @see https://github.com/kawanet/nsp-seasar2-taglib
 */

import {formTag} from "./src/s/FormTag.js";
import {linkTag} from "./src/s/LinkTag.js";
import {submitTag} from "./src/s/SubmitTag.js";
import {Seasar2F} from "./types/f.js";
import {Seasar2S} from "./types/s.js";

export {Seasar2F, Seasar2S};

export const fFunctions: Seasar2F.fFunctions = {
    h: null, // TODO
    u: null, // TODO
    date: null, // TODO
    number: null, // TODO
    br: null, // TODO
    nbsp: null, // TODO
    url: null, // TODO
    label: null, // TODO
};

export const sTags: Seasar2S.sTags = {
    form: formTag,
    link: linkTag,
    submit: submitTag,
};
