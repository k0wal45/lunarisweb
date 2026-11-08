// Uruchamianie: pnpm test (node:test, Node 23.6+ czyta TypeScript bez kompilacji)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sierotki, NBSP as _ } from './sierotki.ts';

test('twarda spacja po jednoliterowych wyrazach', () => {
  assert.equal(sierotki('Pokażmy Twoją firmę w pełni.'), `Pokażmy Twoją firmę w${_}pełni.`);
  assert.equal(sierotki('strony i identyfikacje'), `strony i${_}identyfikacje`);
  assert.equal(sierotki('Z Figmy do kodu'), `Z${_}Figmy do kodu`);
  assert.equal(sierotki('o tym, a potem u nas'), `o${_}tym, a${_}potem u${_}nas`);
});

test('ciąg jednoliterowych wyrazów', () => {
  assert.equal(sierotki('kawa i w domu'), `kawa i${_}w${_}domu`);
  assert.equal(sierotki('a i o'), `a${_}i${_}o`);
});

test('wyraz po nawiasie i cudzysłowie', () => {
  assert.equal(sierotki('(w praktyce)'), `(w${_}praktyce)`);
  assert.equal(sierotki('„z kodem”'), `„z${_}kodem”`);
});

test('nie rusza liter wewnątrz wyrazów ani na końcu tekstu', () => {
  assert.equal(sierotki('kraj ma sens'), 'kraj ma sens');
  assert.equal(sierotki('to jest w'), 'to jest w');
  assert.equal(sierotki('Śląsk i cała Polska'), `Śląsk i${_}cała Polska`);
});

test('liczba i jednostka', () => {
  assert.equal(sierotki('odstęp 16 px'), `odstęp 16${_}px`);
  assert.equal(sierotki('od 3 000 zł netto'), `od 3 000${_}zł netto`);
  assert.equal(sierotki('ładuje się w 1,8 s'), `ładuje się w${_}1,8${_}s`);
  assert.equal(sierotki('TTFB 120 ms'), `TTFB 120${_}ms`);
  assert.equal(sierotki('wynik 98 %'), `wynik 98${_}%`);
  assert.equal(sierotki('w ciągu 2 dni roboczych'), `w${_}ciągu 2${_}dni roboczych`);
  assert.equal(sierotki('za 2 tygodnie'), `za 2${_}tygodnie`);
  assert.equal(sierotki('rozmowa na 30 min.'), `rozmowa na 30${_}min.`);
});

test('nie myli jednostki z początkiem wyrazu', () => {
  assert.equal(sierotki('6 stron dla firm'), '6 stron dla firm');
  assert.equal(sierotki('2 miasta'), '2 miasta');
  assert.equal(sierotki('1–2 nowe projekty'), '1–2 nowe projekty');
});
