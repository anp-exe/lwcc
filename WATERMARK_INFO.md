# Invisible watermark

Every page has an invisible zero-width-character watermark hidden in the footer copyright line, right after "A Community Interest Company". It renders as nothing (no visible characters, no layout change) but survives copy-paste and view-source, so if someone lifts your HTML or copied text wholesale, this fingerprint travels with it.

Fingerprint text: 

Encoding: each character of the fingerprint is converted to 8-bit binary. U+200B (zero-width space) = 0, U+200C (zero-width non-joiner) = 1. The sequence is wrapped in U+2060 (word joiner) markers, x3 at the start and x4 at the end, so you can locate it programmatically later.

This file is just for your reference, it is not linked from anywhere on the site and does not need to be deployed (you can keep it out of the live folder if you prefer, it will not break anything either way).

## How to check if a page has your watermark

Paste suspect text into a plain text editor or run it through a script that strips everything except U+200B/U+200C/U+2060, then decode: group remaining bits into bytes of 8, using 0 for U+200B and 1 for U+200C, and convert each byte back to a character. If you get "LWCC-ORIGINAL-2026" back, it is a copy of your content.
