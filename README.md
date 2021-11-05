# Billify - Open Source Paper Wallet Generator

This project is meant to provide a "native", installable version of the famous Paper Wallet Generator: https://www.bitaddress.org/ (from pointbiz)

Its code mostly remained untouched, it is still in JavaScript, still works offline (of course) and is plugged into Electron so as to make it installable.

Note: only the paper wallet generator has been ported from bitaddress.org, other features (single, bulk, brain, vanity and split wallets) could be added later if needed.
Note2: this only works to create BTC addresses, we could add more later if needed.

## How to use / best practice ?

- Get a clean bootable DVD or bootable USB stick of your favorite Linux distro
- Boot into your (clean) OS
- Install the Billify package
- Disconnect from the internet
- Run Billify and generate your wallets
- Don't print to file (pdf), print directly to your printer
- Test your wallets before loading them with coins (especially the BIP38 ones)
- Never share your paper wallets or private keys.

Anyone with your private keys (or paper wallets) will be able to access (and empty)
your wallets.

## Warning & Considerations

### A clean OS might not be clean enough

Your BIOS or firmware could be infected... even though it's quite unlikely, this could happen and
could result in someone having access to any wallet generated on that device.

### WiFi printers are a bad idea

Use a wired printer and a "dumb" one if possible, smart ones will keep a copy of stuff they print. You should avoid that unless you are willing to destroy the printer after use. Oh and even if it's a dumb printer, make sure you turn it off right after use... it may have some cache or what not with your keys still in it.

### Spending the coins

Don't spend directly from your paper wallets. Even if (or especially if) you don't need to spend the whole amount on your paper wallet, start by transferring the entire amount to a wallet app (with its own wallet address), and spend from there. If there are some coins left, don't reuse the same paper wallets. Consider them spent/used/finished. Create new paper wallets and send your balance there.

### Be sure you want to destroy your paper wallets before you do

There could be good reasons to show ownership records of your used paper wallets (taxes for example).
You could create a simple spreadsheet for all your past, empty wallets with public key, private key, what they used to hold, when, what you used the coins for and when.
You can then safely dispose of (recycle) the paper.

## Donate

Please consider donating to bitaddress.org (pointbiz), the OG Paper Wallet Generator. Here's their BTC address: 1NiNja1bUmhSoTXozBRBEtR8LeF9TGbZBN

## License

The billify project, software and embedded resources are the copyright of billify (boomdev).
The billify name and logo are not part of the open source license.

Portions of the project contain code that is the copyright of others, see below.
Special thanks to bitaddress.org (pointbiz), whose code is leveraged heavily here.

The billify software is available under The MIT License (MIT)
Copyright (c) 2021 billify (boomdev)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject
to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

GitHub Repository: https://github.com/boomdev/billify
