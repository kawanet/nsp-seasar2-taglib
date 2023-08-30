// SPDX-License-Identifier: Apache-2.0

import {strict as assert} from "assert";
import {fFunctions as S2Functions} from "../index.js";

const TITLE = "S2FunctionsTest.ts";

const assertEquals = (expected: any, actual: any, message?: string) => assert.equal(actual, expected, message);

const assertNotNull = (value: any, message?: string) => assert.notEqual(value ?? null, null, message);

const assertNull = (value: any, message?: string) => assert.equal(value ?? null, null, message);

// DUMMY
const getServletContext = () => ({setServletContextName: (_: string): null => null});

// DUMMY
const getRequest = () => ({setPathInfo: (_: string): null => null});

/**
 * @see https://github.com/seasarorg/sa-struts/blob/master/src/test/java/org/seasar/struts/taglib/S2FunctionsTest.java
 */

describe(TITLE, () => {

    it(`HForIntArray`, () => {
        assertEquals("[1]", S2Functions.h([1]));
    });

    it(`HForBooleanArray`, () => {
        assertEquals("[true]", S2Functions.h([true]));
    });

    it(`HForStringArray`, () => {
        assertEquals("[1]", S2Functions.h(["1"]));
    });

    it(`HForObjectArray`, () => {
        assertEquals("[1]", S2Functions.h([new Number(1)]));
    });

    it(`Date`, () => {
        assertNotNull(S2Functions.date("20080131", "yyyyMMdd"));
    });

    it(`Date_valueIsNull`, () => {
        assertNull(S2Functions.date(null, "yyyyMMdd"));
    });

    it(`Date_patternIsNull`, () => {
        assert.throws(() => {
            S2Functions.date("20080131", null);
        });
    });

    it(`Number`, () => {
        assertEquals("1000", S2Functions.number("1000", "####").toString());
    });

    it(`Number_valueIsNull`, () => {
        assertNull(S2Functions.number(null, "####"));
    });

    it(`Number_patternIsNull`, () => {
        assert.throws(() => {
            S2Functions.number("1000", null);
        });
    });

    it(`BrForCRLF`, () => {
        assertEquals("<br />", S2Functions.br("\r\n"));
    });

    it(`BrForCR`, () => {
        assertEquals("<br />", S2Functions.br("\r"));
    });

    it(`BrForLF`, () => {
        assertEquals("<br />", S2Functions.br("\n"));
    });

    it(`BrForNull`, () => {
        assertEquals("", S2Functions.br(null));
    });

    it(`Nbsp`, () => {
        assertEquals("&nbsp;&nbsp;", S2Functions.nbsp("  "));
    });

    it(`NbspForNull`, () => {
        assertEquals("", S2Functions.nbsp(null));
    });

    // TODO
    it.skip(`UrlForNull`, () => {
        getServletContext().setServletContextName("/context");
        getRequest().setPathInfo("/add/index.jsp");
        assertEquals("/context/add/", S2Functions.url(null));
    });

    it.skip(`UrlForNullAndContextNameNull`, () => {
        getRequest().setPathInfo("/add/index.jsp");
        assertEquals("/add/", S2Functions.url(null));
    });

    it.skip(`UrlForAction`, () => {
        getRequest().setPathInfo("/add/index.jsp");
        assertEquals("/foreach/", S2Functions.url("/foreach"));
    });

    it.skip(`UrlForActionAndParameter`, () => {
        getRequest().setPathInfo("/add/index.jsp");
        assertEquals("/add/submit", S2Functions.url("/add/submit"));
    });

    it.skip(`UrlForParameter`, () => {
        getRequest().setPathInfo("/add/index.jsp");
        assertEquals("/add/edit/1", S2Functions.url("edit/1"));
    });

    it(`LabelUsingMap`, () => {
        const m = new Map<String, any>();
        m.set("value", 1);
        m.set("label", "one");
        const dataList = new Array<Map<String, Object>>();
        dataList.push(m);
        const m2 = new Map<String, Object>();
        m2.set("value", 2);
        m2.set("label", "two");
        dataList.push(m2);

        assertEquals("two", S2Functions.label(2, dataList, "value", "label"));
        assertEquals("", S2Functions.label(0, dataList, "value", "label"));
    });

    it(`LabelUsingMap_null_null`, () => {
        const m = new Map<String, Object>();
        m.set("value", null);
        m.set("label", "one");
        const dataList = new Array<Map<String, Object>>();
        dataList.push(m);

        assertEquals("one", S2Functions.label(null, dataList, "value", "label"));
    });

    it(`LabelUsingMap_empty_null`, () => {
        const m = new Map<String, Object>();
        m.set("value", null);
        m.set("label", "one");
        const dataList = new Array<Map<String, Object>>();
        dataList.push(m);

        assertEquals("one", S2Functions.label("", dataList, "value", "label"));
    });

    it(`LabelUsingMap_empty_empty`, () => {
        const m = new Map<String, Object>();
        m.set("value", "");
        m.set("label", "one");
        const dataList = new Array<Map<String, Object>>();
        dataList.push(m);

        assertEquals("one", S2Functions.label("", dataList, "value", "label"));
    });

    it(`LabelUsingMap_null_empty`, () => {
        const m = new Map<String, Object>();
        m.set("value", "");
        m.set("label", "one");
        const dataList = new Array<Map<String, Object>>();
        dataList.push(m);

        assertEquals("one", S2Functions.label(null, dataList, "value", "label"));
    });

    it(`LabelUsingMap_string_integer`, () => {
        const m = new Map<String, Object>();
        m.set("value", 1);
        m.set("label", "one");
        const dataList = new Array<Map<String, Object>>();
        dataList.push(m);

        assertEquals("one", S2Functions.label("1", dataList, "value", "label"));
    });

    it(`LabelUsingPOJO`, () => {
        const foo = new Foo();
        foo.id = 1;
        foo.name = "one";
        const dataList = new Array<Foo>();
        dataList.push(foo);

        assertEquals("one", S2Functions.label(1, dataList, "id", "name"));
        assertEquals("", S2Functions.label(2, dataList, "id", "name"));
    });

    class Foo {
        id: number;
        name: string;
    }
});
