import type {Seasar2S, sTags as _sTags} from "../types/s.js";
import {formTag} from "./s/FormTag.js";
import {linkTag} from "./s/LinkTag.js";
import {submitTag} from "./s/SubmitTag.js";

const sTags: typeof _sTags = {
    form: formTag,
    link: linkTag,
    submit: submitTag,
};

export {sTags, Seasar2S};
