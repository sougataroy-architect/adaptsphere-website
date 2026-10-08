import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const services=JSON.parse(readFileSync(new URL("../src/content/services.json",import.meta.url)));
const insights=JSON.parse(readFileSync(new URL("../src/content/insights.json",import.meta.url)));
test("all seven engagements have unique routable slugs and defined deliverables",()=>{assert.equal(services.length,7);assert.equal(new Set(services.map(s=>s.slug)).size,7);for(const s of services){assert.match(s.slug,/^[a-z]+(?:-[a-z]+)*$/);assert.ok(s.deliver.length);assert.ok(s.problem);}});
test("editorial slugs are unique and articles have content",()=>{assert.equal(new Set(insights.map(s=>s.slug)).size,insights.length);for(const i of insights){assert.ok(i.title);assert.ok(i.sections.length);}});
