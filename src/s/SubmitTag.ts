import type {NSP} from "nsp-server-pages";
import type {Seasar2S} from "../../index.js";

/**
 * <s:submit>
 * org.seasar.struts.taglib.S2SubmitTag
 */
export const submitTag: NSP.TagFn<Seasar2S.SubmitTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
