/**
 * f
 * uri: http://sastruts.seasar.org/functions
 *
 * JSTL 1.1 functions library
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
    type hFn = (a: any) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Escapes characters that could be interpreted as URL.
     *
     * @example
     * ${f:u(param:info)}
     */
    type uFn = (a: string) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Formats characters that could be interpreted as Date.
     *
     * @example
     * <fmt:formatDate value="${f:date(date, 'yyyyMMdd')}" pattern="yyyy/MM/dd"/>
     */
    type dateFn = (a: string, b: string) => Date;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Formats characters that could be interpreted as Number.
     *
     * @example
     * <fmt:formatNumber value="${f:number(number, '####'}" pattern="#,###"/>
     */
    type numberFn = (a: string, b: string) => number;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Converts line break to br tag.
     *
     * @example
     * ${f:br(f:h(textarea))}
     */
    type brFn = (a: string) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Escapes space that could be interpreted as HTML.
     *
     * @example
     * ${f:br(f:nbsp(f:h(textarea)))}
     */
    type nbspFn = (a: string) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Calculates URL.
     *
     * @example
     * <a href="${f:url(param:info)}" ...
     */
    type urlFn = (a: string) => string;

    /**
     * org.seasar.struts.taglib.S2Functions
     *
     * @description
     * Converts value to label.
     *
     * @example
     * ${f:label(e.departmentId, deptItems, "id", "name")}
     */
    type labelFn = (a: any, b: any[], c: string, d: string) => string;
}
