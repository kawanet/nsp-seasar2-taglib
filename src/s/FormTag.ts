import type {NSP} from "nsp-server-pages";
import type {Seasar2S} from "../../index.js";

/**
 * <s:form>
 * org.seasar.struts.taglib.S2FormTag
 */
export const formTag: NSP.TagFn<Seasar2S.FormTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
