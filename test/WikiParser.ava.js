import test from 'ava';

import WikiParser from '../src/WikiParser';

const markdown = `
# h1
`;

/** @test {WikiParser.parseToHast} */
test('parseToHast', t => {
  const hast = WikiParser.parseToHast(markdown);
  t.is(hast.children.length, 1);
});

