import type {NSP} from "nsp-server-pages";
import type {Seasar2S} from "../../index.js";

/**
 * <s:link>
 * org.seasar.struts.taglib.S2LinkTag
 */
export const linkTag: NSP.TagFn<Seasar2S.LinkTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
