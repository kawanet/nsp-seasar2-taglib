export declare const fFunctions: Seasar2F.fFunctions;

/**
 * f
 * uri: http://sastruts.seasar.org/functions
 */
export declare namespace Seasar2F {
    type fFunctions = {
        h: hFn;
        u: uFn;
        date: dateFn;
        number: numberFn;
        br: brFn;
        nbsp: nbspFn;
        url: urlFn;
        label: labelFn;
    };

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Escapes characters that could be interpreted as HTML.
     *
     * @example
     * ${f:h(param:info)}
     */
    type hFn = (input: any) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Escapes characters that could be interpreted as URL.
     *
     * @example
     * ${f:u(param:info)}
     */
    type uFn = (input: string) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Formats characters that could be interpreted as Date.
     *
     * @example
     * <fmt:formatDate value="${f:date(date, 'yyyyMMdd')}" pattern="yyyy/MM/dd"/>
     */
    type dateFn = (input: string, pattern: string) => Date;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Formats characters that could be interpreted as Number.
     *
     * @example
     * <fmt:formatNumber value="${f:number(number, '####'}" pattern="#,###"/>
     */
    type numberFn = (input: string, pattern: string) => number;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Converts line break to br tag.
     *
     * @example
     * ${f:br(f:h(textarea))}
     */
    type brFn = (input: string) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Escapes space that could be interpreted as HTML.
     *
     * @example
     * ${f:br(f:nbsp(f:h(textarea)))}
     */
    type nbspFn = (input: string) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Calculates URL.
     *
     * @example
     * <a href="${f:url(param:info)}" ...
     */
    type urlFn = (input: string) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Converts value to label.
     *
     * @example
     * ${f:label(e.departmentId, deptItems, "id", "name")}
     */
    type labelFn = (value: any, dataList: any[], valueName: string, labelName: string) => string;
}
