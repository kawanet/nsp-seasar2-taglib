import type {NSP} from "nsp-server-pages";

/**
 * s
 * uri: http://sastruts.seasar.org
 */
export declare namespace Seasar2S {
    type sTags = {
        form: NSP.TagFn<FormTagAttr>;
        link: NSP.TagFn<LinkTagAttr>;
        submit: NSP.TagFn<SubmitTagAttr>;
    };

    /**
     * <s:form>
     * org.seasar.struts.taglib.S2FormTag
     */
    interface FormTagAttr {
        action?: string;
        acceptCharset?: string;
        disabled?: string;
        enctype?: string;
        focus?: string;
        focusIndex?: string;
        method?: string;
        onreset?: string;
        onsubmit?: string;
        readonly?: string;
        scriptLanguage?: string;
        style?: string;
        styleClass?: string;
        styleId?: string;
        target?: string;
        onkeypress?: string;
        onkeyup?: string;
        onkeydown?: string;
    }

    /**
     * <s:link>
     * org.seasar.struts.taglib.S2LinkTag
     */
    interface LinkTagAttr {
        accesskey?: string;
        action?: string;
        module?: string;
        anchor?: string;
        forward?: string;
        href?: string;
        indexed?: string;
        indexId?: string;
        bundle?: string;
        linkName?: string;
        name?: string;
        onblur?: string;
        onclick?: string;
        ondblclick?: string;
        onfocus?: string;
        onkeydown?: string;
        onkeypress?: string;
        onkeyup?: string;
        onmousedown?: string;
        onmousemove?: string;
        onmouseout?: string;
        onmouseover?: string;
        onmouseup?: string;
        page?: string;
        paramId?: string;
        paramName?: string;
        paramProperty?: string;
        paramScope?: string;
        property?: string;
        scope?: string;
        style?: string;
        styleClass?: string;
        styleId?: string;
        tabindex?: string;
        target?: string;
        title?: string;
        titleKey?: string;
        transaction?: string;
        useLocalEncoding?: string;
    }

    /**
     * <s:submit>
     * org.seasar.struts.taglib.S2SubmitTag
     */
    interface SubmitTagAttr {
        //
        accesskey?: string;
        alt?: string;
        altKey?: string;
        bundle?: string;
        disabled?: string;
        indexed?: string;
        onblur?: string;
        onchange?: string;
        onclick?: string;
        ondblclick?: string;
        onfocus?: string;
        onkeydown?: string;
        onkeypress?: string;
        onkeyup?: string;
        onmousedown?: string;
        onmousemove?: string;
        onmouseout?: string;
        onmouseover?: string;
        onmouseup?: string;
        property?: string;
        style?: string;
        styleClass?: string;
        styleId?: string;
        tabindex?: string;
        title?: string;
        titleKey?: string;
        value?: string;
        clientValidate?: string;
    }
}
