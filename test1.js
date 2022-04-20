import test1 from 'ava';

import translate from './index';

test1('translate some misspelled english text to dutch', async t => {
    try {
        const res = await translate('I spea Indonesian', {
            from: 'en',
            to: 'id'
        });

        if (res.from.text.autoCorrected || res.from.text.didYouMean) {
            t.is(res.from.text.value, 'I [speak] Dutch');
        } else {
            t.fail();
        }
    } catch (err) {
        t.fail(err.code);
    }
});