import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {fFunctions} from "../index.js";

const TITLE = "synopsis.test.ts";

describe(TITLE, () => {
    /**
     * this is a test just to import the taglib but not to run it
     */
    it("SYNOPSIS", async () => {
        const nsp = createNSP();

        nsp.addTagLib({ns: "f", fn: fFunctions});

        const render = await nsp.loadJSP("test/resources/synopsis1.jsp");

        const result = await render({});

        assert.equal(result.trim(), `TBD`);
    });
});
